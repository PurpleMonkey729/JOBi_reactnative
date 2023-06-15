import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import img_file from '../../assets/file.png';

const styles = StyleSheet.create({
    img: {
        width: '64rem',
        height: '73rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '182rem',
    },
    txt: {
        color: '#00000044',
        fontSize: '15rem',
        marginTop: '30rem',
        textAlign: 'center',
    },
    btn: {
        marginTop: '29rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '15rem',
        backgroundColor: '#2C92D2',
        width: '197rem',
        height: '48rem',
        borderRadius: '6rem',
    }
});

export default function FailedPage(props) {
    return (
        <View style={css.cont_white_header}>
            <Header />
            <Image source={img_file} style={styles.img} />
            <Text style={styles.txt}>読み込みに失敗しました</Text>
            <Text style={styles.btn}>再読み込み</Text>
            <Footer num={1} />
        </View>
    );
}