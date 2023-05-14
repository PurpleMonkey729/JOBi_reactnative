import { StyleSheet, View, Image, TextInput } from "react-native";
import { ImageBackground } from "react-native-web";

const styles = StyleSheet.create({
    cont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 52,
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        left: 23,
        width: 20,
        height: 20,
    },
    input: {
        color: 'white',
        fontSize: 18,
        width: 344,
        height: 60,
        paddingLeft: 57,
        backgroundColor: '#ffffff33',
        borderRadius: 5,
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