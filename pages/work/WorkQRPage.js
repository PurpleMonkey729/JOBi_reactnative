import { Pressable, StyleSheet, Text, TextInput, View, Image, Picker } from 'react-native';
import { useState } from 'react';

import { css } from '../../style';
import Footer from '../../components/Footer';

import img_work from '../../assets/photo-worker.png';

const styles = StyleSheet.create({
});

export default function WorkQRPage(props) {
    return (
        <View style={css.cont_white}>
            <Footer num={3} />
        </View>
    );
}