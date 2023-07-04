import { StyleSheet, Text, View, Image, Pressable, Picker } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/return.png';
import star from '../../assets/star.png';

const styles = StyleSheet.create({
    cont: {
        paddingTop: '75rem',
    },
    header: {
        width: '428rem',
        paddingTop: '33rem',
        paddingLeft: '31rem',
        paddingBottom: '5rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: '9rem',
        borderBottomColor: '#eee',
        position: 'fixed',
        top: 0,
        zIndex: 10,
        backgroundColor: 'white',
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
        position: 'relative',
    },
    ver_line: {
        position: 'absolute',
        width: '1rem',
        height: '797rem',
        backgroundColor: '#5C8EF2',
        top: '19rem',
        left: '235rem',
    },
    box_txt: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomWidth: '1rem',
        borderBottomColor: '#5C8EF2',
        paddingBottom: '16rem',
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
        marginLeft: '35rem',
    },
    box_input: {
        marginTop: '21rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    txt_left: {
        fontSize: '17rem',
    },
    select_right: {
        width: '100rem',
        height: '33rem',
        borderColor: '#BEBEBE',
        borderWidth: '1rem',
        borderRadius: '5rem',
        fontSize: '16rem',
        marginLeft: '35rem',
        backgroundColor: 'white',
        paddingLeft: '20rem',
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

export default function MyFixedSkillPage(props) {
    const array_skillname = ['体力', '元気', '笑顔', 'はきはき', 'コミュニケーション力', '接客', 'バーカウンター', 'オーダー', 'ホール・配膳', 'キッチン', '洗い場', '清掃', 'PC操作', '電話'];
    const array_number = Array.from(Array(10).keys()).map(item => item + 1);
    return (
        <View style={[css.cont_white, styles.cont]}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>あなたのスキルを追加する</Text>
            </View>
            <View style={styles.board}>
                <View style={styles.ver_line} />
                <View style={styles.box_txt}>
                    <Image source={star} style={styles.star} />
                    <Text style={styles.txt_skillname}>スキルの名前</Text>
                    <Text style={styles.txt_skilllevel}>スキルのレベル</Text>
                </View>
                {
                    array_skillname.map((item, index) =>
                        <View style={styles.box_input} key={index}>
                            <Text style={styles.txt_left}>{item}</Text>
                            <Picker style={styles.select_right} placeholder='common:filterPlaceholder'>
                                <Picker.Item value="" label="1~10" enabled={false} color="gray" disabled/>
                                {
                                    array_number.map((item, index) =>
                                    <Picker.Item label={item} value={item} key={index} />)
                                }
                            </Picker>
                        </View>
                    )
                }
                <Text style={styles.btn_go}>スキルの追加・変更</Text>
            </View>
            <Footer num={5} />
        </View >
    );
}
