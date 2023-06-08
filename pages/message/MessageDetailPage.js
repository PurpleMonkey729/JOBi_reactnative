import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useRef, useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { css, cutString } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/next.png';
import img_user from '../../assets/user.png';
import rec from '../../assets/rec.png';
import camera from '../../assets/camera3.png';
import emoji from '../../assets/emoji.png';
import photo_real from '../../assets/tmp1.png';
import btn_gallery from '../../assets/gallery.png';
import btn_camera from '../../assets/camera4.png';
import btn_copy from '../../assets/copy.png';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: "max-content",
        paddingLeft: 25,
        paddingRight: 25,
        backgroundColor: 'white',
        position: 'fixed',
        zIndex: 10,
        width: 428,
        height: 97,
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
        width: 225,
        wordBreak: 'break-word',
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
        paddingTop: 110,
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
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        bottom: 84,
        position: 'fixed',
        zIndex: 10,
        width: 428,
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
    popup_img: {
        width: '100%',
        height: 550,
        position: 'fixed',
        bottom: 0,
        left: 0,
        borderRadius: 50,
        boxShadow: '0 0 10px #888',
        padding: 25,
        minHeight: 500,
        backgroundColor: 'white',
    },
    popup_img_inner: {
        width: 384,
        height: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#888',
        borderRadius: 30,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 100,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'auto',
        position: 'relative',
    },
    photo_real: {
        width: 77,
        height: 77,
        margin: 2.5,
        opacity: .75,
    },
    popup_img_box_btn: {
        position: 'absolute',
        top: 375,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 230,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn_gallery: {
        width: 75,
        height: 75,
    },
    btn_camera: {
        width: 50,
        height: 50,
    },
    btn_copy: {
        width: 50,
        height: 50,
    },
});

export default function MessageDetailPage(props) {
    const array = Array.from(Array(50).keys());
    const [isShowPopupImg, setShowPopupImg] = useState(false);

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setShowPopupImg(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Image source={img_user} style={styles.img_user} />
                <View style={styles.box_txt}>
                    <Text style={styles.ttl}>{cutString('5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル5月17日求人タイトル', 15)}</Text>
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
                <Pressable><Image source={emoji} style={styles.emoji} /></Pressable>
                <TextInput style={styles.input} placeholder="メッセージを入力" />
                <Pressable onPress={() => setShowPopupImg(true)}><Image source={camera} style={styles.camera} /></Pressable>
            </View>
            {
                isShowPopupImg &&
                <View style={styles.popup_img}>
                    <LinearGradient
                        colors={['white', 'black']}
                        style={styles.popup_img_inner}
                    >
                        {
                            array.map((item, index) =>
                                <Image source={photo_real} style={styles.photo_real} key={index} />
                            )
                        }
                    </LinearGradient>
                    <View style={styles.popup_img_box_btn}>
                        <Pressable><Image source={btn_gallery} style={styles.btn_gallery} /></Pressable>
                        <Pressable><Image source={btn_camera} style={styles.btn_camera} /></Pressable>
                        <Pressable><Image source={btn_copy} style={styles.btn_copy} /></Pressable>
                    </View>
                </View>
            }
            <Footer num={4} />
        </View>
    );
}