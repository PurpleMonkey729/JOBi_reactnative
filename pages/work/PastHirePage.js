import { Pressable, StyleSheet, Text, TextInput, View, Image, Picker } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import img_work from '../../assets/photo-worker.png';
import like from '../../assets/heart-yes2.png';
import unlike from '../../assets/heart-no2.png';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        paddingTop: '32rem',
        paddingRight: '40rem',
        paddingLeft: '40rem',
    },
    ttl: {
        fontSize: '20rem',
        color: '#303030',
        textAlign: 'center',
    },
    nav: {
        marginTop: '17rem',
        display: 'flex',
        flexDirection: 'row',
    },
    item_nav_01: {
        fontSize: '17rem',
        color: '#30303050',
    },
    item_nav_02: {
        fontSize: '17rem',
        color: '#303030',
        marginLeft: '78rem',
        paddingBottom: '13rem',
        borderBottomColor: '#2C92D2',
        borderBottomWidth: '2rem',
        paddingLeft: '15rem',
        paddingRight: '15rem',
    },
    board: {
        paddingTop: '16rem',
        paddingLeft: '27rem',
        paddingRight: '27rem',
    },
    item_work: {
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 3px 6px #ddd',
        padding: '15rem',
        marginBottom: '28rem',
    },
    date: {
        fontSize: '18rem',
        color: '#303030',
        marginLeft: '7rem',
    },
    img_work: {
        width: '341rem',
        height: '172rem',
        borderRadius: '9rem',
        marginTop: '11rem',
    },
    txt: {
        marginTop: '15rem',
        fontSize: '17rem',
        color: '#707070',
    },
    time: {
        fontSize: '12rem',
        fontColor: '#707070',
        fontWeight: 'bold',
        marginBottom: '13rem',
    },
    box_select: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '15rem',
    },
    ttl_select: {
        fontSize: '13rem',
        color: '#2699FB',
        fontWeight: 'bold',
    },
    select: {
        marginLeft: '36rem',
        height: '48rem',
        width: '163rem',
        border: '1px solid #7FC4FD',
        borderRadius: '8rem',
        color: '#7FC4FD',
        fontSize: '14rem',
        paddingLeft: '19rem',
    },
    box_like: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: '5rem',
    },
    txt_like: {
        color: '#ff0000',
        fontSize: '11rem',
        fontWeight: 'bold',
    },
    txt_unlike: {
        color: '#505050',
        fontSize: '11rem',
        fontWeight: 'bold',
    },
    like: {
        width: '21rem',
        height: '19rem',
        marginLeft: '26rem',
    },
    time_start: {
        color: 'black',
        fontSize: '13rem',
        fontWeight: 'bold',
        marginTop: '13rem',
    },
    time_end: {
        color: 'black',
        fontSize: '13rem',
        fontWeight: 'bold',
        marginTop: '13rem',
        paddingBottom: '30rem',
        borderBottomColor: '#2C92D2',
        borderBottomWidth: '1rem',
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
        width: '346rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '30rem',
        paddingRight: '50rem',
        position: 'relative',
    },
    right_money_last: {
        color: '#D90000',
        fontSize: '16rem',
    },
    checkmark: {
        position: 'absolute',
        right: '8rem',
        bottom: '8rem',
        width: '20rem',
        height: '13rem',
        borderWidth: '3rem',
        borderColor: 'transparent',
        rotate: '-45deg',
    },
    checkmark_show: {
        borderBottomColor: '#172B4D',
        borderLeftColor: '#172B4D',
    },
});

export default function PastHirePage(props) {
    const [isLike, setLike] = useState(false);
    const clickLike = () => {
        setLike(!isLike);
    };

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
                <View style={styles.box_select}>
                    <Text style={styles.ttl_select}>日付</Text>
                    <Picker style={styles.select}>
                        <Picker.Item label="2023/5/30" value="2023/5/30" />
                        <Picker.Item label="2023/5/30" value="2023/5/30" />
                        <Picker.Item label="2023/5/30" value="2023/5/30" />
                    </Picker>
                </View>
                <View style={styles.item_work}>
                    <Text style={styles.date}>5月25日（月）</Text>
                    <Image source={img_work} style={styles.img_work} />
                    <Text style={styles.txt}>ここに求人タイトルここに求人タイトル</Text>
                    <Text style={styles.time}>2023年5月17日(水) 6:00〜16:00 (休憩あり)</Text>
                    <View style={styles.box_like}>
                        {
                            isLike && <Text style={styles.txt_like}>お気に入り済み</Text> ||
                            !isLike && <Text style={styles.txt_unlike}>この店舗をお気に入りにする</Text>
                        }
                        <Pressable onPress={clickLike}>
                            {
                                isLike && <Image source={like} style={styles.like} /> ||
                                !isLike && <Image source={unlike} style={styles.like} />
                            }
                        </Pressable>
                    </View>
                    <Text style={styles.time_start}>出勤時間：2023/04/25 10:55</Text>
                    <Text style={styles.time_end}>出勤時間：2023/04/25 17:30</Text>
                    <Text style={styles.ttl_money}>報酬内訳</Text>
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
                        <View style={[styles.checkmark, isLike && styles.checkmark_show]} />
                    </View>
                </View>
            </View>
            <Footer num={3} />
        </View>
    );
}