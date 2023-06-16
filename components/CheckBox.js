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
        fontSize: '14rem',
        marginLeft: '5rem',
    },
    outline:{
        borderRadius: '6rem',
        borderWidth: '2rem',
        borderColor: '#2699FB',
        backgroundColor: '#fff',
        position: 'relative',
        width: '30rem',
        height: '30rem',
    },
    outline_checked:{
        borderRadius: '6rem',
        backgroundColor: '#2699FB',
        position: 'relative',
        width: '30rem',
        height: '30rem',
    },
    outline_disabled:{
        borderColor: 'transparent',
        backgroundColor: 'transparent',
    },
    checkmark: {
        border: '3px solid white',
        borderTopWidth: '0rem',
        borderRightWidth: '0rem',
        rotate: '-45deg',
        position: 'absolute',
        width: '18rem',
        height: '10rem',
        top: '5rem',
        left: '4rem',
    },
});