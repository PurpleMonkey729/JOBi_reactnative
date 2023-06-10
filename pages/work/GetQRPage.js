import { Pressable, StyleSheet, Text, TextInput, View, Image, Picker, TextBase } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
    cont: {
        width: '100vw',
        height: '100vh',
        minHeight: 428,
        minHeight: 926,
        backgroundColor: 'black',
        position: 'relative',
    },
    box_center: {
        position: 'absolute',
        top: 175,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        width: 213,
        height: 213,
    },
    btn: {
        position: 'absolute',
        bottom: 29,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 90,
        height: 30,
        color: 'white',
        fontSize: 15,
        borderRadius: 6,
        borderColor: 'white',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_green: {
        position: 'absolute',
        bottom: 41,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 94,
        height: 94,
        borderRadius: 94,
        backgroundColor: '#08D500',
        borderColor: 'white',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkmark: {
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        width: 35,
        height: 25,
        rotate: '-45deg',
        marginBottom: 15,
    }
});

export default function WorkQRPage(props) {
    const [flag, setFlag] = useState(true);
    return (
        <View style={styles.cont}>
            <View style={styles.box_center} />
            {
                flag && <Text style={styles.btn} onStartShouldSetResponder={()=>setFlag(false)}>閉じる</Text> ||
                !flag && <View style={styles.btn_green} onStartShouldSetResponder={()=>setFlag(true)}><View style={styles.checkmark} /></View>
            }
        </View>
    );
}