import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import ButtonNext from '../../components/ButtonNext';
import { css } from '../../style';

import img_logo from '../../assets/logo2.png';
import btn_next from '../../assets/btn-next.png';
import check from '../../assets/check.png';

const styles = StyleSheet.create({
    img_logo: {
        width: '355rem',
        height: '141rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '47rem',
    },
    ttl: {
        marginTop: '30rem',
    },
    ttl_input: {
        color: 'white',
        marginTop: '18rem',
        marginLeft: '64rem',
        marginBottom: '9rem',
        fontSize: 15.5,
    },
    btn_next: {
        marginTop: '11rem',
        marginLeft: '327rem',
    },
    txt_condition: {
        color: '#E1FA08',
        fontSize: '13rem',
        fontWeight: 'bold',
        paddingLeft: '67rem',
        paddingTop: '16rem',
        marginBottom: '10rem',
    },
    box_condition: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '300rem',
        marginLeft: '67rem',
    },
    item_condition: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '10rem',
    },
    check: {
        width: '16rem',
        height: '16rem',
        marginRight: '5rem',
    },
    str_condition: {
        fontSize: '12rem',
        color: 'white',
    },
    str_condition_checked: {
        color: '#93FFC5',
    }
});

export default function RegistPage3(props) {
    const array = [
        { isMatch: true, txt: "最低8文字以上" },
        { isMatch: false, txt: "最低8文字以上" },
        { isMatch: false, txt: "英大文字を含む" },
        { isMatch: false, txt: "特殊文字（!?#@）を含む" },
    ];
    return (
        <View style={css.cont_blue}>
            <Image source={img_logo} style={styles.img_logo} />
            <Text style={[css.ttl, styles.ttl]}>パスワード設定</Text>
            <Text style={styles.ttl_input}>パスワード</Text>
            <TextInput style={css.input} placeholder="入力" />
            <Text style={styles.txt_condition}>下記の要件を満たすパスワードを入力して下さい。</Text>
            <View style={styles.box_condition}>
                {
                    array.map((item, index) =>
                        <View key={index} style={styles.item_condition}>
                            {item.isMatch && <Image source={check} style={styles.check} />}
                            {!item.isMatch && <Text style={styles.str_condition}>・</Text>}
                            <Text style={[styles.str_condition, item.isMatch && styles.str_condition_checked]}>{item.txt}</Text>
                        </View>
                    )
                }
            </View>
            <Text style={[styles.ttl_input, { marginTop: 22, marginBottom: 9 }]}>パスワード再度入力</Text>
            <TextInput style={css.input} placeholder="入力" />
            <View style={styles.btn_next}><ButtonNext img={btn_next} txt='3/5' /></View>
        </View >
    );
}
