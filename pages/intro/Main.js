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
        width: '428rem',
        height: '926rem',
    },
    header: {
        marginTop: '43rem',
        marginLeft: '51rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img_logo: {
        width: '187rem',
        height: '75rem',
    },
    btn_skip: {
        marginLeft: '99rem',
        fontSize: '15rem',
        color: '#000000',
    },
    txt_box: {
        marginTop: '471rem',
        marginLeft: '53rem',
        position: 'relative',
    },
    ttl_en: {
        position: 'absolute',
        top: '-30rem',
        left: '80rem',
        color: '#5D4AFF',
        fontSize: '29rem',
        fontWeight: 'bold',
    },
    ttl: {
        marginBottom: '16rem',
        color: '#5D4AFF',
        fontSize: '37rem',
        fontWeight: 'bold',
    },
    txt: {
        color: '#2C2C2C',
        fontSize: '14rem',
    },
    btn_next: {
        marginTop: '40rem',
    },
    btn: {
        marginTop: '40rem',
        marginLeft: '335rem',
        width: '65rem',
        height: '65rem',
    },
    num: {
        marginTop: '12rem',
        marginLeft: '356rem',
        color: 'white',
        fontSize: '14rem',
    },
});

export default function Main(props) {
    const goNext = page_num => {
        // Need Coding!
    }
    return (
        <View style={css.cont_blue}>
            <ImageBackground source={props.bg} style={styles.bg}>
                <View style={styles.header}>
                    <Image source={{ uri: img_logo }} style={styles.img_logo} />
                    <Text style={styles.btn_skip}>スキップ</Text>
                </View>
                <View style={styles.txt_box}>
                    <Text style={styles.ttl_en}>Let’s WORK!</Text>
                    <Text style={styles.ttl}>{props.ttl}</Text>
                    <Text style={styles.txt}>{props.txt1}</Text>
                    <Text style={styles.txt}>{props.txt2}</Text>
                </View>
                <View style={styles.btn_next}><ButtonNext img={props.btn_next} num={props.page_num} onStartShouldSetResponder={()=>goNext(props.page_num)}/></View>
            </ImageBackground>
        </View >
    );
}
