
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckBox = (props) => {
    const iconName = props.isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";

    return (
        <View style={styles.container}>
            <Pressable onPress={props.onPress}>
                <View style={[styles.bg, props.disabled && !props.isChecked && styles.bg_none]} />
                {
                    props.disabled && <MaterialCommunityIcons name={iconName} size={35} color="#2C92D2" /> ||
                    !props.disabled && <MaterialCommunityIcons name={iconName} size={35} color="#2699FB" />
                }
            </Pressable>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        position: 'relative',
    },
    bg: {
        width: 27,
        height: 26,
        position: 'absolute',
        top: 5,
        left: 4,
        borderRadius: 3,
        backgroundColor: 'white',
        zIndex: '-1',
        border: '3px solid #2699FB'
    },
    title: {
        fontSize: 14,
        color: "#fff",
        marginLeft: 5,
    },
    bg_none: {
        backgroundColor: '#2C92D2',
    }
});