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
        paddingTop: 35,
        paddingLeft: 32,
    },
    btn_return: {
        width: 27,
        height: 27,
    },
    ttl: {
        marginLeft: 75,
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
    },
    txt_info: {
        color: '#707070',
        fontSize: 16,
        width: '100%',
        lineHeight: '1.2',
        paddingBottom: 18,
        borderBottomColor: '#2C92D2',
        borderBottomWidth: 1,
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
    txt_checkinout: {
        color: '#4D4D4D',
        fontSize: 15,
        marginTop: 25,
    },
    ttl_checkinout: {
        color: '#4D4D4D',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 18,
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
    box_breaktime: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#2C92D2',
        borderTopColor: '#2C92D2',
        paddingTop: 20,
        paddingBottom: 22,
        marginTop: 37,
        marginBottom: 20,
        marginLeft: 5,
    },
    ttl_breaktime: {
        color: '#4D4D4D',
        fontSize: 15,
    },
    txt_breaktime: {
        color: '#4D4D4D',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 9,
    },
    ttl_money: {
        marginTop: 20,
        fontSize: 15,
        color: '#4D4D4D',
    },
    row_money: {
        width: 306,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    left_money: {
        color: '#4D4D4D',
        fontSize: 12,
        fontWeight: 'bold',
    },
    right_money: {
        color: '#4D4D4D',
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    row_money_last: {
        width: 306,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        position: 'relative',
        marginBottom: 36,
    },
    right_money_last: {
        color: '#4D4D4D',
        fontSize: 16,
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