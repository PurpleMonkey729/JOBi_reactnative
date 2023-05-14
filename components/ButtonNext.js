import { StyleSheet, View, Image, Text } from "react-native";

import btn_next from '../assets/btn-next.png';

const styles = StyleSheet.create({
    cont: {
        display: 'flex',
        alignItems: 'center',
        width: 65,
    },
    btn_next: {
        width: 65,
        height: 65,
    },
    txt: {
        color: 'white',
        fontSize: 14,
        marginTop: 12,
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