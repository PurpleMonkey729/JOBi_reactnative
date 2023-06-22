import { StyleSheet, Text, View, Image } from 'react-native';

import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import img_mid from '../../assets/img-auth-index.png';

const styles = StyleSheet.create({
    img_logo: {
        width: '355rem',
        height: '141rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '47rem',
    },
    img_mid: {
        width: '336rem',
        height: '323rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '34rem',
    },
    ttl: {
        marginTop: '40rem',
        color: '#5D4AFF',
        textAlign: 'center',
        fontSize: '28rem',
        fontWeight: 'bold',
    },
    dsc: {
        marginTop: '13rem',
        color: '#5D4AFF',
        textAlign: 'center',
        fontSize: '16rem',
    },
    btn_yellow: {
        marginTop: '43rem',
    },
    btn_login: {
        width: '300rem',
        height: '52rem',
        color: 'white',
        fontSize: '16rem',
        backgroundColor: '#332180',
        border: '2px solid white',
        borderRadius: '5rem',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '26rem',
    },
});

export default function AuthIndexPage(props) {
    return (
        <View style={css.cont_blue}>
            <Image source={img_logo} style={styles.img_logo} />
            <Image source={img_mid} style={styles.img_mid} />
            <Text style={styles.ttl}>JOBiへようこそ！</Text>
            <Text style={styles.dsc}>登録してJOBiをはじめよう！</Text>
            <View style={[css.btn_yellow, styles.btn_yellow]}>新規登録</View>
            <View style={styles.btn_login}>ログイン</View>
        </View >
    );
}
