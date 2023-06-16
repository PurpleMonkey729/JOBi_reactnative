import { StyleSheet, Text, View, Image, Animated } from 'react-native';
import { useRef, useState, useEffect } from 'react';

import { css } from '../../style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import clock_red from '../../assets/clock-red.png';
import clock_blue from '../../assets/clock-blue.png';
import photo_worker from '../../assets/photo-worker.png';
import img_distance from '../../assets/distance.png';
import heart_no from '../../assets/heart-no.png';
import heart_yes from '../../assets/heart-yes.png';

const styles = StyleSheet.create({
    box_loader: {
        marginTop: '158rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        width: '100rem',
        height: '100rem',
    },
    circle: {
        position: 'absolute',
        width: '12rem',
        height: '12rem',
        backgroundColor: '#2C92D2',
        borderRadius: '50%',
    },
    circle0: {
        top: '0rem',
        left: '37rem',
    },
    circle1: {
        top: '10rem',
        left: '63rem',
    },
    circle2: {
        top: '30rem',
        left: '79rem',
    },
    circle3: {
        top: '53rem',
        left: '73rem',
    },
    circle4: {
        top: '70rem',
        left: '55rem',
    },
    circle5: {
        top: '73rem',
        left: '30rem',
    },
    circle6: {
        top: '60rem',
        left: '8rem',
    },
    circle7: {
        top: '35rem',
        left: '0rem',
    },
    circle8: {
        top: '10rem',
        left: '10rem',
    },
    txt_en: {
        fontSize: '28rem',
        color: '#2C92D2',
        marginTop: '88rem',
        textAlign: 'center',
        fontWeight: '600rem',
    },
    txt_jp: {
        marginTop: '7rem',
        textAlign: 'center',
        fontSize: '15rem',
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

const AnimCircle = props => {
    const zoom = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
    useEffect(() => {
        setTimeout(() => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(zoom, {
                        toValue: 1.75,
                        duration: '900rem',
                    }),
                    Animated.timing(zoom, {
                        toValue: '1rem',
                        duration: '900rem',
                    })
                ])
            ).start();
        }, props.delay);

    }, [zoom]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                scale: zoom, // Bind opacity to animated value
            }}>
        </Animated.View>
    );
};

export default function WorkListPage(props) {
    const array = Array.from(Array(9).keys()).map(el => 'circle' + el);
    const [ready, setReady] = useState(true);
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
            clock: 'blue',
            time: '12:24:10',
            img: photo_worker,
            txt: 'ここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトル',
            date: '5月17日',
            price: '¥' + tmp_price.toLocaleString('en-US').toString(),
            city: '浦添市',
            like: 'yes',
            distance: 2 + 'km',
        },
        {
            clock: 'blue',
            time: '12:24:10',
            img: photo_worker,
            txt: 'ここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトル',
            date: '5月17日',
            price: '¥' + tmp_price.toLocaleString('en-US').toString(),
            city: '宜野湾市',
            like: 'no',
            distance: 7 + 'km',
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
        {
            clock: 'blue',
            time: '12:24:10',
            img: photo_worker,
            txt: 'ここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトル',
            date: '5月17日',
            price: '¥' + tmp_price.toLocaleString('en-US').toString(),
            city: 'France',
            like: 'no',
            distance: 5 + 'km',
        },
        {
            clock: 'blue',
            time: '12:24:10',
            img: photo_worker,
            txt: 'ここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトルここに求人タイトル',
            date: '5月17日',
            price: '¥' + tmp_price.toLocaleString('en-US').toString(),
            city: 'London',
            like: 'no',
            distance: 3 + 'km',
        },
    ];
    return (
        <div className='cont_fixed'>
            <div className='cont_worklistpage'>
                <View style={css.cont_white_header}>
                    <Header />
                    {
                        !ready &&
                        <View>
                            <View style={styles.box_loader}>
                                {array.map((item, index) =>
                                    <AnimCircle style={{ ...styles.circle, ...styles[item] }} delay={index * 200}>
                                    </AnimCircle>
                                )}
                            </View>
                            <Text style={styles.txt_en}>Loading</Text>
                            <Text style={styles.txt_jp}>求人を読み込んでいます</Text>
                        </View>
                        ||
                        ready &&
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
                    }
                    <Footer num={1} />
                </View>
            </div>
        </div>
    );
}