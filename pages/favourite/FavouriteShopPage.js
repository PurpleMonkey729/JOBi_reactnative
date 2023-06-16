import {StyleSheet, Text, Image, View} from 'react-native';

import Footer from '../../components/Footer';
import { css } from '../../style';

import favourite from '../../assets/favourite.png';

const styles = StyleSheet.create({
    ttl: {
        width: '100%',
        height: '69rem',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#303030',
        fontSize: '20rem',
        fontWeight: 'bold',
        paddingTop: '10rem',
    },
    item: {
        width: '367rem',
        height: '100rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    favourite: {
        width: '55rem',
        height: '51rem',
    },
    txt: {
        fontSize: '17rem',
        color: '#303030',
        fontWeight: 'bold',
        marginLeft: '10rem',
    },
    btn: {
        width: '96rem',
        height: '34rem',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14rem',
        backgroundColor: '#7764E4',
        borderRadius: '5rem',
    },
});

export default function FavouriteShopPage() {
    const array = [1, 2, 3];
    return (
        <View style={css.cont_white}>
            <Text style={styles.ttl}>お気に入り店舗</Text>
            {
                array.map((item, index)=> 
                    <View style={styles.item} key={index}>
                        <Image source={favourite} style={styles.favourite} />
                        <Text style={styles.txt}>じゃがすたじお</Text>
                        <Text style={styles.btn}>求人を見る</Text>
                    </View>
                )
            }
            <Footer num={2} />
        </View>
    );
}