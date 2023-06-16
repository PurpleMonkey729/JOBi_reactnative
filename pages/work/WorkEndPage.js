import { StyleSheet, Text, View, Image } from 'react-native';

import { css } from '../../style';
import Footer from '../../components/Footer';

import img_logo from '../../assets/logo2.png';
import img_mid from '../../assets/work_end.png';

const styles = StyleSheet.create({
    cont: {
        backgroundColor: 'white',
    },
    img_logo: {
        width: '355rem',
        height: '141rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '47rem',
    },
    txt1: {
        color: '#303030',
        fontSize: '22rem',
        marginTop: '26rem',
        textAlign: 'center',
    },
    txt2: {
        color: '#303030',
        fontSize: '37rem',
        marginTop: '9rem',
        textAlign: 'center',
    },
    txt3: {
        color: '#303030',
        fontSize: '22rem',
        marginTop: '3rem',
        textAlign: 'center',
    },
    img_mid: {
        width: '287rem',
        height: '215rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btn_yellow: {
        backgroundColor: '#FFC602',
        borderRadius: '5rem',
        width: '300rem',
        height: '72rem',
        marginTop: '26rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    txt_btn_1: {
        fontSize: '16rem',
        color: 'black',
    },
    txt_btn_2: {
        color: '#676767',
        fontSize: '12rem',
    }
});

export default function WorkEndPage(props) {
    return (
        <View style={[css.cont_white, styles.cont]}>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={styles.txt1}>報酬が確定しました！</Text>
            <Image source={img_mid} style={styles.img_mid} />
            <Text style={styles.txt2}>8,000円</Text>
            <Text style={styles.txt3}>お疲れ様でした。</Text>
            <View style={styles.btn_yellow}>
                <Text style={styles.txt_btn_1}>振り込み予定を見る</Text>
                <Text style={styles.txt_btn_2}>マイページへ</Text>
            </View>
            <Footer num={3} />
        </View >
    );
}
