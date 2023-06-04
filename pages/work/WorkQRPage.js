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
        top: 0,
        left: 0,
        width: 428,
        height: 244,
        opacity: .09,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 35,
        paddingLeft: 32,
    },
    btn_return: {
        width: 27,
        height: 27,
    },
    ttl: {
        marginLeft: 110,
        color: '#303030',
        fontSize: 20,
    },
    board: {
        backgroundColor: 'white',
        width: 374,
        boxShadow: '0 3px 6px #ddd',
        marginTop: 18,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 16,
        paddingLeft: 25,
        paddingRight: 25,
    },
    box_info: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 18,
        borderBottomColor: '#2C92D2',
        borderBottomWidth: 1,
    },
    map: {
        width: 59,
        height: 59,
    },
    txt_map: {
        marginTop: 3,
        fontSize: 12,
        color: '#4D4D4D',
        fontWeight: 'bold',
    },
    box_txt: {
        marginLeft: 19,
    },
    txt_info: {
        color: '#707070',
        fontSize: 16,
        width: 250,
        lineHeight: '1.2',
    },
    txt_datetime: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    box_check: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    ttl_checkinout: {
        color: '#4D4D4D',
        fontSize: 15,
        fontWeight: 'bold',
    },
    date_checkinout: {
        marginTop: 19,
        fontSize: 12,
        color: '#4D4D4D',
        fontWeight: 'bold',
    },
    time_checkinout: {
        marginTop: 7,
        fontSize: 15,
        color: '#4D4D4D',
        fontWeight: 'bold',
    },
    img_triangle: {
        width: 17,
        height: 24,
    },
    txt_qr: {
        marginTop: 29,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4D4D4D',
        textAlign: 'center',
    },
    btn_qr: {
        backgroundColor: '#F0BC08',
        borderRadius: 5,
        width: 300,
        height: 52,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
    },
    mark_qr: {
        width: 48,
        height: 48,
        marginRight: 3,
    },
    txt_btn_qr: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    box_file: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#2C92D2',
        borderTopColor: '#2C92D2',
        paddingTop: 19,
        paddingBottom: 19,
        marginTop: 30,
        marginBottom: 19,
    },
    img_file: {
        width: 16,
        height: 20,
        marginLeft: 10,
    },
    txt_file: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginLeft: 15,
    },
    box_cancel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    img_cancel: {
        width: 16,
        height: 16,
        marginLeft: 10,
    },
    txt_cancel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginLeft: 15,
    },
    txt_contact: {
        marginTop: 19,
        paddingTop: 39,
        borderTopColor: '#2C92D2',
        borderTopWidth: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#4D4D4D',
        marginBottom: 4,
        textAlign: 'center',
    },
    txt_phonenumber: {
        color: '#4D4D4D99',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 100,
    },
    bg_modal: {
        backgroundColor: '#B5B5B5aa',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 999,
    },
    modal: {
        marginTop: 289,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 270,
        borderRadius: 14,
        backgroundColor: '#F2F2F2dd',
    },
    txt_modal: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 19,
        marginBottom: 19,
    },
    box_modal_btn: {
        width: '100%',
        height: '100%',
        borderTopColor: '#888',
        borderTopWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        height: 44,
    },
    btn_modal_left: {
        width: '50%',
        height: '100%',
        color: '#007AFF',
        fontSize: 17,
        borderRightColor: '#888',
        borderRightWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_modal_right: {
        width: '50%',
        height: '100%',
        color: '#007AFF',
        fontSize: 17,
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