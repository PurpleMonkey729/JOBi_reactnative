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
        paddingTop: 32,
        paddingRight: 40,
        paddingLeft: 40,
    },
    ttl: {
        fontSize: 20,
        color: '#303030',
        textAlign: 'center',
    },
    nav: {
        marginTop: 17,
        display: 'flex',
        flexDirection: 'row',
    },
    item_nav_01: {
        fontSize: 17,
        color: '#30303050',
    },
    item_nav_02: {
        fontSize: 17,
        color: '#303030',
        marginLeft: 78,
        paddingBottom: 13,
        borderBottomColor: '#2C92D2',
        borderBottomWidth: 2,
        paddingLeft: 15,
        paddingRight: 15,
    },
    board: {
        paddingTop: 16,
        paddingLeft: 27,
        paddingRight: 27,
    },
    item_work: {
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 3px 6px #ddd',
        padding: 15,
        marginBottom: 28,
    },
    date: {
        fontSize: 18,
        color: '#303030',
        marginLeft: 7,
    },
    img_work: {
        width: 341,
        height: 172,
        borderRadius: 9,
        marginTop: 11,
    },
    txt: {
        marginTop: 15,
        fontSize: 17,
        color: '#707070',
    },
    time: {
        fontSize: 12,
        fontColor: '#707070',
        fontWeight: 'bold',
        marginBottom: 13,
    },
    box_select: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    ttl_select: {
        fontSize: 13,
        color: '#2699FB',
        fontWeight: 'bold',
    },
    select: {
        marginLeft: 36,
        height: 48,
        width: 163,
        border: '1px solid #7FC4FD',
        borderRadius: 8,
        color: '#7FC4FD',
        fontSize: 14,
        paddingLeft: 19,
    },
    box_like: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    txt_like: {
        color: '#ff0000',
        fontSize: 11,
        fontWeight: 'bold',
    },
    txt_unlike: {
        color: '#505050',
        fontSize: 11,
        fontWeight: 'bold',
    },
    like: {
        width: 21,
        height: 19,
        marginLeft: 26,
    },
    time_start: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 13,
    },
    time_end: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 13,
        paddingBottom: 30,
        borderBottomColor: '#2C92D2',
        borderBottomWidth: 1,
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
        width: 346,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingRight: 50,
        position: 'relative',
    },
    right_money_last: {
        color: '#D90000',
        fontSize: 16,
    },
    checkmark: {
        position: 'absolute',
        right: 8,
        bottom: 8,
        width: 20,
        height: 13,
        borderWidth: 3,
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