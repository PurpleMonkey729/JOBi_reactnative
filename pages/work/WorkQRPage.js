import { Pressable, StyleSheet, Text, TextInput, View, Image, Picker, TextBase } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import bg_photo from '../../assets/photo-worker.png';
import btn_return from '../../assets/return.png';
import map from '../../assets/map.png';
import img_triangle from '../../assets/right2.png';
import mark_qr from '../../assets/qr.png';
import img_file from '../../assets/file2.png';
import img_cancel from '../../assets/x.png';

const styles = StyleSheet.create({
    bg_photo: {
        position: 'absolute',
        top: '0rem',
        left: '0rem',
        width: '428rem',
        height: '244rem',
        opacity: .09,
        borderBottomLeftRadius: '10rem',
        borderBottomRightRadius: '10rem',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '35rem',
        paddingLeft: '32rem',
    },
    btn_return: {
        width: '27rem',
        height: '27rem',
    },
    ttl: {
        marginLeft: '110rem',
        color: '#303030',
        fontSize: '20rem',
    },
    board: {
        backgroundColor: 'white',
        width: '374rem',
        boxShadow: '0 3px 6px #ddd',
        marginTop: '18rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '16rem',
        paddingLeft: '25rem',
        paddingRight: '25rem',
    },
    box_info: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '18rem',
        borderBottomColor: '#2C92D2',
        borderBottomWidth: '1rem',
    },
    map: {
        width: '59rem',
        height: '59rem',
    },
    txt_map: {
        marginTop: '3rem',
        fontSize: '12rem',
        color: '#4D4D4D',
        fontWeight: 'bold',
    },
    box_txt: {
        marginLeft: '19rem',
    },
    txt_info: {
        color: '#707070',
        fontSize: '16rem',
        width: '250rem',
        lineHeight: '1.2',
    },
    txt_datetime: {
        marginTop: '5rem',
        fontSize: '12rem',
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    box_check: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20rem',
        paddingLeft: '10rem',
        paddingRight: '10rem',
    },
    ttl_checkinout: {
        color: '#4D4D4D',
        fontSize: '15rem',
        fontWeight: 'bold',
    },
    date_checkinout: {
        marginTop: '19rem',
        fontSize: '12rem',
        color: '#4D4D4D',
        fontWeight: 'bold',
    },
    time_checkinout: {
        marginTop: '7rem',
        fontSize: '15rem',
        color: '#4D4D4D',
        fontWeight: 'bold',
    },
    img_triangle: {
        width: '17rem',
        height: '24rem',
    },
    txt_qr: {
        marginTop: '29rem',
        fontSize: '12rem',
        fontWeight: 'bold',
        color: '#4D4D4D',
        textAlign: 'center',
    },
    btn_qr: {
        backgroundColor: '#F0BC08',
        borderRadius: '5rem',
        width: '300rem',
        height: '52rem',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '14rem',
    },
    mark_qr: {
        width: '48rem',
        height: '48rem',
        marginRight: '3rem',
    },
    txt_btn_qr: {
        color: '#000',
        fontSize: '16rem',
        fontWeight: 'bold',
    },
    box_file: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: '1rem',
        borderTopWidth: '1rem',
        borderBottomColor: '#2C92D2',
        borderTopColor: '#2C92D2',
        paddingTop: '19rem',
        paddingBottom: '19rem',
        marginTop: '30rem',
        marginBottom: '19rem',
    },
    img_file: {
        width: '16rem',
        height: '20rem',
        marginLeft: '10rem',
    },
    txt_file: {
        fontSize: '12rem',
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginLeft: '15rem',
    },
    box_cancel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img_cancel: {
        width: '16rem',
        height: '16rem',
        marginLeft: '10rem',
    },
    txt_cancel: {
        fontSize: '12rem',
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginLeft: '15rem',
    },
    txt_contact: {
        marginTop: '19rem',
        paddingTop: '39rem',
        borderTopColor: '#2C92D2',
        borderTopWidth: '1rem',
        fontSize: '12rem',
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginBottom: '4rem',
        textAlign: 'center',
    },
    txt_phonenumber: {
        color: '#4D4D4D99',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16rem',
        marginBottom: '100rem',
    },
    bg_modal: {
        backgroundColor: '#B5B5B5aa',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: '0rem',
        left: '0rem',
        zIndex: 999,
    },
    modal: {
        marginTop: '289rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '270rem',
        borderRadius: '14rem',
        backgroundColor: '#F2F2F2dd',
    },
    txt_modal: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: '17rem',
        textAlign: 'center',
        marginTop: '19rem',
        marginBottom: '19rem',
    },
    box_modal_btn: {
        width: '100%',
        height: '100%',
        borderTopColor: '#888',
        borderTopWidth: '1rem',
        display: 'flex',
        flexDirection: 'row',
        height: '44rem',
    },
    btn_modal_left: {
        width: '50%',
        height: '100%',
        color: '#007AFF',
        fontSize: '17rem',
        borderRightColor: '#888',
        borderRightWidth: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_modal_right: {
        width: '50%',
        height: '100%',
        color: '#007AFF',
        fontSize: '17rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function WorkQRPage(props) {
    const [isCheckinModal, setCheckinModal] = useState(false);
    return (
        <View style={css.cont_white}>
            {
                isCheckinModal &&
                <View style={styles.bg_modal}>
                    <View style={styles.modal}>
                        {
                            isCheckinModal && <Text style={styles.txt_modal}>本当にチェックイン<br />しますか？</Text> ||
                            !isCheckinModal && <Text style={styles.txt_modal}>本当にチェックアウト<br />しますか？</Text>
                        }
                        <View style={styles.box_modal_btn}>
                            <Text style={styles.btn_modal_left}>もどる</Text>
                            <Text style={styles.btn_modal_right}>OK</Text>
                        </View>
                    </View>
                </View>
            }
            <Image source={bg_photo} style={styles.bg_photo} />
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>はたらく</Text>
            </View>
            <View style={styles.board}>
                <View style={styles.box_info}>
                    <View style={styles.box_map}>
                        <Image source={map} style={styles.map} />
                        <Text style={styles.txt_map}>場所を確認</Text>
                    </View>
                    <View style={styles.box_txt}>
                        <Text style={styles.txt_info}>ここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトル</Text>
                        <Text style={styles.txt_datetime}>2023年5月17日(水) 6:00〜16:00 (休憩あり)</Text>
                    </View>
                </View>
                <View style={styles.box_check}>
                    <View style={styles.box_checkinout}>
                        <Text style={styles.ttl_checkinout}>チェックイン</Text>
                        <Text style={styles.date_checkinout}>-月-日(-)</Text>
                        <Text style={styles.time_checkinout}>—:--</Text>
                    </View>
                    <Image source={img_triangle} style={styles.img_triangle} />
                    <View style={styles.box_checkinout}>
                        <Text style={styles.ttl_checkinout}>チェックイン</Text>
                        <Text style={styles.date_checkinout}>-月-日(-)</Text>
                        <Text style={styles.time_checkinout}>—:--</Text>
                    </View>
                </View>
                <Text style={styles.txt_qr}>仕事をはじめる/おわるときにQRコードを読み込む</Text>
                <View style={styles.btn_qr}>
                    <Image source={mark_qr} style={styles.mark_qr} />
                    <Text style={styles.txt_btn_qr}>QRを読み込む</Text>
                </View>
                <View style={styles.box_file}>
                    <Image source={img_file} style={styles.img_file} />
                    <Text style={styles.txt_file}>募集詳細</Text>
                </View>
                <View style={styles.box_cancel}>
                    <Image source={img_cancel} style={styles.img_cancel} />
                    <Text style={styles.txt_cancel}>このお仕事をキャンセル</Text>
                </View>
                <Text style={styles.txt_contact}>緊急連絡先</Text>
                <Text style={styles.txt_phonenumber}>000-0000-0000</Text>
            </View>
            <Footer num={3} />
        </View>
    );
}