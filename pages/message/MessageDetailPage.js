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
        paddingLeft: '25rem',
        paddingRight: '25rem',
        backgroundColor: 'white',
        position: 'fixed',
        zIndex: 10,
        width: '428rem',
        height: '97rem',
    },
    btn_return: {
        width: '25rem',
        height: '25rem',
        rotate: '180deg',
    },
    img_user: {
        marginLeft: '15rem',
        width: '62rem',
        height: '62rem',
    },
    box_txt: {
        marginLeft: 9
    },
    ttl: {
        color: '#2C92D2',
        fontSize: '16rem',
        width: '225rem',
        wordBreak: 'break-word',
    },
    name: {
        color: '#303030',
        fontSize: '21rem',
        fontWeight: 'bold',
    },
    btn_more: {
        marginLeft: 'auto',
        fontSize: '30rem',
        lineHeight: '0.3',
        fontWeight: 'bold',
        marginBottom: '10rem',
    },
    board: {
        paddingTop: '110rem',
        paddingLeft: '20rem',
        paddingRight: '20rem',
        paddingBottom: '70rem',
    },
    today: {
        fontSize: '18rem',
        color: '#303030',
        textAlign: 'center',
        marginBottom: '24rem',
    },
    msg_left: {
        padding: '10rem',
        borderRadius: '10rem',
        borderTopLeftRadius: '0rem',
        backgroundColor: '#EEEEEE',
        fontSize: '18rem',
        color: '#303030',
        marginTop: '10rem',
        maxWidth: '325rem',
        width: 'max-content',
    },
    time_left: {
        fontSize: '14rem',
        color: '#9E9F9F',
        marginTop: '6rem',
    },
    msg_right: {
        padding: '10rem',
        borderRadius: '10rem',
        borderTopRightRadius: '0rem',
        backgroundColor: '#EEEEEE',
        fontSize: '18rem',
        color: '#303030',
        marginTop: '10rem',
        marginLeft: 'auto',
        maxWidth: '325rem',
        width: 'max-content',
    },
    time_right: {
        fontSize: '14rem',
        color: '#9E9F9F',
        marginTop: '6rem',
        textAlign: 'right',
    },
    rec: {
        width: '234rem',
        height: '45rem',
        marginLeft: 'auto',
        marginTop: '10rem',
    },
    box_input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '68rem',
        paddingLeft: '25rem',
        paddingRight: '25rem',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        bottom: '84rem',
        position: 'fixed',
        zIndex: 10,
        width: '428rem',
    },
    camera: {
        width: '26rem',
        height: '26rem',
    },
    input: {
        width: '100%',
        marginLeft: '5rem',
        marginRight: '5rem',
        padding: '5rem',
    },
    emoji: {
        width: '26rem',
        height: '26rem',
    },
    popup_img: {
        width: '100%',
        height: '550rem',
        position: 'fixed',
        bottom: '0rem',
        left: '0rem',
        borderRadius: '50rem',
        boxShadow: '0 0 10px #888',
        padding: '25rem',
        minHeight: '500rem',
        backgroundColor: 'white',
    },
    popup_img_inner: {
        width: '384rem',
        height: '500rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#888',
        borderRadius: '30rem',
        paddingLeft: '25rem',
        paddingRight: '25rem',
        paddingBottom: '100rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'auto',
        position: 'relative',
    },
    photo_real: {
        width: '77rem',
        height: '77rem',
        margin: 2.5,
        opacity: .75,
    },
    popup_img_box_btn: {
        position: 'absolute',
        top: '375rem',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '230rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn_gallery: {
        width: '75rem',
        height: '75rem',
    },
    btn_camera: {
        width: '50rem',
        height: '50rem',
    },
    btn_copy: {
        width: '50rem',
        height: '50rem',
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