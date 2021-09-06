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

export default function CustomRecipe(props) {
    return (
        <View name={props.key}
            style={{
                paddingTop: SIZES.padding * 2,
                paddingLeft: SIZES.padding * 2,
                width: 300,
            }}
        >
            <Text
                style={
                    FONTS.h3
                }
            >
            </Text>
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 200,
                    marginBottom: 30,
                    paddingTop: 10,
                    marginLeft: SIZES.padding * 2,
                    display: "flex",
                }}
                onPress={() => navigation.navigate("RecipePage", {
                    obj
                })}
            >
                <Image
                    key={props.key}
                    source={{ uri: props.recipeImg }}
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 30,
                    }}
                ></Image>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        height: 50,
                        width: SIZES.width * 0.3,
                        backgroundColor: COLORS.white,
                        borderTopRightRadius: SIZES.radius,
                        borderBottomLeftRadius: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={FONTS.body3}>
                        {props.dishType}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    infoContainer: {
        paddingLeft: SIZES.padding * 2,
        backgroundColor: COLORS.secondary,
        width: 400
    }
})