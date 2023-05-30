import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';
import CheckBox2 from '../../components/CheckBox2';

import btn_return from '../../assets/left.png';
import btn_pdf from '../../assets/btn-pdf.png';

const styles = StyleSheet.create({
    box: {
        paddingLeft: 27,
        paddingRight: 27,
    },
    btn_return: {
        width: 12,
        height: 20,
        marginTop: 35,
        marginLeft: -6,
    },
    ttl: {
        fontSize: 22,
        color: '#172B4D',
        textAlign: 'center',
        marginTop: 23,
        marginBottom: 36,
    },
    subttl: {
        color: '#172B4D',
        fontSize: 15,
        marginBottom: 15,
    },
    txt: {
        color: '#4d4d4d',
        fontSize: 14,
        fontWeight: 'bold'
    },
    border: {
        marginTop: 30,
        marginBottom: 30,
        width: '100%',
        height: 1,
        backgroundColor: '#7FC4FD',
    },
    subbox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btn_blue: {
        width: '31%',
        height: 37,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: '#2C92D2',
        marginBottom: 18,
    },
    btn_pdf: {
        width: 85,
        height: 27,
    },
    btn_yellow: {
        marginBottom: 30,
    },
    box_check: {
        position: 'absolute',
        right: 30,
    },
    box_check1: {
        top: 186
    },
    box_check2: {
        top: 308
    },
    box_check3: {
        top: 420
    },
    box_check4: {
        top: 791
    },
    box_check5: {
        top: 910
    },
    box_check6: {
        top: 1150
    },
    box_check7: {
        top: 1510
    },
    bg_modal: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#95959595',
        zIndex: 999
    },
    modal: {
        marginTop: 304,
        width: 295,
        height: 205,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        paddingTop: 21,
        paddingLeft: 24,
        paddingRight: 24,
        boxShadow: '0 5px 5px #134D7Eaa',
    },
    ttl_modal: {
        fontSize: 14,
        color: '#2699FB',
        fontWeight: 'bold',
    },
    txt_modal: {
        fontSize: 14,
        color: '#2699FB',
        marginTop: 16,
    },
    btn_modal: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'felx',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 16,
        backgroundColor: '#F0BC08',
        width: 177,
        height: 41,
    },
});

export default function WorkConformPage(props) {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState(false);
    const [checked5, setChecked5] = useState(false);
    const [checked6, setChecked6] = useState(false);
    const [checked7, setChecked7] = useState(false);
    const [conform, setConform] = useState(false);
    return (
        <View style={css.cont_white}>
            {
                conform &&
                <View style={styles.bg_modal}>
                    <View style={styles.modal}>
                        <Text style={styles.ttl_modal}>契約が完了しました！</Text>
                        <Text style={styles.txt_modal}>企業様とメッセージのやりとりが可能になります。メッセンジャーに移動して企業様へ挨拶をして下さい。</Text>
                        <View style={styles.btn_modal}>メッセンジャーに移動</View>
                    </View>
                </View>
            }
            <View style={styles.box}>
                <Pressable>
                    <Image source={btn_return} style={styles.btn_return} />
                </Pressable>
                <Text style={styles.ttl}>お仕事の最終確認</Text>
                <Text style={styles.subttl}>働きたい日時と相違ないですか？</Text>
                <Text style={styles.txt}>2023年5月17日(水) 6:00〜16:00 (休憩あり)</Text>
                <View style={styles.border}></View>
                <Text style={styles.subttl}>働く場所は確認しましたか？</Text>
                <Text style={styles.txt}>沖縄県那覇市前泊１丁目10-2</Text>
                <View style={styles.border}></View>
                <Text style={styles.subttl}>持ち物を確認しましたか？</Text>
                <Text style={styles.txt}>
                    ・持ち物がここに入ります。<br />
                    ・持ち物がここに入ります。<br />
                    ・持ち物がここに入ります。<br />
                    ・持ち物がここに入ります。
                </Text>
                <View style={styles.border}></View>
                <Text style={styles.subttl}>必要なスキルを確認しましたか？</Text>
                <View style={styles.subbox}>
                    <View style={styles.btn_blue}>オーダー</View>
                    <View style={styles.btn_blue}>接客</View>
                    <View style={styles.btn_blue}>はきはき</View>
                    <View style={styles.btn_blue}>体力</View>
                    <View style={styles.btn_blue}>笑顔</View>
                    <View style={styles.btn_blue}>コミュニケーション</View>
                    <View style={styles.btn_blue}>配膳</View>
                    <View style={styles.btn_blue}>キッチン</View>
                    <View style={styles.btn_blue}>清掃</View>
                </View>
                {
                    !conform &&
                    <View style={{position: 'initial'}}>
                        <View style={[styles.border, { marginTop: 60 }]}></View>
                        <Text style={styles.subttl}>働くための条件を確認しましたか？</Text>
                        <Text style={styles.txt}>
                            ・働く条件<br />
                            ・働く条件<br />
                            ・働く条件<br />
                            ・働く条件<br />
                            ・働く条件<br />
                            ・働く条件
                        </Text>
                        <View style={styles.border}></View>
                        <Text style={styles.subttl}>業務に関する書類をご確認下さい。</Text>
                        <Pressable>
                            <Image source={btn_pdf} style={styles.btn_pdf} />
                        </Pressable>
                        <View style={styles.border}></View>
                        <Text style={styles.subttl}>キャンセルポリシーをご確認下さい。</Text>
                        <Text style={styles.txt}>
                            業務開始の24時間前までに契約破棄を申し出た場合ペナルティポイントが2加算されます。<br />
                            業務開始の12時間前までに契約破棄を申し出た場合ペナルティポイントが3加算されます。<br />
                            業務開始の6時間前までに契約破棄を申し出た場合ペナルティポイントが4加算されます。<br />
                            業務開始まで残り6時間を切っている場合、ペナルティポイントが6加算されます。<br />
                            無断契約破棄の場合は損害賠償として一律8,000円の請求と当サービスの利用を停止させていただきます。
                        </Text>
                        <View style={[styles.border, { marginTop: 60 }]}></View>
                        <View style={[styles.box_check, styles.box_check1]}>
                            <CheckBox2 txt="はい" checked={checked1} onPress={() => setChecked1(!checked1)} />
                        </View>
                        <View style={[styles.box_check, styles.box_check2]}>
                            <CheckBox2 txt="はい" checked={checked2} onPress={() => setChecked2(!checked2)} />
                        </View>
                        <View style={[styles.box_check, styles.box_check3]}>
                            <CheckBox2 txt="はい" checked={checked3} onPress={() => setChecked3(!checked3)} />
                        </View>
                        <View style={[styles.box_check, styles.box_check4]}>
                            <CheckBox2 txt="はい" checked={checked4} onPress={() => setChecked4(!checked4)} />
                        </View>
                        <View style={[styles.box_check, styles.box_check5]}>
                            <CheckBox2 txt="はい" checked={checked5} onPress={() => setChecked5(!checked5)} />
                        </View>
                        <View style={[styles.box_check, styles.box_check6]}>
                            <CheckBox2 txt="はい" checked={checked6} onPress={() => setChecked6(!checked6)} />
                        </View>
                        <View style={[styles.box_check, styles.box_check7]}>
                            <CheckBox2 txt="はい" checked={checked7} onPress={() => setChecked7(!checked7)} />
                        </View>
                        <View style={[css.btn_yellow, styles.btn_yellow]} onStartShouldSetResponder={() => setConform(true)}>申し込みを確定
                        </View>
                    </View>
                }
            </View>
            <Footer num={1} />
        </View>
    );
}