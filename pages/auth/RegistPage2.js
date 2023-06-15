import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import ButtonNext from '../../components/ButtonNext';
import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import btn_next from '../../assets/btn-next.png';

const styles = StyleSheet.create({
    img_logo: {
        width: '355rem',
        height: '141rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '47rem',
    },
    ttl: {
        marginTop: '47rem',
    },
    dsc: {
        marginTop: '13rem',
    },
    ttl_input: {
        color: 'white',
        marginTop: '41rem',
        marginLeft: '64rem',
        fontSize: 15.5,
    },
    number: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '269rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    input: {
        borderBottomColor: 'white',
        borderBottomWidth: '1rem',
        color: '#E1FA08',
        fontSize: '28rem',
        width: '42rem',
        height: '37rem',
        textAlign: 'center',
    },
    btn_next: {
        marginTop: '40rem',
        marginLeft: '327rem',
    },
});

export default function RegistPage2(props) {
    return (
        <View style={css.cont_blue}>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>認証コード入力</Text>
            <Text style={[css.dsc, styles.dsc]}>電話番号に届いた認証コードを入力</Text>
            <Text style={styles.ttl_input}>認証コード</Text>
            <View style={styles.number}>
                <TextInput style={styles.input} keyboardType='numeric' defaultValue={6} />
                <TextInput style={styles.input} keyboardType='numeric' defaultValue={3} />
                <TextInput style={styles.input} keyboardType='numeric' />
                <TextInput style={styles.input} keyboardType='numeric' />
            </View>
            <View style={styles.btn_next}><ButtonNext img={btn_next} txt='2/5' /></View>
        </View >
    );
}
