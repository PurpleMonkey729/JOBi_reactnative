import { StyleSheet, View, Image, TextInput } from "react-native";
import { ImageBackground } from "react-native-web";

const styles = StyleSheet.create({
    cont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '300rem',
        height: '52rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        left: '23rem',
        width: '20rem',
        height: '20rem',
    },
    input: {
        color: 'white',
        fontSize: '18rem',
        width: '344rem',
        height: '60rem',
        paddingLeft: '57rem',
        backgroundColor: '#ffffff33',
        borderRadius: '5rem',
    },
});

export default function InputIcon(props) {
    const onChangeText = () => {
        // Please input the code.
    }
    return (
        <View style={styles.cont}>
            <Image source={props.icon} style={styles.icon} />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={props.placeholder}
                keyboardType = {props.keyboardType}
            />
        </View>
    )
};