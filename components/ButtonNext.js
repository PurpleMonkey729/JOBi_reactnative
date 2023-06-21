import { StyleSheet, View, Image, Text } from "react-native";

import btn_next from '../assets/btn-next.png';

const styles = StyleSheet.create({
    cont: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '164rem',
    },
    box_dot: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100rem',
    },
    dot: {
        width: '17rem',
        height: '17rem',
        borderRadius: '100%',
        backgroundColor: '#C7C7C7',
    },
    dot_active: {
        backgroundColor: '#7364FF',
    },
    btn_next: {
        width: '65rem',
        height: '65rem',
        marginLeft: '58rem',
    },
});

export default function ButtonNext(props) {
    return(
        <View style={styles.cont}>
            <View style={styles.box_dot}>
                <View style={[styles.dot, props.num==1 && styles.dot_active]} />
                <View style={[styles.dot, props.num==2 && styles.dot_active]} />
                <View style={[styles.dot, props.num==3 && styles.dot_active]} />
            </View>
            <Image source={props.img} style={styles.btn_next} />
        </View>
    )
};