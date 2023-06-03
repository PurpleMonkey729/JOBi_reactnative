import { StyleSheet, Text, View, Image } from 'react-native';

import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import img_mid from '../../assets/work_end.png';

const styles = StyleSheet.create({
    img_logo: {
        width: 355,
        height: 141,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 47,
    },
    img_mid: {
        width: 336,
        height: 323,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 34,
    },
    ttl: {
        marginTop: 40,
    },
    dsc: {
        marginTop: 13
    },
    btn_yellow: {
        marginTop: 43,
    },
    btn_login: {
        width: 300,
        height: 52,
        color: 'white',
        fontSize: 16,
        backgroundColor: '#2C92D2',
        border: '2px solid white',
        borderRadius: 5,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 26,
    },
});

export default function WorkEndPage(props) {
    return (
        <View style={css.cont_blue}>
            <Image source={img_logo} style={styles.img_logo} />
            <Image source={img_mid} style={styles.img_mid} />
            <Text style={[css.ttl, styles.ttl]}>JOBiへようこそ！</Text>
            <Text style={[css.dsc, styles.dsc]}>登録してJOBiをはじめよう！</Text>
            <View style={[css.btn_yellow, styles.btn_yellow]}>新規登録</View>
            <View style={styles.btn_login}>ログイン</View>
        </View >
    );
}
