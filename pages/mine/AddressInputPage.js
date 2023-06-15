import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/return.png';
import { useState } from 'react';

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
        marginBottom: '21rem',
    },
    btn_return: {
        width: '27rem',
        height: '27rem',
    },
    ttl: {
        marginLeft: '117rem',
        color: '#303030',
        fontSize: '18rem',
        fontWeight: 'bold',
    },
    subttl: {
        marginTop: '27rem',
        color: '#707070',
        fontSize: '17rem',
        textAlign: 'center',
    },
    input: {
        width: '346rem',
        height: '420rem',
        padding: '23rem',
        fontSize: '16rem',
        borderColor: '#BEBEBE',
        borderRadius: '3%',
        borderWidth: '1rem',
        marginTop: '14rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '16rem',
    },
    btn_go: {
        width: '212rem',
        height: '43rem',
        borderRadius: '12rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: '18rem',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '45rem',
        backgroundColor: '#FA8673',
    },
});

export default function ContactPage(props) {
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>お問い合わせ</Text>
            </View>
            <Text style={styles.subttl}>内容</Text>
            <TextInput style={styles.input} placeholder="入力" multiline={true} />
            <Text style={styles.btn_go} onStartShouldSetResponder={() => setShowModal(true)}>送信</Text>
            <Footer num={5} />
        </View >
    );
}
