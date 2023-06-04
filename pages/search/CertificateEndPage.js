import { Pressable, StyleSheet, Text, View, Image } from 'react-native';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/left.png';

const styles = StyleSheet.create({
    btn_return: {
        width: 12,
        height: 20,
        marginTop: 35,
        marginLeft: 21,
    },
    ttl: {
        fontSize: 22,
        color: '#172B4D',
        textAlign: 'center',
        marginTop: 23,
        marginBottom: 36,
    },
    txt: {
        fontSize: 15,
        lineHeight: '2.5',
        marginLeft: 37,
    },
    email: {
        marginTop: 29,
        color: '#707070',
        textAlign: 'center',
    }
});

export default function CertificatePage(props) {
    return (
        <View style={css.cont_white}>
            <Pressable>
                <Image source={btn_return} style={styles.btn_return} />
            </Pressable>
            <Text style={styles.ttl}>本人確認資料を提出しました。</Text>
            <Text style={styles.txt}>
                現在、本人確認資料を確認しています。<br />
                審査結果まで２～３日ほどお待ちください。<br />
                結果はアプリ内で確認する事ができます。<br />
                間違って送信した場合は下記までご連絡下さい。
            </Text>
            <Text style={styles.email}>info@minepro.co.jp</Text>
            <Footer num={1} />
        </View>
    );
}