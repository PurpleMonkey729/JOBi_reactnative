import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/left.png';
import { useState } from 'react';

const styles = StyleSheet.create({
    btn_return: {
        width: '12rem',
        height: '20rem',
        marginTop: '35rem',
        marginLeft: '21rem',
    },
    ttl: {
        color: '#172B4D',
        fontSize: '22rem',
        textAlign: 'center',
        marginTop: '23rem',
    },
    box: {
        width: '428rem',
        paddingLeft: '35rem',
        paddingRight: '35rem',
    },
    txt: {
        marginTop: '36rem',
        fontSize: '15rem',
    },
    warning: {
        color: '#E80F0F',
        fontSize: '12rem',
        marginTop: '15rem',
    },
    input: {
        width: '100%',
        height: '104rem',
        borderRadius: '22rem',
        padding: '20rem',
        marginTop: '15rem',
        borderColor: '#B9B9B9',
        borderWidth: '1rem',
    },
});

export default function ContactPage(props) {
    return (
        <View style={css.cont_white}>
            <Image source={btn_return} style={styles.btn_return} />
            <Text style={styles.ttl}>現在お住まいの住所</Text>
            <View style={styles.box}>
                <Text style={styles.txt}>現在お住まいの住所をご記入下さい。</Text>
                <Text style={styles.warning}>マンション・アパート名と部屋番号までご記入下さい。</Text>
                <TextInput style={styles.input} multiline={true} />
                <Text style={styles.txt}>身分証の住所と違う方は理由をご記入下さい。</Text>
                <TextInput style={styles.input} multiline={true} />
            </View>
            <Footer num={5} />
        </View >
    );
}
