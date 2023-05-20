import { StyleSheet, Text, View, Image } from 'react-native';

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
        marginTop: 47,
    },
    dsc: {
        marginTop: 13,
    },
    ttl_input: {
        color: 'white',
        marginTop: 41,
        marginLeft: 64,
        fontSize: 15.5,
        marginBottom: 9,
    },
    btn_next: {
        marginTop: -20,
        marginLeft: 327,
    },
});

export default function RegistPage1(props) {
    return (
        <View style={css.cont_blue}>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>電話番号入力</Text>
            <Text style={[css.dsc, styles.dsc]}>電話番号を入力して下さい。</Text>
            <Text style={styles.ttl_input}>電話番号</Text>
            <InputIcon icon={icon_mail} placeholder="09012345678" keyboardType='numberic'/>
            <View style={styles.btn_next}><ButtonNext img={btn_next} txt='1/5' /></View>
        </View >
    );
}
