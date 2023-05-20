import { StyleSheet, Text, View, Image, TextInput, Picker } from 'react-native';
import { useState } from "react";

import ButtonNext from '../../components/ButtonNext';
import CheckBox from '../../components/CheckBox';
import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import photo_default from '../../assets/photo.png';
import btn_camera from '../../assets/camera.png';
import btn_next from '../../assets/btn-next.png';

const styles = StyleSheet.create({
    img_logo: {
        width: 355,
        height: 141,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 47,
    },
    ttl: {
        marginTop: 30,
    },
    sub_ttl: {
        fontSize: 15.5,
        color: 'white',
        paddingLeft: 67,
        marginTop: 20,
        marginBottom: 9
    },
    box: {
        width: 300,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'flex-end',
    },
    input: {
        width: 145,
        marginLeft: 0,
        marginRight: 0,
    },
    select: {
        border: 'none',
        width: 72,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 10,
    },
    box_gender: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 64,
    },
    checkbox: {
        width: 30,
        height: 30,
        backgroundColor: 'blue'
    },
    text_label: {
        fontSize: 14,
        color: 'white',
    },
    text_yellow: {
        color: '#E1FA08',
        fontSize: 12,
        marginLeft: 67,
    },
    photo_box: {
        width: 104,
        marginTop: -75,
        marginLeft: 248,
        position: 'relative',
    },
    photo: {
        width: 104,
        height: 104,
    },
    btn_camera: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: -5,
        bottom: -5,
    },
    btn_next: {
        marginTop: 27,
        marginLeft: 327,
        marginBottom: 49,
    },
});

export default function RegistPage4(props) {
    const [ch_m, setMale] = useState(false);
    const [ch_f, setFemale] = useState(false);
    return (
        <View style={css.cont_blue}>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>基本情報入力</Text>
            <Text style={styles.sub_ttl}>氏名</Text>
            <View style={styles.box}>
                <TextInput style={[css.input, styles.input]} placeholder='姓' />
                <TextInput style={[css.input, styles.input]} placeholder='名' />
            </View>
            <Text style={styles.sub_ttl}>フリガナ</Text>
            <View style={styles.box}>
                <TextInput style={[css.input, styles.input]} placeholder='セイ' />
                <TextInput style={[css.input, styles.input]} placeholder='メイ' />
            </View>
            <Text style={styles.sub_ttl}>生年月日</Text>
            <View style={styles.box}>
                <Picker
                    selectedValue='選択'
                    style={[css.input, styles.select]}
                >
                    <Picker.Item label="選択" value="選択" />
                    <Picker.Item label="1950" value="1950" />
                </Picker>
                <Text style={styles.text_label}>年</Text>
                <Picker
                    selectedValue='選択'
                    style={[css.input, styles.select]}
                >
                    <Picker.Item label="選択" value="選択" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                </Picker>
                <Text style={styles.text_label}>月</Text>
                <Picker
                    selectedValue='選択'
                    style={[css.input, styles.select]}
                >
                    <Picker.Item label="選択" value="選択" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                </Picker>
                <Text style={styles.text_label}>日</Text>
            </View>
            <Text style={styles.sub_ttl}>性別</Text>
            <View style={styles.box_gender}>
                <CheckBox
                    onPress={() => setMale(!ch_m)}
                    title="男性"
                    isChecked={ch_m}
                    type={'editable'}
                />
                <View style={{marginLeft: 58}} />
                <CheckBox
                    onPress={() => setFemale(!ch_f)}
                    title="女性"
                    isChecked={ch_f}
                    type={'editable'}
                />
            </View>
            <Text style={styles.sub_ttl}>メールアドレス</Text>
            <TextInput style={css.input} placeholder='入力' />
            <Text style={styles.sub_ttl}>顔写真のアップロード</Text>
            <Text style={styles.text_yellow}>必ず顔が分かる写真を<br />お選び下さい。</Text>
            <View style={styles.photo_box}>
                <Image source={photo_default} style={styles.photo} />
                <Image source={btn_camera} style={styles.btn_camera} />
            </View>
            <View style={styles.btn_next}><ButtonNext img={btn_next} txt='4/5' /></View>
        </View >
    );
}
