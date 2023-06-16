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
        width: '300rem',
        height: '52rem',
        paddingLeft: '23rem',
        paddingRight: '23rem',
        fontSize: '16rem',
        borderColor: '#BEBEBE',
        borderRadius: '5rem',
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
    bg_modal: {
        backgroundColor: '#B5B5B5aa',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: '0rem',
        left: '0rem',
        zIndex: 999,
    },
    modal: {
        marginTop: '289rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '270rem',
        borderRadius: '14rem',
        backgroundColor: '#F2F2F2dd',
    },
    txt_modal: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: '17rem',
        textAlign: 'center',
        marginTop: '19rem',
        marginBottom: '19rem',
    },
    box_modal_btn: {
        width: '100%',
        height: '100%',
        borderTopColor: '#888',
        borderTopWidth: '1rem',
        display: 'flex',
        flexDirection: 'row',
        height: '44rem',
    },
    btn_modal_left: {
        width: '50%',
        height: '100%',
        color: '#007AFF',
        fontSize: '17rem',
        borderRightColor: '#888',
        borderRightWidth: '1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_modal_right: {
        width: '50%',
        height: '100%',
        color: '#007AFF',
        fontSize: '17rem',
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
                <Text style={styles.ttl}>振込先口座</Text>
            </View>
            <Text style={styles.subttl}>振込先銀行名</Text>
            <TextInput style={styles.input} placeholder="入力" />
            <Text style={styles.subttl}>支店名</Text>
            <TextInput style={styles.input} placeholder="入力" />
            <Text style={styles.subttl}>支店番号</Text>
            <TextInput style={styles.input} placeholder="入力" />
            <Text style={styles.subttl}>口座名義</Text>
            <TextInput style={styles.input} placeholder="入力" />
            <Text style={styles.btn_go} onStartShouldSetResponder={() => setShowModal(true)}>変更</Text>
            <Footer num={5} />
        </View >
    );
}
