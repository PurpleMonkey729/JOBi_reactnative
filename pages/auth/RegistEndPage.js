import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import photo from '../../assets/photo_person.png';
import img_end from '../../assets/img-auth-index.png';

const styles = StyleSheet.create({
    img_logo: {
        width: 355,
        height: 141,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 97,
    },
    name: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 51,
        color: 'white',
    },
    photo: {
        width: 104,
        height: 104,
        marginTop: 31,
        marginLeft: 248,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text_small: {
        fontSize: 15.5,
        textAlign: 'center',
        marginTop: 42,
        color: 'white',
    },
    text_big: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 6,
        color: '#E1FA08',
    },
    btn_yellow: {
        marginTop: 41,
    },
    img_end: {
        marginTop: 35,
        width: 220,
        height: 211,
        marginTop: 48,
        marginBottom: 107,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default function RegistPage4(props) {
    return (
        <View style={css.cont}>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={styles.name}>木村さん</Text>
            <Image source={photo} style={styles.photo} />
            <Text style={styles.text_small}>おめでとうございます！</Text>
            <Text style={styles.text_big}>登録完了！</Text>
            <View style={[css.btn_yellow, styles.btn_yellow]}>さぁはじめよう！</View>
            <Image source={img_end} style={styles.img_end} />
        </View >
    );
}
