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
        minHeight: '926rem',
        height: '100vh',
        position: 'relative',
    },
    cont_white_header: {
        width: '428rem',
        paddingTop: '199rem',
        paddingBottom: '99rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Arial',
        minHeight: '926rem',
        position: 'relative',
        backgroundColor: '#F6F9FC'
    },
    cont_white: {
        width: '428rem',
        paddingBottom: '99rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Arial',
        minHeight: '926rem',
        position: 'relative',
        backgroundColor: '#F6F9FC'
    },
    cont_white_full: {
        width: '428rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Arial',
        minHeight: '926rem',
        position: 'relative',
        backgroundColor: '#F6F9FC',
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5rem',
    },
    btn_yellow: {
        width: '300rem',
        height: '52rem',
        color: 'white',
        fontSize: '16rem',
        backgroundColor: '#F0BC08',
        borderRadius: '5rem',
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    ttl: {
        fontSize: '28rem',
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
        fontSize: '18rem',
        width: '300rem',
        height: '60rem',
        paddingLeft: '23rem',
        backgroundColor: '#ffffff33',
        borderRadius: '5rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});