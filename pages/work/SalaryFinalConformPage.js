import { Pressable, StyleSheet, Text, TextInput, View, Image, Picker, TextBase } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/return.png';
import img_triangle from '../../assets/right2.png';

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
        marginLeft: '75rem',
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
    },
    txt_info: {
        color: '#707070',
        fontSize: '16rem',
        width: '100%',
        lineHeight: '1.2',
        paddingBottom: '18rem',
        borderBottomColor: '#2C92D2',
        borderBottomWidth: '1rem',
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
    txt_checkinout: {
        color: '#4D4D4D',
        fontSize: '15rem',
        marginTop: '25rem',
    },
    ttl_checkinout: {
        color: '#4D4D4D',
        fontSize: '15rem',
        fontWeight: 'bold',
        marginTop: '18rem',
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
    box_breaktime: {
        borderBottomWidth: '1rem',
        borderTopWidth: '1rem',
        borderBottomColor: '#2C92D2',
        borderTopColor: '#2C92D2',
        paddingTop: '20rem',
        paddingBottom: '22rem',
        marginTop: '37rem',
        marginBottom: '20rem',
        marginLeft: '5rem',
    },
    ttl_breaktime: {
        color: '#4D4D4D',
        fontSize: '15rem',
    },
    txt_breaktime: {
        color: '#4D4D4D',
        fontSize: '15rem',
        fontWeight: 'bold',
        marginTop: '9rem',
    },
    ttl_money: {
        marginTop: '20rem',
        fontSize: '15rem',
        color: '#4D4D4D',
    },
    row_money: {
        width: '306rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '15rem',
    },
    left_money: {
        color: '#4D4D4D',
        fontSize: '12rem',
        fontWeight: 'bold',
    },
    right_money: {
        color: '#4D4D4D',
        fontSize: '12rem',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    row_money_last: {
        width: '306rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '30rem',
        position: 'relative',
        marginBottom: '36rem',
    },
    right_money_last: {
        color: '#4D4D4D',
        fontSize: '16rem',
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
    },
});

export default function SalaryFinalConformPage(props) {
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>報酬額の最終確認</Text>
            </View>
            <View style={styles.board}>
                <Text style={styles.txt_info}>以下の内容で業務と報酬を確定します。最後にもう一度内容を確認してください。</Text>
                <View style={styles.box_check}>
                    <View style={styles.box_checkinout}>
                        <Text style={styles.txt_checkinout}>業務開始</Text>
                        <Text style={styles.ttl_checkinout}>チェックイン</Text>
                        <Text style={styles.date_checkinout}>5月25日(月)</Text>
                        <Text style={styles.time_checkinout}>16:00</Text>
                    </View>
                    <Image source={img_triangle} style={styles.img_triangle} />
                    <View style={styles.box_checkinout}>
                        <Text style={styles.txt_checkinout}>業務終了</Text>
                        <Text style={styles.ttl_checkinout}>チェックイン</Text>
                        <Text style={styles.date_checkinout}>5月25日(月)</Text>
                        <Text style={styles.time_checkinout}>22:00</Text>
                    </View>
                </View>
                <View style={styles.box_breaktime}>
                    <Text style={styles.ttl_breaktime}>休憩時間</Text>
                    <Text style={styles.txt_breaktime}>30分</Text>
                </View><Text style={styles.ttl_money}>報酬内訳</Text>
                <View style={styles.row_money}>
                    <Text style={styles.left_money}>時給</Text>
                    <Text style={styles.right_money}>1,200円 / 1時間</Text>
                </View>
                <View style={styles.row_money}>
                    <Text style={styles.left_money}>基本給</Text>
                    <Text style={styles.right_money}>7,000円</Text>
                </View>
                <View style={styles.row_money}>
                    <Text style={styles.left_money}>交通費</Text>
                    <Text style={styles.right_money}>1,000円</Text>
                </View>
                <View style={styles.row_money_last}>
                    <Text style={styles.left_money}>支払われる報酬総額</Text>
                    <Text style={styles.right_money_last}>8,000円</Text>
                </View>
                <View style={styles.btn_go}>次へ進む</View>
            </View>
            <Footer num={3} />
        </View>
    );
}