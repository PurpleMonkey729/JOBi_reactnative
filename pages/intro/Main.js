import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';

import img_logo from '../../assets/logo.png';
import bg_intro1 from '../../assets/bg-intro1.png';
import bg_intro2 from '../../assets/bg-intro2.png';
import bg_intro3 from '../../assets/bg-intro3.png';
import ButtonNext from '../../components/ButtonNext';
import btn_goal from '../../assets/btn-goal.png';

const styles = StyleSheet.create({
    bg: {
        width: 428,
        height: 926,
    },
    header: {
        marginTop: 43,
        marginLeft: 51,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img_logo: {
        width: 187,
        height: 75,
    },
    btn_skip: {
        marginLeft: 99,
        fontSize: 15.5,
        color: 'white',
    },
    txt_box: {
        marginTop: 471,
        marginLeft: 53,
    },
    ttl: {
        marginBottom: 16,
        color: '#E1FA08',
        fontSize: 37,
    },
    txt: {
        color: 'white',
        fontSize: 14,
    },
    btn_next: {
        marginTop: 40,
        marginLeft: 335,
    },
    btn: {
        marginTop: 40,
        marginLeft: 335,
        width: 65,
        height: 65,
    },
    num: {
        marginTop: 12,
        marginLeft: 356,
        color: 'white',
        fontSize: 14,
    },
});

export default function Main(props) {
    return (
        <View style={css.cont}>
            <ImageBackground source={props.bg} style={styles.bg}>
                <View style={styles.header}>
                    <Image source={{ uri: img_logo }} style={styles.img_logo} />
                    <Text style={styles.btn_skip}>スキップ</Text>
                </View>
                <View style={styles.txt_box}>
                    <Text style={styles.ttl}>{props.ttl}</Text>
                    <Text style={styles.txt}>{props.txt1}</Text>
                    <Text style={styles.txt}>{props.txt2}</Text>
                </View>
                <View style={styles.btn_next}><ButtonNext img={props.btn_next} txt={props.page_num + '/3'} /></View>
            </ImageBackground>
        </View >
    );
}
