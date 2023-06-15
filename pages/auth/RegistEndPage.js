import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import photo from '../../assets/photo_person.png';
import img_end from '../../assets/img-auth-index.png';

const styles = StyleSheet.create({
    img_logo: {
        width: '355rem',
        height: '141rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '97rem',
    },
    name: {
        fontSize: '24rem',
        textAlign: 'center',
        marginTop: '51rem',
        color: 'white',
    },
    photo: {
        width: '104rem',
        height: '104rem',
        marginTop: '31rem',
        marginLeft: '248rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    text_small: {
        fontSize: 15.5,
        textAlign: 'center',
        marginTop: '42rem',
        color: 'white',
    },
    text_big: {
        fontSize: '28rem',
        textAlign: 'center',
        marginTop: '6rem',
        color: '#E1FA08',
    },
    btn_yellow: {
        marginTop: '41rem',
    },
    img_end: {
        marginTop: '35rem',
        width: '220rem',
        height: '211rem',
        marginTop: '48rem',
        marginBottom: '107rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default function RegistPage4(props) {
    return (
        <View style={css.cont_blue}>
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
