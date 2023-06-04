import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/return.png';
import { useState } from 'react';

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
        marginBottom: 21,
    },
    btn_return: {
        width: 27,
        height: 27,
    },
    ttl: {
        marginLeft: 117,
        color: '#303030',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subttl: {
        marginTop: 27,
        color: '#707070',
        fontSize: 17,
        textAlign: 'center',
    },
    input: {
        width: 346,
        height: 420,
        padding: 23,
        fontSize: 16,
        borderColor: '#BEBEBE',
        borderRadius: '3%',
        borderWidth: 1,
        marginTop: 14,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btn_go: {
        width: 212,
        height: 43,
        borderRadius: 12,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 18,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 45,
        backgroundColor: '#FA8673',
    },
    bg_modal: {
        backgroundColor: '#B5B5B5aa',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 999,
    },
    modal: {
        marginTop: 289,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 270,
        borderRadius: 14,
        backgroundColor: '#F2F2F2dd',
    },
    txt_modal: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 19,
        marginBottom: 19,
    },
    box_modal_btn: {
        width: '100%',
        height: '100%',
        borderTopColor: '#888',
        borderTopWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        height: 44,
    },
    btn_modal_left: {
        width: '50%',
        height: '100%',
        color: '#007AFF',
        fontSize: 17,
        borderRightColor: '#888',
        borderRightWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_modal_right: {
        width: '50%',
        height: '100%',
        color: '#007AFF',
        fontSize: 17,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function TransferAccountPage(props) {
    const [isShowModal, setShowModal] = useState(false);
    return (
        <View style={css.cont_white}>
            {
                isShowModal &&
                <View style={styles.bg_modal}>
                    <View style={styles.modal}>
                        <Text style={styles.txt_modal}>変更します。<br />よろしいですか？</Text>
                        <View style={styles.box_modal_btn}>
                            <Text style={styles.btn_modal_left} onStartShouldSetResponder={()=>setShowModal(false)}>もどる</Text>
                            <Text style={styles.btn_modal_right}>OK</Text>
                        </View>
                    </View>
                </View>
            }
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
