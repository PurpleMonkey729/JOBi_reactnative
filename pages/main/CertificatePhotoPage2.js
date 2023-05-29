import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';

import image from '../../assets/tmp2.png';
import btn_return from '../../assets/left.png';

const styles = StyleSheet.create({
    btn_return: {
        width: 12,
        height: 20,
        position: 'absolute',
        top: 30,
        left: 20,
    },
    img: {
        width: 428,
        height: 375,
    },
    ttl: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    txt: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 16,
    },
    box_btn: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 175,
        paddingLeft: 20,
        paddingRight: 20,
    },
    btn_left: {
        border: '1px solid #3478F6',
        color: '#3478F6',
        width: 100,
        height: 40,
    },
    btn_right: {
        backgroundColor: '#3478F6',
        color: 'white',
        width: 120,
        height: 40,
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