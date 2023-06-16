import { Pressable, StyleSheet, Text, TextInput, View, Image, Picker, TextBase } from 'react-native';
import { useState } from 'react';

import btn_change_camera from '../../assets/change_camera.png';

const styles = StyleSheet.create({
    cont: {
        width: '100vw',
        height: '100vh',
        minHeight: '428rem',
        minHeight: '926rem',
        backgroundColor: 'black',
        position: 'relative',
    },
    box_top: {
        position: 'absolute',
        width: 'max-content',
        top: '21rem',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    txt_top: {
        color: 'white',
        fontSize: '18rem',
    },
    btn_top: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '9rem',
        width: '90rem',
        height: '30rem',
        color: 'white',
        fontSize: '15rem',
        borderRadius: '6rem',
        borderColor: 'white',
        borderWidth: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box_center: {
        position: 'absolute',
        top: '175rem',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        width: '213rem',
        height: '213rem',
        borderWidth: '5rem',
        borderColor: 'black',
    },
    box_center_green: {
        borderColor: '#08D500',
    },
    box_center_red: {
        borderColor: '#d50000',
    },
    box_bottom: {
        position: 'absolute',
        width: 'max-content',
        bottom: '17rem',
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    txt_bottom: {
        color: 'white',
        textAlign: 'center',
        marginBottom: '14rem',
    },
    btn_change_camera: {
        width: '60rem',
        height: '52rem',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    btn_green: {
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '94rem',
        height: '94rem',
        borderRadius: '94rem',
        backgroundColor: '#08D500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '24rem',
    },
    btn_red: {
        left: '0rem',
        right: '0rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '94rem',
        height: '94rem',
        borderRadius: '94rem',
        backgroundColor: '#D50000',
        marginBottom: '24rem',
        position: 'relative',
    },
    checkmark: {
        borderBottomColor: 'white',
        borderLeftColor: 'white',
        borderBottomWidth: '2rem',
        borderLeftWidth: '2rem',
        width: '35rem',
        height: '25rem',
        rotate: '-45deg',
        marginBottom: '15rem',
    },
    xmark: {
        position: 'absolute',
        fontSize: '75rem',
        rotate: '45deg',
        color: 'white',
        top: '-8rem',
        left: '27rem',
    },
});

export default function WorkQRPage(props) {
    const [flag, setFlag] = useState(0);
    return (
        <View style={styles.cont}>
            {
                flag == 0 &&
                <View style={styles.box_top}>
                    <Text style={styles.txt_top}>チェックイン</Text>
                    <Text style={styles.btn_top} onStartShouldSetResponder={() => setFlag(false)}>閉じる</Text>
                </View>
            }
            <View style={[styles.box_center, flag==1 && styles.box_center_green, flag==2 && styles.box_center_red]} />
            <View style={styles.box_bottom}>
                <Text text style={styles.txt_bottom}>
                    {
                        flag == 0 && "QRコードが枠に入るように" ||
                        flag == 1 && "読み取りに成功しました！" ||
                        flag == 2 && "読み取りに失敗しました"
                    }
                    <br />
                    {
                        flag == 0 && "調整して下さい、"
                    }
                </Text>
                {
                    flag == 0 && <Image source={btn_change_camera} style={styles.btn_change_camera} /> ||
                    flag == 1 && <View style={styles.btn_green}><View style={styles.checkmark} /></View> ||
                    flag == 2 && <View style={styles.btn_red}><Text style={styles.xmark}>+</Text></View>
                }
            </View>
        </View>
    );
}