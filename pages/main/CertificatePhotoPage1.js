import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';

import image from '../../assets/tmp1.png';
import btn_camera from '../../assets/camera2.png';
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
    btn_camera: {
        width: 77,
        height: 77,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 250,
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