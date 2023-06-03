import { Pressable, StyleSheet, Text, TextInput, View, Image, Picker, TextBase } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/return.png';
import img_doll from '../../assets/doll.png';
import star_full from '../../assets/star_full.png';
import star_empty from '../../assets/star_empty.png';
import like from '../../assets/heart-yes3.png';
import unlike from '../../assets/heart-no.png';

const styles = StyleSheet.create({
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
        marginLeft: 80,
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
        paddingTop: 21,
        paddingLeft: 25,
        paddingRight: 25,
        position: 'relative',
    },
    txt_info: {
        color: '#707070',
        fontSize: 16,
        width: '100%',
        lineHeight: '1.2',
        paddingBottom: 10,
        borderBottomColor: '#2C92D2',
        borderBottomWidth: 1,
    },
    img_doll: {
        width: 154,
        height: 148,
        position: 'absolute',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        top: 94,
    },
    input: {
        width: 330,
        height: 180,
        borderRadius: 22,
        borderColor: '#B9B9B9',
        borderWidth: 1,
        padding: 22,
        marginTop: 25,
    },
    star: {
        width: 48,
        height: 44,
    },
    box_star: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 31,
    },
    item_star: {
        display: 'flex',
        alignItems: 'center',
    },
    txt_star: {
        fontSize: 15,
        color: '#4B00E0',
        marginTop: 6,
    },
    txt_star_no: {
        fontSize: 15,
        color: 'transparent',
        marginTop: 6,
    },
    btn_unlike: {
        width: 301,
        borderColor: '#707070',
        borderWidth: 2,
        height: 46,
        marginTop: 31,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 19,
    },
    btn_like: {
        width: 192,
        backgroundColor: '#FA8673',
        height: 46,
        marginTop: 31,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 19,
    },
    like: {
        width: 19,
        height: 17,
        marginRight: 17,
    },
    txt_btn_like: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    txt_btn_unlike: {
        color: '#333',
        fontSize: 13,
        fontWeight: 'bold',
    },
    btn_go: {
        width: 300,
        height: 52,
        borderRadius: 5,
        backgroundColor: '#172B4D',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 28,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 128,
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
        marginTop: 301,
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
        marginBottom: 25,
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

export default function ReviewInputPage(props) {
    const [isShowModal, setShowModal] = useState(false);
    const [isLike, setLike] = useState(false);
    const rating = 3;
    const array_rating = [false, false, false, false, false];
    for (let i = 0; i < rating; i++) array_rating[i] = true;
    return (
        <View style={css.cont_white}>
            {
                isShowModal &&
                <View style={styles.bg_modal}>
                    <View style={styles.modal}>
                        <Text style={styles.txt_modal}>レビューを送信します</Text>
                        <View style={styles.box_modal_btn}>
                            <Text style={styles.btn_modal_left} onStartShouldSetResponder={() => setShowModal(false)}>もどる</Text>
                            <Text style={styles.btn_modal_right}>OK</Text>
                        </View>
                    </View>
                </View>
            }
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>レビューを入力</Text>
            </View>
            <View style={styles.board}>
                <Text style={styles.txt_info}>最後に働いた企業へコメントを書きましょう</Text>
                {
                    !isLike && <Image source={img_doll} style={styles.img_doll} />
                }
                <TextInput style={styles.input} />
                <View style={styles.box_star}>
                    {
                        array_rating.map((item, index) =>
                            <View style={styles.item_star} key={index}>
                                {
                                    item && <Image source={star_full} style={styles.star} /> ||
                                    !item && <Image source={star_empty} style={styles.star} />
                                }
                                <Text style={[item && styles.txt_star, !item && styles.txt_star_no]}>{index + 1}</Text>
                            </View>
                        )
                    }
                </View>
                <View style={[isLike && styles.btn_like, !isLike && styles.btn_unlike]} onStartShouldSetResponder={() => setLike(!isLike)}>
                    {
                        isLike && <Image source={like} style={styles.like} /> ||
                        !isLike && <Image source={unlike} style={styles.like} />
                    }
                    <Text style={[isLike && styles.txt_btn_like, !isLike && styles.txt_btn_unlike]}>
                        {
                            isLike && "お気に入り済み" ||
                            !isLike && "この店舗をお気に入りにする"
                        }
                    </Text>
                </View>
                <View style={styles.btn_go} onStartShouldSetResponder={() => setShowModal(true)}>報酬を確定</View>
            </View>
            <Footer num={3} />
        </View>
    );
}