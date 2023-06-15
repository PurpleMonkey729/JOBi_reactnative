import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

import { css } from '../../style';

import image from '../../assets/tmp1.png';
import btn_camera from '../../assets/camera2.png';
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
    btn_camera: {
        width: '77rem',
        height: '77rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '250rem',
    }
});

export default function CertificatePage(props) {
    return (
        <View style={css.cont_white_full}>
            <Image source={image} style={styles.img} />
            <Text style={styles.ttl}>運転免許証のオモテ面全体を撮影してください。</Text>
            <Text style={styles.txt}>運転免許証のオモテ面全体を撮影してください。</Text>
            <Pressable>
                <Image source={btn_camera} style={styles.btn_camera} />
            </Pressable>
            <Pressable style={{position: 'initial'}}>
                <Image source={btn_return} style={styles.btn_return} />
            </Pressable>
        </View>
    );
}