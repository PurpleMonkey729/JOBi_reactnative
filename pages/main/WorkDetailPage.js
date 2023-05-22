import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useState } from 'react';
// import MapView from 'react-native-maps';

import { css } from '../../style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import img_heart from '../../assets/heart-no.png';
import img_go from '../../assets/left.png';
import photo from '../../assets/photo-worker.png';
import img_clock from '../../assets/clock.png';
import img_dollar from '../../assets/dollar.png';
import img_noexp from '../../assets/noexp.png';
import img_car from '../../assets/car.png';
import img_moneyhand from '../../assets/moneyhand.png';

const styles = StyleSheet.create({
    header: {
        marginTop: 35,
        marginLeft: 21,
        marginRight: 21,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    return: {
        width: 11,
        height: 20,
    },
    ttl: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#172B4D',
    },
    heart: {
        width: 19,
        height: 17,
    },
    box_photo: {
        position: 'relative',
        marginTop: 7,
    },
    photo: {
        width: 428,
        height: 310,
    },
    price_on_img: {
        position: 'absolute',
        width: 83,
        height: 33,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#2C92D2',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 4,
        right: 20,
        bottom: 14,
        backgroundColor: 'white',
    },
    box_main: {
        width: '100%',
        paddingLeft: 21,
        paddingRight: 21,
    },
    path: {
        fontSize: 13,
        color: '#959595',
        marginTop: 16,
    },
    txt: {
        color: '#172B4D',
        fontSize: 15,
        marginTop: 13,
    },
    box_clock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    img_clock: {
        width: 18,
        height: 18,
    },
    txt_clock: {
        marginLeft: 13,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    box_price: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
    },
    img_dollar: {
        width: 10,
        height: 18,
        marginLeft: 4,
        marginRight: 4,
    },
    box_deadline: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 9,
    },
    txt_deadline: {
        fontSize: 12,
        color: '#2C92D2',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    btn_deadline: {
        width: 91,
        height: 21,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 29,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        borderRadius: 4,
        backgroundColor: '#FA8673',
    },
    ttl_treat: {
        fontSize: 15,
        color: '#172B4D',
        paddingTop: 15,
        marginTop: 15,
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    box_treat: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    item_treat: {
        width: 74,
        height: 71,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#E1F0FB',
        marginRight: 15,
    },
    img_treat: {
        width: 31,
        height: 31,
    },
    txt_treat: {
        fontSize: 10,
        color: '#959595',
        marginTop: 7,
    },
    ttl_content: {
        fontSize: 15,
        color: '#172B4D',
        paddingTop: 15,
        marginTop: 15,
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    txt_content: {
        color: '#4D4D4D',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 17,
    },
    box_ttl_content_more: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    ttl_content_more: {
        color: '#172B4D',
        fontSize: 15,
    },
    img_go_map: {
        width: 6,
        height: 10,
        rotate: '270deg',
        marginLeft: 22,
    },
    box_subttl: {
        fontSize: 15,
        color: '#172B4D',
        paddingTop: 15,
        marginTop: 15,
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    address: {
        color: '#4D4D4D',
        fontSize: 14,
        marginTop: 14,
    },
    map: {
        width: 428,
        marginLeft: -14,
        height: 347,
    },
    btn_use_other_app: {
        color: '#2C92D2',
        fontSize: 15,
        marginTop: 14,
        textAlign: 'center',
    },
    ttl_warning: {
        fontSize: 15,
        color: '#172B4D',
        paddingTop: 15,
        marginTop: 15,
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    txt_warning: {
        color: '#4D4D4D',
        fontSize: 14,
        marginTop: 17,
    },
    ttl_thing: {
        fontSize: 15,
        color: '#172B4D',
        paddingTop: 15,
        marginTop: 15,
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    txt_thing: {
        color: '#4D4D4D',
        fontSize: 14,
        marginTop: 20,
    },
    btn_yellow: {
        position: 'fixed',
        bottom: 110,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default function WorkDetailPage(props) {
    const [isShowContentMore, setShowContentMore] = useState(false);
    const [isShowWarningMore, setShowWarningMore] = useState(false);
    const showContentMore = () => {
        setShowContentMore(!isShowContentMore);
    }
    const showWarningMore = () => {
        setShowWarningMore(!isShowWarningMore);
    }
    const clickReturn = () => {
        //Hi, BeauTy SMile!!!
    };
    const tmp_price = 5000;
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Pressable onPress={clickReturn}>
                    <Image source={img_go} style={styles.return} />
                </Pressable>
                <Text style={styles.ttl}>5月17日(水)</Text>
                <Image source={img_heart} style={styles.heart} />
            </View>
            <View style={styles.box_photo}>
                <Image source={photo} style={styles.photo} />
                <Text style={styles.price_on_img}>{'¥' + tmp_price.toLocaleString('en-US').toString()}</Text>
            </View>
            <View style={styles.box_main}>
                <Text style={styles.path}>飲食 / レストランスタッフ</Text>
                <Text style={styles.txt}>ここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトル</Text>
                <View style={styles.box_clock}>
                    <Image source={img_clock} style={styles.img_clock} />
                    <Text style={styles.txt_clock}>2023年5月17日(水) 6:00〜16:00 (休憩あり)</Text>
                </View>
                <View style={styles.box_price}>
                    <Image source={img_dollar} style={styles.img_dollar} />
                    <Text style={styles.txt_clock}>交通費支給 5,000円</Text>
                </View>
                <View style={styles.box_deadline}>
                    <Text style={styles.txt_deadline}>あと2時間23分で募集締切</Text>
                    <View style={styles.btn_deadline}>募集人数 3名</View>
                </View>
                <Text style={styles.ttl_treat}>待遇</Text>
                <View style={styles.box_treat}>
                    <View style={styles.item_treat}>
                        <Image source={img_noexp} style={styles.img_treat} />
                        <Text style={styles.txt_treat}>未経験者OK</Text>
                    </View>
                    <View style={styles.item_treat}>
                        <Image source={img_car} style={styles.img_treat} />
                        <Text style={styles.txt_treat}>バイク車通勤OK</Text>
                    </View>
                    <View style={styles.item_treat}>
                        <Image source={img_moneyhand} style={styles.img_treat} />
                        <Text style={styles.txt_treat}>交通費支給</Text>
                    </View>
                </View>
                <Text style={styles.ttl_content}>仕事内容</Text>
                <Text style={styles.txt_content}>仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。仕事内容をできるだけ具体的にご記入ください。</Text>
                <View style={styles.box_ttl_content_more} onStartShouldSetResponder={showContentMore}>
                    <Text style={styles.ttl_content_more}>さらに表示</Text>
                    <Image source={img_go} style={styles.img_go_map} />
                </View>
                {
                    isShowContentMore &&
                    <View>
                        <Text style={styles.box_subttl}>働く場所</Text>
                        <Text style={styles.address}>沖縄県那覇市前泊１丁目10-2</Text>
                        {/* <MapView style={styles.map} region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} showsUserLocation={true} /> */}
                        <View style={styles.btn_use_other_app}>ほかのアプリで行き方を確認</View>
                    </View>
                }
                <Text style={styles.ttl_warning}>注意事項</Text>
                <Text style={styles.txt_warning}>注意事項がここに入ります。注意事項がここに入ります。注意事項がここに入ります。注意事項がここに入ります。注意事項がここに入ります。注意事項がここに入ります。</Text>
                <View style={styles.box_ttl_content_more} onStartShouldSetResponder={showWarningMore}>
                    <Text style={styles.ttl_content_more}>さらに表示</Text>
                    <Image source={img_go} style={styles.img_go_map} />
                </View>
                {
                    isShowWarningMore &&
                    <View>
                        <Text style={styles.ttl_thing}>持ち物</Text>
                        <Text style={styles.txt_thing}>
                            ・持ち物がここに入ります。
                            <br />
                            ・持ち物がここに入ります。
                            <br />
                            ・持ち物がここに入ります。
                        </Text>
                    </View>
                }
                <View style={{marginBottom: 150}} />
            </View>
            <View style={[css.btn_yellow, styles.btn_yellow]}>本人確認にすすむ</View>
            <Footer num={1} />
        </View>
    );
}