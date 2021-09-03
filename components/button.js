import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";

import { icons, COLORS, SIZES, FONTS } from '../constants'

export default function FlatButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ zIndex: 999 }}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius,
        borderColor: COLORS.white,
        borderWidth: 2,
        marginLeft: 14,
        marginRight: 14,
        top: -17,
    },
    buttonText: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        color: COLORS.white,
        fontSize: SIZES.body3
    }
})