import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/next.png';
import img_user from '../../assets/user.png';
import rec from '../../assets/rec.png';
import camera from '../../assets/camera3.png';
import emoji from '../../assets/emoji.png';


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 89,
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: 'white',
    },
    btn_return: {
        width: 25,
        height: 25,
        rotate: '180deg',
    },
    img_user: {
        marginLeft: 15,
        width: 62,
        height: 62,
    },
    box_txt: {
        marginLeft: 9
    },
    ttl: {
        color: '#2C92D2',
        fontSize: 16,
    },
    name: {
        color: '#303030',
        fontSize: 21,
        fontWeight: 'bold',
    },
    btn_more: {
        marginLeft: 'auto',
        fontSize: 30,
        lineHeight: '0.3',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    board: {
        paddingTop: 13,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 70,
    },
    today: {
        fontSize: 18,
        color: '#303030',
        textAlign: 'center',
        marginBottom: 24,
    },
    msg_left: {
        padding: 10,
        borderRadius: 10,
        borderTopLeftRadius: 0,
        backgroundColor: '#EEEEEE',
        fontSize: 18,
        color: '#303030',
        marginTop: 10,
        maxWidth: 325,
        width: 'max-content',
    },
    time_left: {
        fontSize: 14,
        color: '#9E9F9F',
        marginTop: 6,
    },
    msg_right: {
        padding: 10,
        borderRadius: 10,
        borderTopRightRadius: 0,
        backgroundColor: '#EEEEEE',
        fontSize: 18,
        color: '#303030',
        marginTop: 10,
        marginLeft: 'auto',
        maxWidth: 325,
        width: 'max-content',
    },
    time_right: {
        fontSize: 14,
        color: '#9E9F9F',
        marginTop: 6,
        textAlign: 'right',
    },
    rec: {
        width: 234,
        height: 45,
        marginLeft: 'auto',
        marginTop: 10,
    },
    box_input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 68,
        paddingLeft: 25,
        paddingRight: 25,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        left: 0,
        bottom: 84,
    },
    camera: {
        width: 26,
        height: 26,
    },
    input: {
        width: '100%',
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
    },
    emoji: {
        width: 26,
        height: 26,
    },
});

export default function MessageDetailPage(props) {
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Image source={img_user} style={styles.img_user} />
                <View style={styles.box_txt}>
                    <Text style={styles.ttl}>5月17日求人タイトル</Text>
                    <Text style={styles.name}>店舗名</Text>
                </View>
                <View style={styles.btn_more}>.<br />.<br />.</View>
            </View>
            <View style={styles.board}>
                <Text style={styles.today}>Today</Text>
                <Text style={styles.msg_left}>Hi, Your last shot was really good!</Text>
                <Text style={styles.time_left}>9:30</Text>
                <Image source={rec} style={styles.rec} />
                <Text style={styles.time_right}>9:32</Text>
                <Text style={styles.msg_left}>What tools do you use?</Text>
                <Text style={styles.time_left}>9:34</Text>
                <Text style={styles.msg_right}>Figma, for prototype i use Principle</Text>
                <Text style={styles.time_right}>9:35</Text>
                <Text style={styles.msg_left}>Cool! Your designs inspire me a lot bro. Keep posting! 😉</Text>
                <Text style={styles.time_left}>9:36</Text>
                <Text style={styles.msg_right}>Thank u so much Antonio! Glad to hear that :)</Text>
                <Text style={styles.time_right}>9:37</Text>
            </View>
            <View style={styles.box_input}>
                <Image source={camera} style={styles.camera} />
                <TextInput style={styles.input} placeholder="メッセージを入力" />
                <Image source={emoji} style={styles.emoji} />
            </View>
            <Footer num={1} />
        </View>
    );
}