import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import btn_return from '../../assets/return.png';
import star from '../../assets/star.png';
import review from '../../assets/review.png';
import star_full from '../../assets/star_full.png';
import star_empty from '../../assets/star_empty.png';
import btn_remove from '../../assets/x.png';
import photo from '../../assets/photo_person.png';
import doll from '../../assets/doll2.png';
import money from '../../assets/money.png';
import crown from '../../assets/crown.png';
import btn_showmore from '../../assets/showmore.png';
import btn_prev from '../../assets/prev.png';

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
        marginLeft: 117,
        color: '#303030',
        fontSize: 18,
        fontWeight: 'bold',
    },
    photo: {
        width: 150,
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '100%',
        borderWidth: 3,
        borderColor: 'white',
        marginTop: 17,
        boxShadow: '0 3px 10px #ddd',
    },
    txt_name: {
        textAlign: 'center',
        marginTop: 12,
        color: '#333333',
        fontSize: 20,
    },
    box_doll: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
    },
    txt_money: {
        fontSize: 17,
        height: '#707070',
        marginTop: 18,
        marginLeft: 28,
    },
    box_money: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 8,
    },
    money: {
        width: 59,
        height: 42,
    },
    num_money: {
        fontSize: 30,
        color: '#707070',
    },
    btn_money: {
        borderRadius: 12,
        backgroundColor: '#FA8673',
        color: 'white',
        width: 212,
        height: 32,
        fontSize: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
        marginTop: 11,
    },
    doll: {
        width: 128,
        height: 150,
        marginLeft: 32,
    },
    board: {
        backgroundColor: 'white',
        width: 374,
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 17,
        boxShadow: '0 3px 6px #ddd',
    },
    box_crown: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    crown: {
        width: 32,
        height: 24,
    },
    txt_crown: {
        marginLeft: 23,
        color: '#333333',
        fontSize: 20,
    },
    box_circle: {
        borderRadius: '100%',
        borderColor: '#DED8CD',
        borderWidth: 16,
        width: 170,
        height: 170,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner_circle: {
        borderRadius: '100%',
        borderColor: '#DED8CD',
        borderWidth: 16,
        width: 120,
        height: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 25,
        paddingLeft: 20,
    },
    txt_circle1: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333333',
        paddingBottom: 3,
    },
    txt_circle2: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333333',
        marginLeft: 12,
    },
    ttl_percent: {
        color: '#333333',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 23,
        textAlign: 'center',
    },
    txt_percent: {
        color: '#E2A500',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 13,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
    },
    box_percent: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 12,
        width: '100%',
    },
    item_percent: {
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        borderRightColor: '#CCCCCC',
        borderRightWidth: 1,
    },
    num_item_percent: {
        color: '#50A5AD',
        fontSize: 24,
        fontWeight: 'bold',
    },
    txt_item_percent: {
        color: '#333333',
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 5,
    },
    box_skill: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
    },
    skill: {
        width: 20,
        height: 19,
    },
    ttl_skill: {
        color: '#333333',
        fontSize: 20,
        marginLeft: 21,
    },
    item_skill: {
        marginTop: 22,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        paddingLeft: 6,
        paddingRight: 6,
        width: '100%',
    },
    lvl_skill: {
        width: 26,
        height: 26,
        borderRadius: 26,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        backgroundColor: '#303030',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt_skill: {
        marginLeft: 13,
    },
    btn_remove: {
        width: 15,
        height: 15,
    },
    btn_skill: {
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
    star: {
        width: 25,
        height: 23,
    },
    box_star: {
        width: 156,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    item_star: {
        display: 'flex',
        alignItems: 'center',
    },
    txt_star: {
        fontSize: 7,
        color: '#4B00E0',
        marginTop: 3,
        fontWeight: 'bold',
    },
    txt_star_no: {
        fontSize: 7,
        color: 'transparent',
        marginTop: 3,
        fontWeight: 'bold',
    },
    item_review: {
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    item_review_header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
    },
    txt_more: {
        marginLeft: 27,
        fontSize: 15,
        color: '#333333',
    },
    btn_showmore: {
        width: 16,
        height: 23,
    },
    btn_showmore_active: {
        rotate: '90deg',
    },
    txt_review: {
        fontSize: 15,
        color: '#333333',
        paddingBottom: 30,
    },
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    box_btn_pagination: {
        width: 35,
        height: 35,
        borderRadius: 4,
        borderColor: '#E8E9EC',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    btn_prev: {
        width: 8,
        height: 13,
    },
    btn_next: {
        width: 8,
        height: 13,
        rotate: '180deg',
    },
    num_page: {
        color: '#707070',
        fontSize: 12,
        marginRight: 16,
    },
    btn_contact: {
        marginTop: 18,
        textAlign: 'center',
        color: '#707070',
        fontSize: 14,
    },
    btn_delete: {
        marginTop: 18,
        textAlign: 'center',
        color: '#707070',
        fontSize: 14,
        marginBottom: 20,
    },
});

export default function MyPage(props) {
    const [showReviewMoreIndex, setShowReviewMoreIndex] = useState(0);
    const array_rating = [1, 1, 1, 1, 1];
    const array_skill = [
        { lvl: 3, txt: "レジ打ち", },
        { lvl: 6, txt: "接客", },
        { lvl: 7, txt: "コミュニケーション", },
        { lvl: 5, txt: "機械操作", },
        { lvl: 2, txt: "クレーム対応", },
    ];
    const array_review = [
        { num: 4, txt: "コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント" },
        { num: 2, txt: "コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント" },
        { num: 3, txt: "コメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメントコメント" },
    ];
    const array_pagenation = [1, 2, 3, 4];
    const showReviewMore = index => {
        setShowReviewMoreIndex(index);
    }
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>マイページ</Text>
            </View>
            <Image source={photo} style={styles.photo} />
            <Text style={styles.txt_name}>田中　美玲(24)</Text>
            <View style={styles.box_doll}>
                <Image source={doll} style={styles.doll} />
                <View>
                    <Text style={styles.txt_money}>あなたへの報酬金額</Text>
                    <View style={styles.box_money}>
                        <Image source={money} style={styles.money} />
                        <Text style={styles.num_money}>8,000円</Text>
                    </View>
                    <Text style={styles.btn_money}>振込先口座の確認・変更</Text>
                </View>
            </View>
            <View style={styles.board}>
                <View style={styles.box_crown}>
                    <Image source={crown} style={styles.crown} />
                    <Text style={styles.txt_crown}>あなたのランク</Text>
                </View>
                <View style={styles.box_circle}>
                    <View style={styles.inner_circle}>
                        <Text style={styles.txt_circle1}>Lv.</Text>
                        <Text style={styles.txt_circle2}>1</Text>
                    </View>
                </View>
                <Text style={styles.ttl_percent}>Good率</Text>
                <Text style={styles.txt_percent}>93%</Text>
                <View style={styles.box_percent}>
                    <View style={styles.item_percent}>
                        <Text style={styles.num_item_percent}>0</Text>
                        <Text style={styles.txt_item_percent}>キャンセル率</Text>
                    </View>
                    <View style={styles.item_percent}>
                        <Text style={styles.num_item_percent}>0</Text>
                        <Text style={styles.txt_item_percent}>就業時間</Text>
                    </View>
                    <View style={[styles.item_percent, { borderRightColor: 'transparent' }]}>
                        <Text style={styles.num_item_percent}>0</Text>
                        <Text style={styles.txt_item_percent}>就業時間</Text>
                    </View>
                </View>
            </View>
            <View style={styles.board}>
                <View style={styles.box_skill}>
                    <Image source={star} style={styles.skill} />
                    <Text style={styles.ttl_skill}>あなたのスキル</Text>
                </View>
                {
                    array_skill.map((item, index) =>
                        <View style={styles.item_skill} key={index}>
                            <Text style={styles.lvl_skill}>{item.lvl}</Text>
                            <Text style={styles.txt_skill}>{item.txt}</Text>
                            <Pressable style={{ marginLeft: 'auto' }}>
                                <Image source={btn_remove} style={styles.btn_remove} />
                            </Pressable>
                        </View>
                    )
                }
                <Text style={styles.btn_skill}>スキルの追加・変更</Text>
            </View>
            <View style={styles.board}>
                <View style={styles.box_skill}>
                    <Image source={review} style={styles.skill} />
                    <Text style={styles.ttl_skill}>あなたへのレビュー</Text>
                </View>
                {
                    array_review.map((item, index) =>
                        <View style={styles.item_review} key={index}>
                            <View style={styles.item_review_header}>
                                <View style={styles.box_star}>
                                    {
                                        array_rating.map((el, idx) =>
                                            <View style={styles.item_star} key={idx}>
                                                {
                                                    item.num > idx && <Image source={star_full} style={styles.star} /> ||
                                                    <Image source={star_empty} style={styles.star} />
                                                }
                                                <Text style={item.num > idx && styles.txt_star || styles.txt_star_no}>{idx + 1}</Text>
                                            </View>
                                        )
                                    }
                                </View>
                                {
                                    !showReviewMoreIndex == index && <Text style={styles.txt_more}>More...</Text>
                                }
                                <Pressable onPress={() => showReviewMore(index)} style={{marginLeft: 'auto'}}>
                                    <Image source={btn_showmore} style={[styles.btn_showmore, showReviewMoreIndex == index && styles.btn_showmore_active]} />
                                </Pressable>
                            </View>
                            {
                                showReviewMoreIndex == index && <Text style={styles.txt_review}>{item.txt}</Text>
                            }
                        </View>
                    )
                }
                <View style={styles.pagination}>
                    <View style={styles.box_btn_pagination}>
                        <Image source={btn_prev} style={styles.btn_prev} />
                    </View>
                    {
                        array_pagenation.map((item, index) =>
                            <Text style={styles.num_page} key={index}>{item}</Text>
                        )
                    }
                    <View style={styles.box_btn_pagination}>
                        <Image source={btn_prev} style={styles.btn_next} />
                    </View>
                </View>
            </View>
            <Text style={styles.btn_contact}>お問い合わせ</Text>
            <Text style={styles.btn_delete}>アカウントを削除</Text>
            <Footer num={5} />
        </View >
    );
}
