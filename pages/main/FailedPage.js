import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import img_file from '../../assets/file.png';

const styles = StyleSheet.create({
    img_file: {
        
    }
});

console.log({...styles.circle, ...styles['circle0']});
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