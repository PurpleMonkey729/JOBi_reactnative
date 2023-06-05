import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/return.png';
import star from '../../assets/star.png';

const styles = StyleSheet.create({
    header: {
        paddingTop: 33,
        paddingLeft: 31,
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 9,
        borderBottomColor: '#eee',
    },
    btn_return: {
        width: 27,
        height: 27,
    },
    ttl: {
        marginLeft: 49,
        color: '#303030',
        fontSize: 18,
        fontWeight: 'bold',
    },
    board: {
        backgroundColor: 'white',
        width: 374,
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        boxShadow: '0 3px 6px #ddd',
    },
    box_txt: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        width: 20,
        height: 19,
    },
    txt_skillname: {
        color: '#333333',
        fontSize: 15,
        marginLeft: 19,
    },
    txt_skilllevel: {
        color: '#333333',
        fontSize: 15,
        marginLeft: 87,
    },
    box_input: {
        marginTop: 22,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input_left: {
        width: 197,
        height: 42,
        borderColor: '#BEBEBE',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 23,
        paddingRight: 23,
    },
    input_right: {
        width: 120,
        height: 42,
        borderColor: '#BEBEBE',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 23,
        paddingRight: 23,
    },
    btn_go: {
        width: 332,
        height: 48,
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        backgroundColor: '#2C92D2',
    },
});

export default function MySkillPage(props) {
    const array = [1,2,3,4,5,6];
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>あなたのスキルを追加する</Text>
            </View>
            <View style={styles.board}>
                <View style={styles.box_txt}>
                    <Image source={star} style={styles.star} />
                    <Text style={styles.txt_skillname}>スキルの名前</Text>
                    <Text style={styles.txt_skilllevel}>スキルのレベル</Text>
                </View>
                {
                    array.map((item, index)=>
                        <View style={styles.box_input} key={index}>
                            <TextInput style={styles.input_left} placeholder="入力" placeholderTextColor="#9B9B9B" />
                            <TextInput style={styles.input_right} placeholder="1~10" placeholderTextColor="#9B9B9B" />
                        </View>
                    )
                }
                <Text style={styles.btn_go}>スキルの追加・変更</Text>
            </View>
            <Footer num={5} />
        </View >
    );
}
