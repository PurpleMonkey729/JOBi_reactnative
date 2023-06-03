import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import img_work from '../../assets/photo-worker.png';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        paddingTop: 32,
        paddingRight: 40,
        paddingLeft: 40,
    },
    ttl: {
        fontSize: 20,
        color: '#303030',
        textAlign: 'center',
    },
    nav: {
        marginTop: 17,
        display: 'flex',
        flexDirection: 'row',
    },
    item_nav_01: {
        fontSize: 17,
        color: '#303030',
        paddingBottom: 13,
        borderBottomColor: '#2C92D2',
        borderBottomWidth: 2,
        paddingLeft: 5,
        paddingRight: 5,
    },
    item_nav_02: {
        fontSize: 17,
        color: '#30303050',
        marginLeft: 78,
    },
    board: {
        paddingTop: 16,
        paddingLeft: 27,
        paddingRight: 27,
    },
    item_work: {
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 3px 6px #ddd',
        padding: 15,
        marginBottom: 28,
    },
    date: {
        fontSize: 18,
        color: '#303030',
        marginLeft: 7,
    },
    img: {
        width: 341,
        height: 172,
        borderRadius: 9,
        marginTop: 11,
    },
    txt: {
        marginTop: 15,
        fontSize: 17,
        color: '#707070',
    },
    time: {
        fontSize: 12,
        fontColor: '#707070',
        fontWeight: 'bold',
        marginBottom: 13,
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