import { Pressable, StyleSheet, Text, View, Image, TextInput, Picker } from 'react-native';
import { useState } from "react";

import ButtonNext from '../../components/ButtonNext';
import CheckBox from '../../components/CheckBox';
import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import photo_default from '../../assets/photo.png';
import btn_camera from '../../assets/camera.png';
import btn_next from '../../assets/btn-next.png';
import btn_back from '../../assets/btn-back.png';

const styles = StyleSheet.create({
    header: {
        marginTop: '38rem',
        display: 'flex',
        flexDirection: 'row',
    },
    btn_back: {
        marginLeft: '39rem',
        width: '16rem',
        height: '16rem',
    },
    header_ttl: {
        marginLeft: '128rem',
        color: 'white',
        fontSize: 15.5,
    },
    img_logo: {
        width: '355rem',
        height: '141rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '47rem',
    },
    ttl: {
        marginTop: '30rem',
    },
    sub_ttl: {
        fontSize: 15.5,
        color: 'white',
        paddingLeft: '67rem',
        marginTop: '20rem',
        marginBottom: 9
    },
    box: {
        width: '300rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'flex-end',
    },
    input: {
        width: '145rem',
        marginLeft: '0rem',
        marginRight: '0rem',
    },
    select: {
        border: 'none',
        width: '72rem',
        marginLeft: '0rem',
        marginRight: '0rem',
        paddingLeft: '10rem',
    },
    box_gender: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '64rem',
    },
    checkbox: {
        width: '30rem',
        height: '30rem',
        backgroundColor: 'blue'
    },
    text_label: {
        fontSize: '14rem',
        color: 'white',
    },
    text_yellow: {
        color: '#E1FA08',
        fontSize: '12rem',
        marginLeft: '67rem',
    },
    photo_box: {
        width: '104rem',
        marginTop: '-75rem',
        marginLeft: '248rem',
        position: 'relative',
    },
    photo: {
        width: '104rem',
        height: '104rem',
    },
    btn_camera: {
        width: '40rem',
        height: '40rem',
        position: 'absolute',
        right: '-5rem',
        bottom: '-5rem',
    },
    btn_next: {
        marginTop: '27rem',
        marginLeft: '327rem',
        marginBottom: '49rem',
    },
    input_ok: {
        backgroundColor: 'transparent',
        appearance: 'none',
    },
    date_ok: {
        alignItems: 'center',
    },
    text_agree: {
        color: 'white',
        fontSize: '12rem',
        marginTop: '35rem',
        marginLeft: '67rem',
    },
    btn_yellow: {
        marginTop: '35rem',
        marginBottom: '50rem',
    }
});

export default function RegistPage4(props) {
    const years = Array.from(Array(50).keys()).map(i=> i+1950);
    const months = Array.from(Array(12).keys()).map(i=> i+1);
    const days = Array.from(Array(31).keys()).map(i=> i+1);
    console.log(years);
    const [gender, setGender] = useState("M")
    const [conform, setConform] = useState(false);
    const clickCheckMale = key => {
        if (!conform) {
            setGender("M")
        }
    }
    const clickCheckFemale = key => {
        if (!conform) {
            setGender("F")
        }
    }
    const clickGo = () => {
        setConform(true);
    }
    const clickEdit = () => {
        setConform(false);
    }
    return (
        <View style={css.cont_blue}>
            {
                conform &&
                <View style={styles.header}>
                    <Pressable onPress={clickEdit}>
                        <Image source={btn_back} style={styles.btn_back} />
                    </Pressable>
                    <Text style={styles.header_ttl}>最終確認</Text>
                </View>
            }
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>基本情報入力</Text>
            <Text style={styles.sub_ttl}>氏名</Text>
            <View style={styles.box}>
                <TextInput style={[css.input, styles.input, conform && styles.input_ok]} placeholder={!conform && '姓'} disabled={conform} />
                <TextInput style={[css.input, styles.input, conform && styles.input_ok]} placeholder={!conform && '名'} disabled={conform} />
            </View>
            <Text style={styles.sub_ttl}>フリガナ</Text>
            <View style={styles.box}>
                <TextInput style={[css.input, styles.input, conform && styles.input_ok]} placeholder={!conform && 'セイ'} disabled={conform} />
                <TextInput style={[css.input, styles.input, conform && styles.input_ok]} placeholder={!conform && 'メイ'} disabled={conform} />
            </View>
            <Text style={styles.sub_ttl}>生年月日</Text>
            <View style={[styles.box, conform && styles.date_ok]}>
                <Picker
                    style={[css.input, styles.select, conform && styles.input_ok]}
                    disabled={conform}
                >
                    <Picker.Item label="選択" value="選択" />
                    {
                        years.map(item =>
                            <Picker.Item label={item} color="black" value={item} />
                        )
                    }
                </Picker>
                <Text style={styles.text_label}>年</Text>
                <Picker
                    style={[css.input, styles.select, conform && styles.input_ok]}
                    disabled={conform}
                >
                    <Picker.Item label="選択" value="選択" />
                    {
                        months.map(item =>
                            <Picker.Item label={item} color="black" value={item} />
                        )
                    }
                </Picker>
                <Text style={styles.text_label}>月</Text>
                <Picker
                    style={[css.input, styles.select, conform && styles.input_ok]}
                    disabled={conform}
                >
                    <Picker.Item label="選択" value="選択" />
                    {
                        days.map(item =>
                            <Picker.Item label={item} color="black" value={item} />
                        )
                    }
                </Picker>
                <Text style={styles.text_label}>日</Text>
            </View>
            <Text style={styles.sub_ttl}>性別</Text>
            <View style={styles.box_gender}>
                <CheckBox
                    onPress={() => clickCheckMale()}
                    txt="男性"
                    checked={gender=="M"}
                    disabled={conform}
                />
                <View style={{ marginLeft: 58 }} />
                <CheckBox
                    onPress={() => clickCheckFemale()}
                    txt="女性"
                    checked={gender=="F"}
                    disabled={conform}
                />
            </View>
            <Text style={styles.sub_ttl}>メールアドレス</Text>
            <TextInput style={[css.input, conform && styles.input_ok]} placeholder={!conform && '入力'} disabled={conform} />
            <Text style={styles.sub_ttl}>顔写真のアップロード</Text>
            <Text style={styles.text_yellow}>必ず顔が分かる写真を<br />お選び下さい。</Text>
            <View style={styles.photo_box}>
                <Image source={photo_default} style={styles.photo} />
                {
                    !conform &&
                    <Image source={btn_camera} style={styles.btn_camera} />
                }
            </View>
            {
                !conform &&
                <View style={styles.btn_next} onStartShouldSetResponder={clickGo}><ButtonNext img={btn_next} txt='4/5' /></View>
            }
            {
                conform &&
                <View>
                    <Text style={styles.text_agree}>登録完了すると利用規約とプライバシーポリシーに<br />同意したことになります。</Text>
                    <View style={[css.btn_yellow, styles.btn_yellow]}>✓　この内容で会員登録する</View>
                </View>
            }
        </View >
    );
}
