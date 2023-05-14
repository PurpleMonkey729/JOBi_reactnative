import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import InputIcon from '../../components/InputIcon';
import ButtonNext from '../../components/ButtonNext';
import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import icon_mail from '../../assets/icon-mail.png';
import btn_next from '../../assets/btn-next.png';

const styles = StyleSheet.create({
    img_logo: {
        width: 355,
        height: 141,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 47,
    },
    ttl: {
        marginTop: 30,
    },
    dsc: {
        marginTop: 9,
    },
    ttl_input: {
        color: 'white',
        marginTop: 18,
        marginLeft: 64,
        marginBottom: 9,
        fontSize: 15.5,
    },
    btn_next: {
        marginTop: -60,
        marginLeft: 327,
    },
});

export default function RegistPage3(props) {
    return (
        <View style={css.cont}>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>パスワード設定</Text>
            <Text style={[css.dsc, styles.dsc]}>6文字以上英数字</Text>
            <Text style={styles.ttl_input}>パスワード</Text>
            <TextInput style={css.input} placeholder="入力"/>
            <Text style={[styles.ttl_input, {marginTop:22, marginBottom:9}]}>パスワード再度入力</Text>
            <TextInput style={css.input} placeholder="入力"/>
            <Text style={{color:'#E1FA08', fontSize:12, paddingLeft:67, paddingTop:16}}>パスワードは英数字を含めてください</Text>
            <View style={styles.btn_next}><ButtonNext img={btn_next} txt='3/5' /></View>
        </View >
    );
}
