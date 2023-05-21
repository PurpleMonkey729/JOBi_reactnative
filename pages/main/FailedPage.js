import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import img_file from '../../assets/file.png';

const styles = StyleSheet.create({
    img: {
        width: 64,
        height: 73,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 182,
    },
    txt: {
        color: '#00000044',
        fontSize: 15,
        marginTop: 30,
        textAlign: 'center',
    },
    btn: {
        marginTop: 29,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 15,
        backgroundColor: '#2C92D2',
        width: 197,
        height: 48,
        borderRadius: 6,
    }
});

export default function LoadingPage(props) {
    const array = Array.from(Array(9).keys()).map(el=>'circle'+el);
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