import { Pressable, StyleSheet, Text, Image, View } from 'react-native';

import Footer from '../../components/Footer';
import { css } from '../../style';

import favourite from '../../assets/favourite.png';
import btn_return from '../../assets/return.png';
import like from '../../assets/heart-yes3.png';
import clock_red from '../../assets/clock-red.png';
import clock_blue from '../../assets/clock-blue.png';
import photo_worker from '../../assets/photo-worker.png';
import img_distance from '../../assets/distance.png';
import heart_no from '../../assets/heart-no.png';
import heart_yes from '../../assets/heart-yes.png';

const styles = StyleSheet.create({
    header: {
        paddingTop: 31,
        paddingLeft: 31,
        paddingBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    btn_return: {
        width: 27,
        height: 27,
    },
    ttl: {
        marginLeft: 87,
        color: '#303030',
        fontSize: 18,
        fontWeight: 'bold',
    },
    favourite: {
        width: 111,
        height: 103,
        marginTop: 18,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    txt_favourtie: {
        color: '#303030',
        fontSize: 17,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn_like: {
        width: 192,
        backgroundColor: '#FA8673',
        height: 46,
        marginTop: 31,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 19,
    },
    like: {
        width: 19,
        height: 17,
        marginRight: 17,
    },
    txt_btn_like: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    border: {
        marginTop: 24,
        width: 367,
        height: 1,
        backgroundColor: '#CCCCCC',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    box: {
        width: '100%',
        paddingTop: 10,
        paddingLeft: 7,
        paddingRight: 7,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        position: 'relative',
    },
    item: {
        width: 193,
        margin: 7,
    },
    box_time: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 3,
        zIndex: 2,
        top: 8,
        left: 10,
        borderRadius: 4,
        backgroundColor: 'white',
        width: 58,
        height: 16,
    },
    clock: {
        width: 10,
        height: 10,
    },
    time: {
        color: '#2C92D2',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 1,
    },
    time_red: {
        color: '#FA8673',
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 11,
    },
    photo: {
        width: 193,
        height: 148,
    },
    txt: {
        marginTop: 5,
        fontSize: 12,
        color: '#172B4D',
    },
    box_date: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    date: {
        fontSize: 12,
        color: '#172B4D',
    },
    price: {
        marginTop: 10,
        fontSize: 16,
        color: '#172B4D',
    },
    box_bottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    city: {
        height: 21,
        borderRadius: 4,
        paddingLeft: 9,
        paddingRight: 9,
        backgroundColor: '#2C92D2',
        color: 'white',
        fontSize: 13,
        display: 'flex',
        justifyContent: 'center',
    },
    heart: {
        width: 20,
        height: 18,
        marginLeft: 10,
    },
    img_distance: {
        width: 9,
        height: 13,
        marginLeft: 'auto',
    },
    distance: {
        color: '#172B4D',
        fontSize: 10,
    },
});

export default function FavouriteShopDetailPage() {
    const tmp_price = 5000;
    const data = [
        {
            clock: 'blue',
            time: '12:24:10',
            img: photo_worker,
            txt: 'ここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトル',
            date: '5月17日',
            price: '¥' + tmp_price.toLocaleString('en-US').toString(),
            city: '那覇市',
            like: 'no',
            distance: 2.4 + 'km',
        },
        {
            clock: 'red',
            time: '締切',
            img: photo_worker,
            txt: 'ここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトル',
            date: '5月17日',
            price: '¥' + tmp_price.toLocaleString('en-US').toString(),
            city: '沖縄市',
            like: 'no',
            distance: 6 + 'km',
        },
    ];
    return (
        <View style={css.cont_white}>
            <View style={styles.header}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>お気に入り店舗</Text>
            </View>
            <Image source={favourite} style={styles.favourite} />
            <Text style={styles.txt_favourtie}>じゃがすたじお</Text>
            <View style={styles.btn_like}>
                <Image source={like} style={styles.like} />
                <Text style={styles.txt_btn_like}>お気に入り済み</Text>
            </View>
            <View style={styles.border} />

            <View style={styles.box}>
                {data.map(item =>
                    <View style={styles.item}>
                        {
                            item.clock == 'red' &&
                            <View style={styles.box_time}>
                                <Image source={clock_red} style={styles.clock} />
                                <Text style={styles.time_red}>{item.time}</Text>
                            </View> ||
                            item.clock == 'blue' &&
                            <View style={styles.box_time}>
                                <Image source={clock_blue} style={styles.clock} />
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                        }
                        <Image source={photo_worker} style={styles.photo} />
                        <Text style={styles.txt}>{item.txt}</Text>
                        <View style={styles.box_date}>
                            <Text style={styles.date}>{item.date}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                        <View style={styles.box_bottom}>
                            <View style={styles.city}>{item.city}</View>
                            {
                                item.like == 'yes' && <Image source={heart_yes} style={styles.heart} /> ||
                                item.like == 'no' && <Image source={heart_no} style={styles.heart} />
                            }
                            <Image source={img_distance} style={styles.img_distance} />
                            <Text style={styles.distance}>{item.distance}</Text>
                        </View>
                    </View>
                )}
            </View>
            <Footer num={2} />
        </View>
    );
}