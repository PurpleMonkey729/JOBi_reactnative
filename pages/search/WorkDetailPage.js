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
import btn_grad from '../../assets/btn-grad2.png';

const styles = StyleSheet.create({
    header: {
        marginTop: '35rem',
        marginLeft: '21rem',
        marginRight: '21rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    return: {
        width: '11rem',
        height: '20rem',
    },
    ttl: {
        fontSize: '15rem',
        fontWeight: 'bold',
        color: '#172B4D',
    },
    heart: {
        width: '19rem',
        height: '17rem',
    },
    box_photo: {
        position: 'relative',
        marginTop: '7rem',
    },
    photo: {
        width: '428rem',
        height: '310rem',
    },
    price_on_img: {
        position: 'absolute',
        width: '83rem',
        height: '33rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#2C92D2',
        fontSize: '20rem',
        fontWeight: 'bold',
        borderRadius: '4rem',
        right: '20rem',
        bottom: '14rem',
        backgroundColor: 'white',
    },
    box_main: {
        width: '100%',
        paddingLeft: '21rem',
        paddingRight: '21rem',
    },
    path: {
        fontSize: '13rem',
        color: '#959595',
        marginTop: '16rem',
    },
    txt: {
        color: '#172B4D',
        fontSize: '15rem',
        marginTop: '13rem',
    },
    box_clock: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '20rem',
    },
    img_clock: {
        width: '18rem',
        height: '18rem',
    },
    txt_clock: {
        marginLeft: '13rem',
        fontSize: '14rem',
        fontWeight: 'bold',
        color: '#4D4D4D',
    },
    box_price: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '7rem',
    },
    img_dollar: {
        width: '10rem',
        height: '18rem',
        marginLeft: '4rem',
        marginRight: '4rem',
    },
    box_deadline: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '9rem',
    },
    txt_deadline: {
        fontSize: '12rem',
        color: '#2C92D2',
        marginLeft: '10rem',
        fontWeight: 'bold',
    },
    btn_deadline: {
        width: '91rem',
        height: '21rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '29rem',
        fontSize: '12rem',
        fontWeight: 'bold',
        color: 'white',
        borderRadius: '4rem',
        backgroundColor: '#FA8673',
    },
    ttl_treat: {
        fontSize: '15rem',
        color: '#172B4D',
        paddingTop: '15rem',
        marginTop: '15rem',
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    box_treat: {
        marginTop: '10rem',
        display: 'flex',
        flexDirection: 'row',
    },
    item_treat: {
        width: '74rem',
        height: '71rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '12rem',
        backgroundColor: '#E1F0FB',
        marginRight: '15rem',
    },
    img_treat: {
        width: '31rem',
        height: '31rem',
    },
    txt_treat: {
        fontSize: '10rem',
        color: '#959595',
        marginTop: '7rem',
    },
    ttl_content: {
        fontSize: '15rem',
        color: '#172B4D',
        paddingTop: '15rem',
        marginTop: '15rem',
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    txt_content: {
        color: '#4D4D4D',
        fontSize: '14rem',
        fontWeight: 'bold',
        marginTop: '17rem',
    },
    box_ttl_content_more: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25rem',
    },
    ttl_content_more: {
        color: '#172B4D',
        fontSize: '15rem',
    },
    img_go_map: {
        width: '6rem',
        height: '10rem',
        rotate: '270deg',
        marginLeft: '22rem',
    },
    box_subttl: {
        fontSize: '15rem',
        color: '#172B4D',
        paddingTop: '15rem',
        marginTop: '15rem',
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    address: {
        color: '#4D4D4D',
        fontSize: '14rem',
        marginTop: '14rem',
    },
    map: {
        width: '428rem',
        marginLeft: '-14rem',
        height: '347rem',
    },
    btn_use_other_app: {
        color: '#2C92D2',
        fontSize: '15rem',
        marginTop: '14rem',
        textAlign: 'center',
    },
    ttl_warning: {
        fontSize: '15rem',
        color: '#172B4D',
        paddingTop: '15rem',
        marginTop: '15rem',
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    txt_warning: {
        color: '#4D4D4D',
        fontSize: '14rem',
        marginTop: '17rem',
    },
    ttl_thing: {
        fontSize: '15rem',
        color: '#172B4D',
        paddingTop: '15rem',
        marginTop: '15rem',
        borderTopColor: '#707070',
        borderTopWidth: '1px',
    },
    txt_thing: {
        color: '#4D4D4D',
        fontSize: '14rem',
        marginTop: '20rem',
    },
    btn_yellow: {
        position: 'fixed',
        bottom: '110rem',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    txt_waiting: {
        position: 'fixed',
        bottom: '110rem',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#172B4D',
        white: 'white',
    },
    btn_grad: {
        position: 'fixed',
        bottom: '110rem',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300rem',
        height: '54rem',
    }
});

export default function WorkDetailPage(props) {
    const [isShowContentMore, setShowContentMore] = useState(false);
    const [isShowWarningMore, setShowWarningMore] = useState(false);
    const pageState = 1;
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
                <View style={{ marginBottom: 150 }} />
            </View>
            {
                pageState == 1 && <View style={[css.btn_yellow, styles.btn_yellow]}>本人確認にすすむ</View> ||
                pageState == 2 && <View style={[css.btn_yellow, styles.txt_waiting]}>本人確認資料を確認中</View> ||
                pageState == 3 &&
                <Pressable>
                    <Image source={btn_grad} style={styles.btn_grad} />
                </Pressable>
            }

            <Footer num={1} />
        </View>
    );
}