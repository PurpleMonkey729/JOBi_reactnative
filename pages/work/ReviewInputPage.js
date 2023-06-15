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
        paddingTop: '35rem',
        paddingLeft: '32rem',
    },
    btn_return: {
        width: '27rem',
        height: '27rem',
    },
    ttl: {
        marginLeft: '80rem',
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
        paddingTop: '21rem',
        paddingLeft: '25rem',
        paddingRight: '25rem',
        position: 'relative',
    },
    txt_info: {
        color: '#707070',
        fontSize: '16rem',
        width: '100%',
        lineHeight: '1.2',
        paddingBottom: '10rem',
        borderBottomColor: '#2C92D2',
        borderBottomWidth: '1rem',
    },
    img_doll: {
        width: '154rem',
        height: '148rem',
        position: 'absolute',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '94rem',
    },
    input: {
        width: '330rem',
        height: '180rem',
        borderRadius: '22rem',
        borderColor: '#B9B9B9',
        borderWidth: '1rem',
        padding: '22rem',
        marginTop: '25rem',
    },
    star: {
        width: '48rem',
        height: '44rem',
    },
    box_star: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '31rem',
    },
    item_star: {
        display: 'flex',
        alignItems: 'center',
    },
    txt_star: {
        fontSize: '15rem',
        color: '#4B00E0',
        marginTop: '6rem',
    },
    txt_star_no: {
        fontSize: '15rem',
        color: 'transparent',
        marginTop: '6rem',
    },
    btn_unlike: {
        width: '301rem',
        borderColor: '#707070',
        borderWidth: '2rem',
        height: '46rem',
        marginTop: '31rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '19rem',
    },
    btn_like: {
        width: '192rem',
        backgroundColor: '#FA8673',
        height: '46rem',
        marginTop: '31rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '19rem',
    },
    like: {
        width: '19rem',
        height: '17rem',
        marginRight: '17rem',
    },
    txt_btn_like: {
        color: 'white',
        fontSize: '13rem',
        fontWeight: 'bold',
    },
    txt_btn_unlike: {
        color: '#333',
        fontSize: '13rem',
        fontWeight: 'bold',
    },
    btn_go: {
        width: '300rem',
        height: '52rem',
        borderRadius: '5rem',
        backgroundColor: '#172B4D',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '28rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '128rem',
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
        marginTop: '301rem',
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
        marginBottom: '25rem',
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