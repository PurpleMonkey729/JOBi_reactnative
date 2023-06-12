import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../style';

import icon_feed from '../assets/icon-feed.png';
import icon_alarm from '../assets/icon-alarm.png';
import icon_explore from '../assets/icon-explore.png';
import icon_user from '../assets/icon-user.png';
import icon_setting from '../assets/icon-setting.png';
import { useEffect } from 'react';

const styles = StyleSheet.create({
    footer: {
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#2C92D2',
        width: 428,
        height: 84,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingRight: 36,
        paddingLeft: 43,
    },
    item: {
        alignItems: 'center',
    },
    img: {
        width: 16,
        height: 16,
        opacity: .3,
    },
    img_active: {
        opacity: 1,
    },
    txt: {
        marginTop: 9,
        fontSize: 11,
        color: 'white',
        fontWeight: 'bold',
    }
});

export default function Footer(props) {
    const clickMe = key => {
        const footer_items = document.getElementsByClassName('footer_item');
        for (let i = 0; i < footer_items.length; i++) {
            footer_items[i].classList.remove("footer_item_active");
        }
        footer_items[key].classList.add('footer_item_active');
    }
    return (
        <View style={styles.footer}>
            <div className={"footer_item"} onClick={() => clickMe(0)}>
                <View style={styles.item}>
                    <Image source={icon_feed} style={[styles.img, props.num == 1 && styles.img_active]} />
                    <Text style={styles.txt}>さがす</Text>
                </View>
            </div>
            <div className={"footer_item"} onClick={() => clickMe(1)}>
                <View style={styles.item}>
                    <Image source={icon_alarm} style={[styles.img, props.num == 2 && styles.img_active]} />
                    <Text style={styles.txt}>お気に入り</Text>
                </View>
            </div>
            <div className={"footer_item"} onClick={() => clickMe(2)}>
                <View style={styles.item}>
                    <Image source={icon_explore} style={[styles.img, props.num == 3 && styles.img_active]} />
                    <Text style={styles.txt}>はたらく</Text>
                </View>
            </div>
            <div className={"footer_item"} onClick={() => clickMe(3)}>
                <View style={styles.item}>
                    <Image source={icon_user} style={[styles.img, props.num == 4 && styles.img_active]} />
                    <Text style={styles.txt}>メッセージ</Text>
                </View>
            </div>
            <div className={"footer_item"} onClick={() => clickMe(4)}>
                <View style={styles.item}>
                    <Image source={icon_setting} style={[styles.img, props.num == 5 && styles.img_active]} />
                    <Text style={styles.txt}>マイページ</Text>
                </View>
            </div>
        </View>
    );
}
