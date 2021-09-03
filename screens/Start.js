import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    SafeAreaView,
} from 'react-native';

import { icons, images, SIZES, COLORS, FONTS } from '../constants';

const Start = ({ navigation }) => {
    const switchToHome = () => {
        navigation.navigate("Home")
    };


    function renderLoadingScreen() {
        setTimeout(switchToHome, 1500);
        return (
            <View
                style={{
                    width: 420,
                    height: 450,
                    alignItems: "center",
                    marginTop: 60,
                }}
            >
                <Image
                    source={icons.logo}
                    style={{
                        width: "60%",
                        height: "100%"
                    }}
                    resizeMode="contain"
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderLoadingScreen()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Start;
