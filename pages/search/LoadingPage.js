import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

import { css } from '../../style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const AnimCircle = props => {
    const zoom = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
    useEffect(() => {
        setTimeout(() => {Animated.loop(
            Animated.sequence([
                Animated.timing(zoom, {
                    toValue: 1.75,
                    duration: '900rem',
                }),
                Animated.timing(zoom, {
                    toValue: '1rem',
                    duration: '900rem',
                })
            ])
        ).start();
        }, props.delay);
        
    }, [zoom]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                scale: zoom, // Bind opacity to animated value
            }}>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    box: {
        marginTop: '158rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        width: '100rem',
        height: '100rem',
    },
    circle: {
        position: 'absolute',
        width: '12rem',
        height: '12rem',
        backgroundColor: '#2C92D2',
        borderRadius: '50%',
    },
    circle0: {
        top: '0rem',
        left: '37rem',
    },
    circle1: {
        top: '10rem',
        left: '63rem',
    },
    circle2: {
        top: '30rem',
        left: '79rem',
    },
    circle3: {
        top: '53rem',
        left: '73rem',
    },
    circle4: {
        top: '70rem',
        left: '55rem',
    },
    circle5: {
        top: '73rem',
        left: '30rem',
    },
    circle6: {
        top: '60rem',
        left: '8rem',
    },
    circle7: {
        top: '35rem',
        left: '0rem',
    },
    circle8: {
        top: '10rem',
        left: '10rem',
    },
    txt_en: {
        fontSize: '28rem',
        color: '#2C92D2',
        marginTop: '88rem',
        textAlign: 'center',
        fontWeight: '600rem',
    },
    txt_jp: {
        marginTop: '7rem',
        textAlign: 'center',
        fontSize: '15rem',
    }
});

export default function LoadingPage(props) {
    const array = Array.from(Array(9).keys()).map(el=>'circle'+el);
    return (
        <View style={css.cont_white_header}>
            <Header />
            <View style={styles.box}>
                {array.map((item, index) =>
                    <AnimCircle style={{...styles.circle, ...styles[item]}} delay={index*200}>
                    </AnimCircle>
                )}
            </View>
            <Text style={styles.txt_en}>Loading</Text>
            <Text style={styles.txt_jp}>求人を読み込んでいます</Text>
            <Footer num={1} />
        </View>
    );
}