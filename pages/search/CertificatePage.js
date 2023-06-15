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
        paddingLeft: '21rem',
        paddingRight: '21rem',
    },
    btn_return: {
        width: '12rem',
        height: '20rem',
        marginTop: '35rem',
    },
    ttl: {
        fontSize: '22rem',
        color: '#172B4D',
        marginTop: '27rem',
        textAlign: 'center',
    },
    dsc: {
        fontSize: '15rem',
        marginTop: '18rem',
    },
    item: {
        height: '127rem',
        marginTop: '20rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: '1px solid #707070',
        borderRadius: '16rem',
        paddingLeft: '21rem',
        paddingRight: '21rem',
    },
    img1: {
        width: '83rem',
        height: '83rem',
        marginRight: '21rem',
    },
    img2: {
        width: '119rem',
        height: '76rem',
        marginRight: '21rem',
    },
    img3: {
        width: '107rem',
        height: '75rem',
        marginRight: '21rem',
    },
    img4: {
        width: '94rem',
        height: '94rem',
        marginRight: '21rem',
    },
    txt_item: {
        color: '#505050',
        fontSize: '18rem',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default function CertificatePage(props) {
    return (
        <View style={css.cont_white}>
            <View style={styles.cont}>
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
            </View>
            <Footer num={1} />
        </View>
    );
}