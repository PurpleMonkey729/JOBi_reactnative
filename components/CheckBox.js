import { StyleSheet, Text, View } from "react-native";

const CheckBox = (props) => {
    return (
        <View style={styles.box} onStartShouldSetResponder={props.onPress}>
            <View style={[styles.outline, props.checked && styles.outline_checked, props.disabled && styles.outline_disabled]}>
                {props.checked && <View style={styles.checkmark}></View>}
            </View>
            <Text style={styles.txt}>{props.txt}</Text>
        </View>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    txt: {
        color: '#fff',
        fontSize: 15,
        marginLeft: 5,
    },
    outline:{
        borderRadius: 6,
        border: '2px solid #2699FB',
        backgroundColor: '#fff',
        position: 'relative',
        width: 30,
        height: 30,
    },
    outline_checked:{
        borderRadius: 6,
        border: '2px solid #2699FB',
        backgroundColor: '#2699FB',
        position: 'relative',
        width: 30,
        height: 30,
    },
    outline_disabled:{
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    },
    checkmark: {
        border: '3px solid white',
        borderTopWidth: 0,
        borderRightWidth: 0,
        rotate: '-45deg',
        position: 'absolute',
        width: 18,
        height: 10,
        top: 5,
        left: 4,
    },
});