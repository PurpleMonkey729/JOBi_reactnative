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
        paddingTop: '31rem',
        paddingLeft: '31rem',
        paddingBottom: '10rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    btn_return: {
        width: '27rem',
        height: '27rem',
    },
    ttl: {
        marginLeft: '87rem',
        color: '#303030',
        fontSize: '18rem',
        fontWeight: 'bold',
    },
    favourite: {
        width: '111rem',
        height: '103rem',
        marginTop: '18rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    txt_favourtie: {
        color: '#303030',
        fontSize: '17rem',
        marginTop: '10rem',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn_like: {
        width: '192rem',
        backgroundColor: '#FA8673',
        height: '46rem',
        marginTop: '31rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '19rem',
    },
    like: {
        width: '19rem',
        height: '17rem',
        marginRight: '17rem',
    },
    txt_btn_like: {
        color: 'white',
        fontSize: '13rem',
        fontWeight: 'bold',
    },
    border: {
        marginTop: '24rem',
        width: '367rem',
        height: '1rem',
        backgroundColor: '#CCCCCC',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    box: {
        width: '100%',
        paddingTop: '10rem',
        paddingLeft: '7rem',
        paddingRight: '7rem',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        position: 'relative',
    },
    item: {
        width: '193rem',
        margin: '7rem',
    },
    box_time: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '3rem',
        zIndex: 2,
        top: '8rem',
        left: '10rem',
        borderRadius: '4rem',
        backgroundColor: 'white',
        width: '58rem',
        height: '16rem',
    },
    clock: {
        width: '10rem',
        height: '10rem',
    },
    time: {
        color: '#2C92D2',
        fontSize: '10rem',
        fontWeight: 'bold',
        marginLeft: '1rem',
    },
    time_red: {
        color: '#FA8673',
        fontSize: '10rem',
        fontWeight: 'bold',
        marginLeft: '11rem',
    },
    photo: {
        width: '193rem',
        height: '148rem',
    },
    txt: {
        marginTop: '5rem',
        fontSize: '12rem',
        color: '#172B4D',
    },
    box_date: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    date: {
        fontSize: '12rem',
        color: '#172B4D',
    },
    price: {
        marginTop: '10rem',
        fontSize: '16rem',
        color: '#172B4D',
    },
    box_bottom: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '10rem',
    },
    city: {
        height: '21rem',
        borderRadius: '4rem',
        paddingLeft: '9rem',
        paddingRight: '9rem',
        backgroundColor: '#2C92D2',
        color: 'white',
        fontSize: '13rem',
        display: 'flex',
        justifyContent: 'center',
    },
    heart: {
        width: '20rem',
        height: '18rem',
        marginLeft: '10rem',
    },
    img_distance: {
        width: '9rem',
        height: '13rem',
        marginLeft: 'auto',
    },
    distance: {
        color: '#172B4D',
        fontSize: '10rem',
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