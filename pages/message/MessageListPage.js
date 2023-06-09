import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useState } from 'react';

import { css, cutString } from '../../style';
import Footer from '../../components/Footer';

import btn_search from '../../assets/search.png';
import img_user from '../../assets/user.png';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '76rem',
        paddingLeft: '27rem',
        paddingRight: '27rem',
        backgroundColor: 'white',
    },
    input: {
        width: '100%',
        fontSize: '24rem',
        color: '#303030',
        padding: '5rem',
        marginRight: '10rem',
    },
    btn_search: {
        width: '27rem',
        height: '27rem',
    },
    box_list: {
        width: '100%',
        padding: '23rem',
    },
    msg: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: '1rem',
        borderBottomColor: '#2C92D2',
        marginTop: 17.5,
        paddingTop: '10rem',
        paddingBottom: '20rem',
    },
    img_user: {
        width: '78rem',
        height: '78rem',
        marginRight: '12rem',
    },
    ttl: {
        width: '225rem',
        wordBreak: 'break-word',
        fontSize: '16rem',
        color: '#2C92D2',
    },
    name: {
        fontSize: '21rem',
        color: '#303030',
        fontWeight: 'bold',
    },
    txt: {
        fontSize: '16rem',
        color: '#9E9F9F',
    },
    box_right: {
        marginLeft: 'auto',
    },
    time: {
        fontSize: '14rem',
        color: '#9E9F9F',
    },
    num: {
        backgroundColor: '#303030',
        width: '26rem',
        height: '26rem',
        borderRadius: '26rem',
        fontSize: '14rem',
        color: '#fff',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '12rem',
    },
});

export default function MessageListPage(props) {
    const messages = [
        { photo: img_user, ttl: '5月17日求人タイトルありがとうございます。', name: '店舗名', txt: 'まだメッセージはありません。', time: '9:39', num: 2 },
        { photo: img_user, ttl: '5月17日求人タイトル', name: '店舗名', txt: 'まだメッセージはありません。', time: '9:39', num: 1 },
    ];
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <TextInput style={styles.input} placeholder="メッセージ" />
                <Pressable>
                    <Image source={btn_search} style={styles.btn_search} />
                </Pressable>
            </View>
            <View style={styles.box_list}>
                {
                    messages.map((item, index) =>
                        <View style={styles.msg}>
                            <Image source={item.photo} style={styles.img_user} />
                            <View style={styles.box_txt}>
                                <Text style={styles.ttl}>{item.ttl}</Text>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.txt}>{item.txt}</Text>
                            </View>
                            <View style={styles.box_right}>
                                <Text style={styles.time}>{item.time}</Text>
                                {item.num > 1 && <Text style={styles.num}>{item.num}</Text>}
                            </View>
                        </View>
                    )
                }
            </View>
            <Footer num={4} />
        </View>
    );
}