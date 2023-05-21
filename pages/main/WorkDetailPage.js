import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import img_file from '../../assets/file.png';

const styles = StyleSheet.create({
});

export default function WorkDetailPage(props) {
    const array = Array.from(Array(9).keys()).map(el=>'circle'+el);
    return (
        <View style={css.cont_white_header}>
            <Header />
            <Footer num={1} />
        </View>
    );
}