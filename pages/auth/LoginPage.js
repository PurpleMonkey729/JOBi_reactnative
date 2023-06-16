import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

import InputIcon from '../../components/InputIcon';
import { css } from '../../style';

import btn_back from '../../assets/btn-back.png';
import img_logo from '../../assets/logo2.png';
import icon_mail from '../../assets/icon-mail.png';
import icon_lock from '../../assets/icon-lock.png';
import btn_grad from '../../assets/btn-grad.png';

const styles = StyleSheet.create({
    header: {
        marginTop: '38rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'relative',
    },
    btn_back: {
        position: 'absolute',
        width: '16rem',
        height: '16rem',
        top: '0rem',
        left: '37rem',
    },
    header_ttl: {
        color: 'white',
        fontSize: 15.5,
    },
    img_logo: {
        width: '355rem',
        height: '141rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '52rem',
    },
    ttl: {
        marginTop: '46rem',
    },
    dsc: {
        marginTop: '13rem',
        marginBottom: '36rem',
    },
    btn_yellow: {
        marginTop: '43rem',
    },
    bg_modal: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0rem',
        left: '0rem',
        backgroundColor: '#ffffff00',
    },
    modal: {
        marginTop: '304rem',
        width: '295rem',
        height: '205rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        paddingTop: '21rem',
        paddingLeft: '24rem',
        paddingRight: '24rem',
        boxShadow: '0 5px 5px #134D7Eaa',
    },
    ttl_modal: {
        fontSize: '14rem',
        color: '#2699FB',
        fontWeight: 'bold',
    },
    txt_modal: {
        fontSize: '14rem',
        color: '#2699FB',
        marginTop: '16rem',
    },
    btn_modal: {
        marginTop: '45rem',
        marginLeft: 'auto',
        fontSize: '14rem',
        color: '#2699FB',
        fontWeight: 'bold',
    },
    btn: {
        marginTop: '55rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '367rem',
        height: '71rem',
    }
});

export default function LoginPage(props) {
    const [isShowModal, setShowModal] = useState(false);
    const login = () => {
        // If login failed!!!
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return (
        <View style={css.cont_blue}>
            <View style={styles.header}>
                <Image source={btn_back} style={styles.btn_back} />
                <Text style={styles.header_ttl}>ログイン</Text>
            </View>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>ログイン</Text>
            <Text style={[css.dsc, styles.dsc]}>アカウントをお持ちの方</Text>
            <InputIcon icon={icon_mail} placeholder="メールアドレス" keyboardType="default"></InputIcon>
            <View style={{ marginTop: 17 }}></View>
            <InputIcon icon={icon_lock} placeholder="パスワード" keyboardType="default"></InputIcon>
            <Pressable onPress={login}>
                <Image source={btn_grad} style={styles.btn} />
            </Pressable>
            {
                isShowModal &&
                <View style={styles.bg_modal}>
                    <View style={styles.modal}>
                        <Text style={styles.ttl_modal}>ログインに失敗しました</Text>
                        <Text style={styles.txt_modal}>メールアドレスもしくはパスワードが間違っています。再度ログインをお試しください。</Text>
                        <View style={styles.btn_modal} onStartShouldSetResponder={closeModal}>OK</View>
                    </View>
                </View>
            }
        </View >
    );
}
