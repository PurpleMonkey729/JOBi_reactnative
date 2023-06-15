import { StyleSheet, View, Image, Text } from "react-native";

import btn_next from '../assets/btn-next.png';

const styles = StyleSheet.create({
    cont: {
        display: 'flex',
        alignItems: 'center',
        width: '65rem',
    },
    btn_next: {
        width: '65rem',
        height: '65rem',
    },
    txt: {
        color: 'white',
        fontSize: '14rem',
        marginTop: '12rem',
    }
});

export default function ButtonNext(props) {
    return(
        <View style={styles.cont}>
            <Image source={props.img} style={styles.btn_next} />
            <Text style={styles.txt}>{props.txt}</Text>
        </View>
    )
};