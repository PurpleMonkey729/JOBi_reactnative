import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import CheckBox from '../../components/CheckBox';
import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import photo_default from '../../assets/photo_person.png';
import btn_back from '../../assets/btn-back.png';

const styles = StyleSheet.create({
    header: {
        marginTop: 38,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
    },
    btn_back: {
        position: 'absolute',
        width: 16,
        height: 16,
        top: 0,
        left: 37,
    },
    header_ttl: {
        color: 'white',
        fontSize: 15.5,
    },
    img_logo: {
        width: 355,
        height: 141,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
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
    },
    input: {
        width: 145,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        backgroundColor: 'transparent',
    },
    select: {
        border: 'none',
        width: 40,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        textAlign: 'right',
        backgroundColor: 'transparent',
    },
    text_birth: {
        marginTop: 21,
    },
    box_gender: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
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
    text_agree: {
        color: 'white', 
        fontSize: 12, 
        marginTop: 35, 
        marginLeft: 67,
    },
    photo: {
        width: 104,
        height: 104,
        marginTop: -75,
        marginLeft: 248,
    },
    btn_yellow: {
        marginTop: 35,
        marginBottom: 50, 
    }
});

export default function RegistPage4(props) {
    return (
        <View style={css.cont_blue}>
            <View style={styles.header}>
                <Image source={btn_back} style={styles.btn_back} />
                <Text style={styles.header_ttl}>最終確認</Text>
            </View>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>入力情報確認</Text>
            <Text style={styles.sub_ttl}>氏名</Text>
            <View style={styles.box}>
                <TextInput style={[css.input, styles.input]} value='木村' />
                <TextInput style={[css.input, styles.input]} value='晋次' />
            </View>
            <Text style={styles.sub_ttl}>フリガナ</Text>
            <View style={styles.box}>
                <TextInput style={[css.input, styles.input]} value='キムラ' />
                <TextInput style={[css.input, styles.input]} value='シンジ' />
            </View>
            <Text style={styles.sub_ttl}>生年月日</Text>
            <View style={styles.box}>
                <TextInput value='1989' style={[css.input, styles.select]} />
                <Text style={[styles.text_label, styles.text_birth]}>年</Text>
                <TextInput value='3' style={[css.input, styles.select]} />
                <Text style={[styles.text_label, styles.text_birth]}>月</Text>
                <TextInput value='14' style={[css.input, styles.select]} />
                <Text style={[styles.text_label, styles.text_birth]}>日</Text>
            </View>
            <Text style={styles.sub_ttl}>性別</Text>
            <View style={styles.box_gender}>
                <CheckBox
                    title="男性"
                    isChecked={true}
                    type={'readonly'}
                />
                <View style={{ marginLeft: 93 }} />
                <Text style={styles.text_label}>女性</Text>
            </View>
            <Text style={styles.sub_ttl}>メールアドレス</Text>
            <TextInput style={[css.input, {backgroundColor:'transparent', paddingLeft:0}]} value='kimura@minepro.co.jp' />
            <Text style={styles.sub_ttl}>顔写真のアップロード</Text>
            <Text style={styles.text_yellow}>必ず顔が分かる写真を<br />お選び下さい。</Text>
            <Image source={photo_default} style={styles.photo} />
            <Text style={styles.text_agree}>登録完了すると利用規約とプライバシーポリシーに<br/>同意したことになります。</Text>
            <View style={[css.btn_yellow, styles.btn_yellow]}>✓　この内容で会員登録する</View>
        </View >
    );
}
