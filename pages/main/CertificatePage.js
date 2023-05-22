import { Pressable, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/left.png';
import cer1 from '../../assets/cer1.png';
import cer2 from '../../assets/cer2.png';
import cer3 from '../../assets/cer3.png';
import cer4 from '../../assets/cer4.png';

const styles = StyleSheet.create({
    cont: {
        paddingLeft: 21,
        paddingRight: 21,
    },
    btn_return: {
        width: 12,
        height: 20,
        marginTop: 35,
    },
    ttl: {
        fontSize: 22,
        color: '#172B4D',
        marginTop: 27,
        textAlign: 'center',
    },
    dsc: {
        fontSize: 15,
        marginTop: 18,
    },
    item: {
        height: 127,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid #707070',
        borderRadius: 16,
        paddingLeft: 21,
        paddingRight: 21,
    },
    img1: {
        width: 83,
        height: 83,
        marginRight: 21,
    },
    img2: {
        width: 119,
        height: 76,
        marginRight: 21,
    },
    img3: {
        width: 107,
        height: 75,
        marginRight: 21,
    },
    img4: {
        width: 94,
        height: 94,
        marginRight: 21,
    },
    txt_item: {
        color: '#505050',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default function CertificatePage(props) {
    return (
        <View style={[css.cont_white, styles.cont]}>
            <Pressable>
                <Image source={btn_return} style={styles.btn_return} />
            </Pressable>
            <Text style={styles.ttl}>登録したい本人確認書類を選択</Text>
            <Text style={styles.dsc}>JOBiで働くには書類を登録して、本人確認する必要があります。ここで入力した本人確認書類の情報が他のユーザーに公開されることはありません。</Text>
            <View style={styles.item}>
                <Image source={cer1} style={styles.img1} />
                <Text style={styles.txt_item}>パスポート（所持人記入欄があるもの）</Text>
            </View>
            <View style={styles.item}>
                <Image source={cer2} style={styles.img2} />
                <Text style={styles.txt_item}>運転免許証</Text>
            </View>
            <View style={styles.item}>
                <Image source={cer3} style={styles.img3} />
                <Text style={styles.txt_item}>マイナンバーカード</Text>
            </View>
            <View style={styles.item}>
                <Image source={cer4} style={styles.img4} />
                <Text style={styles.txt_item}>住民基本台帳カード（顔写真付きのもの）</Text>
            </View>
            <Footer num={1} />
        </View>
    );
}