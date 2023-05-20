import { StyleSheet, Text, View, Image, TextInput, Picker } from 'react-native';

import icon_search from '../assets/icon-search.png';

const styles = StyleSheet.create({
    header: {
        width: 428,
        height: 212,
        position: 'fixed',
        top: 0,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 25,
        backgroundColor: 'white',
        boxShadow: '0 3px 6px #888',
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
    }
});

export default function Header(props) {
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
    return (
        <View style={styles.header}>
            <Text style={styles.dsc}>働きたい日を選択</Text>
            <View style={styles.box_date}>
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
                    <TextInput style={styles.input} placeholder='都道府県' />
                </View>
                <Text style={styles.ttl_select}>絞り込み</Text>
                <Picker style={styles.select}>
                    <Picker.Item label="未選択" value="未選択" />
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="2" value="2" />
                    <Picker.Item label="3" value="3" />
                </Picker>
            </View>
        </View>
    );
}
