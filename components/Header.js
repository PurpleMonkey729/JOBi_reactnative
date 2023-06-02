import { StyleSheet, Text, View, Image, TextInput, Picker } from 'react-native';
import { useRef, useState, useEffect } from 'react';

import icon_search from '../assets/icon-search.png';
import img_right from '../assets/right.png';

const styles = StyleSheet.create({
    header: {
        width: 428,
        height: 212,
        position: 'fixed',
        top: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        backgroundColor: 'white',
        boxShadow: '0 10px 10px -10px #000',
        zIndex: 10,
    },
    dsc: {
        fontSize: 15,
        color: '#172B4D',
    },
    box_date: {
        marginTop: 3,
        flexDirection: 'row',
        width: 396,
        overflow: 'auto',
    },
    item_date: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 69,
        height: 65,
        borderRadius: 10,
        border: '1px solid #BABABA',
        marginRight: 10,
    },
    item_date_today: {
        border: 'none',
        backgroundColor: '#11CDEF',
    },
    item_date_first: {
        color: '#172B4D',
        fontSize: 15,
        fontWeight: 'bold',
    },
    item_date_second: {
        color: '#172B4D',
        fontSize: 9,
        fontWeight: 'bold',
    },
    box_search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 17,
    },
    box_input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        left: 17,
        width: 16,
        height: 16,
    },
    input: {
        color: '#2699FB',
        fontSize: 18,
        width: 193,
        height: 60,
        paddingLeft: 50,
        borderRadius: 8,
        border: '1px solid #2699FB',
    },
    ttl_select: {
        color: '#2699FB',
        fontSize: 13,
        fontWeight: 'bold',
    },
    select: {
        color: '#2699FB',
        fontSize: 18,
        width: 127,
        height: 60,
        paddingLeft: 19,
        borderRadius: 8,
        border: '1px solid #2699FB',
    },
    menu_city: {
        position: 'absolute',
        top: 60,
    },
    menu_filter: {
        position: 'absolute',
        top: 60,
        right: 0,
    },
    menu_item: {
        width: 343,
        height: 48,
        marginBottom: 1,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 19,
        color: '#2699FB',
        fontSize: 14,
        fontWeight: 'bold',
        position: 'relative',
        boxShadow: '0 3px 6px #00000033',
    },
    img_arrow_right: {
        position: 'absolute',
        right: 15,
        width: 10,
        height: 10,
    },
    img_arrow_down: {
        position: 'absolute',
        right: 15,
        width: 10,
        height: 10,
        rotate: '90deg',
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
