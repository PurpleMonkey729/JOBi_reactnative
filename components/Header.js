import { StyleSheet, Text, View, Image, TextInput, Picker } from 'react-native';
import { useRef, useState, useEffect } from 'react';

import icon_search from '../assets/search2.png';
import img_right from '../assets/down.png';

const styles = StyleSheet.create({
    header: {
        width: '428rem',
        height: '196rem',
        position: 'fixed',
        top: '0rem',
        paddingLeft: '16rem',
        paddingRight: '16rem',
        paddingTop: '36rem',
        backgroundColor: 'white',
        boxShadow: '0 10px 10px -10px #000',
        zIndex: 10,
    },
    dsc: {
        fontSize: '15rem',
        color: '#332180',
    },
    box_date: {
        marginTop: '3rem',
        flexDirection: 'row',
        width: '396rem',
        overflow: 'auto',
    },
    item_date: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '69rem',
        height: '65rem',
        borderRadius: '10rem',
        border: '1px solid #BABABA',
        marginRight: '10rem',
    },
    item_date_today: {
        border: 'none',
        backgroundColor: '#FFE400',
    },
    item_date_first: {
        color: '#172B4D',
        fontSize: '15rem',
        fontWeight: 'bold',
    },
    item_date_second: {
        color: '#172B4D',
        fontSize: '9rem',
        fontWeight: 'bold',
    },
    box_search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    box_input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '48rem',
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        left: '17rem',
        width: '16rem',
        height: '16rem',
    },
    input: {
        color: '#332180',
        fontSize: '14rem',
        width: '193rem',
        height: '32rem',
        paddingLeft: '50rem',
        borderRadius: '9rem',
        border: '1px solid #332180',
    },
    ttl_select: {
        color: '#332180',
        fontSize: '13rem',
        fontWeight: 'bold',
    },
    select: {
        color: '#332180',
        fontSize: '14rem',
        width: '127rem',
        height: '32rem',
        paddingLeft: '19rem',
        borderRadius: '8rem',
        border: '1px solid #332180',
    },
    menu_city: {
        position: 'absolute',
        top: '50rem',
    },
    menu_filter: {
        position: 'absolute',
        top: '50rem',
        right: '0rem',
    },
    menu_item: {
        width: '343rem',
        height: '48rem',
        marginBottom: '1rem',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: '19rem',
        color: '#332180',
        fontSize: '14rem',
        fontWeight: 'bold',
        position: 'relative',
        boxShadow: '0 3px 6px #00000033',
    },
    img_arrow_right: {
        position: 'absolute',
        right: '15rem',
        width: '10rem',
        height: '10rem',
        rotate: '-90deg',
    },
    img_arrow_down: {
        position: 'absolute',
        right: '15rem',
        width: '10rem',
        height: '10rem',
    }
});

export default function Header(props) {
    const [city, setCity] = useState('那覇市');
    const [filter, setFilter] = useState('未選択');
    const [isShowCityMenu, setShowCityMenu] = useState(false);
    const [isShowFilterMenu, setShowFilterMenu] = useState(false);
    const dates = new Array();
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    const now = new Date();
    dates.push({ first: "今日", second: now.getMonth() + "月" + now.getDate() + '日' + days[now.getDay()] });
    let tmrw = new Date(now.getTime() + (24 * 60 * 60 * 1000));
    dates.push({ first: "明日", second: tmrw.getMonth() + "月" + tmrw.getDate() + '日' + days[tmrw.getDay()] });
    for (let i = 1; i <= 5; i++) {
        const tmpDate = new Date(tmrw.getTime() + i * (24 * 60 * 60 * 1000));
        dates.push({ first: tmpDate.getMonth() + "月" + tmpDate.getDate() + '日', second: days[tmpDate.getDay()] });
    }
    const cites = ['那覇市', '浦添市', '宜野湾市', '沖縄市', 'うるま市'];
    const filters = ['飲食店', '未経験OK', '交通費支給', '倉庫', '宅配'];
    const onClickCity = name => {
        setShowCityMenu(false);
        setCity(name);
    }
    const onClickFilter = name => {
        setShowFilterMenu(false);
        setFilter(name);
    }
    const showCityMenu = () => {
        setShowCityMenu(true);
        setShowFilterMenu(false);
    }
    const showFilterMenu = () => {
        setShowFilterMenu(true);
        setShowCityMenu(false);
    }

    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setShowCityMenu(false);
                setShowFilterMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return (
        <View style={styles.header}>
            <Text style={styles.dsc}>働きたい日を選択</Text>
            <View style={styles.box_date} showsHorizontalScrollIndicator={false}>
                <View style={[styles.item_date, styles.item_date_today]}>
                    <View style={styles.item_date_first}>{dates[0].first}</View>
                    <View style={styles.item_date_second}>{dates[0].second}</View>
                </View>
                {dates.map((item, index) => {
                    if (index != 0)
                        return (
                            <View style={styles.item_date}>
                                <View style={styles.item_date_first}>{item.first}</View>
                                <View style={styles.item_date_second}>{item.second}</View>
                            </View>
                        );
                })}
            </View>
            <View style={styles.box_search}>
                <View style={styles.box_input}>
                    <Image source={icon_search} style={styles.icon} />
                    <TextInput style={styles.input} value={city} onFocus={showCityMenu} />
                    <Image source={img_right} style={styles.img_arrow_down} />
                    {isShowCityMenu && <View style={styles.menu_city}>
                        {cites.map(item => <View
                            style={styles.menu_item}
                            onStartShouldSetResponder={() => onClickCity(item)}
                        >{item}<Image source={img_right} style={styles.img_arrow_right} /></View>)}
                    </View>}
                </View>
                <Text style={styles.ttl_select}>絞り込み</Text>
                <TextInput style={styles.select} value={filter} onFocus={showFilterMenu} />
                <Image source={img_right} style={styles.img_arrow_down} />
                {isShowFilterMenu && <View style={styles.menu_filter}>
                    {filters.map(item => <View
                        style={styles.menu_item}
                        onStartShouldSetResponder={() => onClickFilter(item)}
                    >{item}<Image source={img_right} style={styles.img_arrow_right} /></View>)}
                </View>}
            </View>
        </View>
    );
}
