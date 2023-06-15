import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import img_work from '../../assets/photo-worker.png';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        paddingTop: '32rem',
        paddingRight: '40rem',
        paddingLeft: '40rem',
    },
    ttl: {
        fontSize: '20rem',
        color: '#303030',
        textAlign: 'center',
    },
    nav: {
        marginTop: '17rem',
        display: 'flex',
        flexDirection: 'row',
    },
    item_nav_01: {
        fontSize: '17rem',
        color: '#303030',
        paddingBottom: '13rem',
        borderBottomColor: '#2C92D2',
        borderBottomWidth: '2rem',
        paddingLeft: '5rem',
        paddingRight: '5rem',
    },
    item_nav_02: {
        fontSize: '17rem',
        color: '#30303050',
        marginLeft: '78rem',
    },
    board: {
        paddingTop: '16rem',
        paddingLeft: '27rem',
        paddingRight: '27rem',
    },
    item_work: {
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 3px 6px #ddd',
        padding: '15rem',
        marginBottom: '28rem',
    },
    date: {
        fontSize: '18rem',
        color: '#303030',
        marginLeft: '7rem',
    },
    img: {
        width: '341rem',
        height: '172rem',
        borderRadius: '9rem',
        marginTop: '11rem',
    },
    txt: {
        marginTop: '15rem',
        fontSize: '17rem',
        color: '#707070',
    },
    time: {
        fontSize: '12rem',
        fontColor: '#707070',
        fontWeight: 'bold',
        marginBottom: '13rem',
    }
});

export default function WorkContractListPage(props) {
    const array_work = [
        {date: "5月25日（月）", img: img_work, txt: "ここに求人タイトルここに求人タイトル", time: "2023年5月17日(水) 6:00〜16:00 (休憩あり)"},
        {date: "5月25日（月）", img: img_work, txt: "ここに求人タイトルここに求人タイトル", time: "2023年5月17日(水) 6:00〜16:00 (休憩あり)"},
        {date: "5月25日（月）", img: img_work, txt: "ここに求人タイトルここに求人タイトル", time: "2023年5月17日(水) 6:00〜16:00 (休憩あり)"},
    ];
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Text style={styles.ttl}>はたらく</Text>
                <View style={styles.nav}>
                    <Text style={styles.item_nav_01}>確定済み契約一覧</Text>
                    <Text style={styles.item_nav_02}>過去の求人</Text>
                </View>
            </View>
            <View style={styles.board}>
                {
                    array_work.map((item, index) =>
                        <View style={styles.item_work} key={index}>
                            <Text style={styles.date}>{item.date}</Text>
                            <Image source={item.img} style={styles.img} />
                            <Text style={styles.txt}>{item.txt}</Text>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    )
                }
            </View>
            <Footer num={3} />
        </View>
    );
}