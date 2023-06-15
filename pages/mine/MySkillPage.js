import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/return.png';
import star from '../../assets/star.png';

const styles = StyleSheet.create({
    header: {
        paddingTop: '33rem',
        paddingLeft: '31rem',
        paddingBottom: '5rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: '9rem',
        borderBottomColor: '#eee',
    },
    btn_return: {
        width: '27rem',
        height: '27rem',
    },
    ttl: {
        marginLeft: '49rem',
        color: '#303030',
        fontSize: '18rem',
        fontWeight: 'bold',
    },
    board: {
        backgroundColor: 'white',
        width: '374rem',
        padding: '20rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30rem',
        boxShadow: '0 3px 6px #ddd',
    },
    box_txt: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        width: '20rem',
        height: '19rem',
    },
    txt_skillname: {
        color: '#333333',
        fontSize: '15rem',
        marginLeft: '19rem',
    },
    txt_skilllevel: {
        color: '#333333',
        fontSize: '15rem',
        marginLeft: '87rem',
    },
    box_input: {
        marginTop: '22rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input_left: {
        width: '197rem',
        height: '42rem',
        borderColor: '#BEBEBE',
        borderWidth: '1rem',
        borderRadius: '5rem',
        fontSize: '16rem',
        paddingLeft: '23rem',
        paddingRight: '23rem',
    },
    input_right: {
        width: '120rem',
        height: '42rem',
        borderColor: '#BEBEBE',
        borderWidth: '1rem',
        borderRadius: '5rem',
        fontSize: '16rem',
        paddingLeft: '23rem',
        paddingRight: '23rem',
    },
    btn_go: {
        width: '332rem',
        height: '48rem',
        borderRadius: '5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18rem',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '16rem',
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
