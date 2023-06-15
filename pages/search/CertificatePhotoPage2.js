import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

import { css } from '../../style';

import image from '../../assets/tmp2.png';
import btn_return from '../../assets/left.png';

const styles = StyleSheet.create({
    btn_return: {
        width: '12rem',
        height: '20rem',
        position: 'absolute',
        top: '30rem',
        left: '20rem',
    },
    img: {
        width: '428rem',
        height: '375rem',
    },
    ttl: {
        fontSize: '28rem',
        fontWeight: 'bold',
        marginTop: '20rem',
        marginLeft: '15rem',
        marginRight: '15rem',
    },
    txt: {
        marginTop: '20rem',
        marginLeft: '15rem',
        marginRight: '15rem',
        fontSize: '16rem',
    },
    box_btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '175rem',
        paddingLeft: '20rem',
        paddingRight: '20rem',
    },
    btn_left: {
        border: '1px solid #3478F6',
        color: '#3478F6',
        width: '100rem',
        height: '40rem',
    },
    btn_right: {
        backgroundColor: '#3478F6',
        color: 'white',
        width: '120rem',
        height: '40rem',
    }
});

export default function CertificatePage(props) {
    return (
        <View style={css.cont_white_full}>
            <Image source={image} style={styles.img} />
            <Text style={styles.ttl}>身分証明書全体が、鮮明に写っていますか？</Text>
            <Text style={styles.txt}>運転免許証のオモッテ面全体が鮮明に写っている、手ブレ、はみ出し、反射のない写真でなければなりません。</Text>
            <Text style={styles.txt}>また、身分証明書が、タイミー上で第三者に開示されることはありません。</Text>
            <View style={styles.box_btn}>
                <View style={[css.btn, styles.btn_left]}>撮り撮る</View>  
                <View style={[css.btn, styles.btn_right]}>この写真にOK</View>
            </View>
            <Pressable style={{position: 'initial'}}>
                <Image source={btn_return} style={styles.btn_return} />
            </Pressable>
        </View>
    );
}