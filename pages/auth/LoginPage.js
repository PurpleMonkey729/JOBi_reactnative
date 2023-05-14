import { StyleSheet, Text, View, Image } from 'react-native';

import InputIcon from '../../components/InputIcon';
import { css } from '../../style';

import btn_back from '../../assets/btn-back.png';
import img_logo from '../../assets/logo2.png';
import icon_mail from '../../assets/icon-mail.png';
import icon_lock from '../../assets/icon-lock.png';

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
        marginTop: 52,
    },
    ttl: {
        marginTop: 46,
    },
    dsc: {
        marginTop: 13,
        marginBottom: 36,
    },
    btn_yellow: {
        marginTop: 43,
    },
});

export default function LoginPage(props) {
    return (
        <View style={css.cont}>
            <View style={styles.header}>
                <Image source={btn_back} style={styles.btn_back} />
                <Text style={styles.header_ttl}>ログイン</Text>
            </View>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>ログイン</Text>
            <Text style={[css.dsc, styles.dsc]}>アカウントをお持ちの方</Text>
            <InputIcon icon={icon_mail} placeholder="メールアドレス" keyboardType="default"></InputIcon>
            <View style={{marginTop:17}}></View>
            <InputIcon icon={icon_lock} placeholder="パスワード" keyboardType="default"></InputIcon>
            <View style={[css.btn_yellow, styles.btn_yellow]}>ログイン</View>
        </View >
    );
}
