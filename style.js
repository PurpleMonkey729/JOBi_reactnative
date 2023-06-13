import { StyleSheet } from "react-native";

export const cutString = (str, len) => {
    if (str.length <= len)
        return str;
    else
        return str.substring(0, len) + "...";
}

export const css = StyleSheet.create({
    cont_blue: {
        width: '428rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#2C92D2',
        fontFamily: 'Arial',
        height: '100vh',
        height: '926rem',
        position: 'relative',
    },
    cont_white_header: {
        width: 428,
        paddingTop: 212,
        paddingBottom: 99,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Arial',
        minHeight: 926,
        position: 'relative',
        backgroundColor: '#F6F9FC'
    },
    cont_white: {
        width: 428,
        paddingBottom: 99,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Arial',
        minHeight: 926,
        position: 'relative',
        backgroundColor: '#F6F9FC'
    },
    cont_white_full: {
        width: 428,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Arial',
        minHeight: 926,
        position: 'relative',
        backgroundColor: '#F6F9FC',
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    btn_yellow: {
        width: 300,
        height: 52,
        color: 'white',
        fontSize: 16,
        backgroundColor: '#F0BC08',
        borderRadius: 5,
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ttl: {
        fontSize: 28,
        color: 'white',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    dsc: {
        fontSize: 15.5,
        color: '#E1FA08',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    input: {
        color: 'white',
        fontSize: 18,
        width: 300,
        height: 60,
        paddingLeft: 23,
        backgroundColor: '#ffffff33',
        borderRadius: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});