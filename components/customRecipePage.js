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

export default function RecipeContentCustom(props) {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: SIZES.padding * 2,
        }}>
            <Image
                source={{ uri: props.recipeImg }}
                style={{
                    width: 300,
                    height: 300,
                    borderRadius: 30,
                    alignContent: "center",
                }}
            ></Image>

            {/* Recipe Information */}
            <ScrollView>
                <Text style={FONTS.h3}>
                    Cuisine Type
                </Text>
                <View style={styles.infoContainer}>
                    <Text style={FONTS.body4}>
                        {props.cuisineType}
                    </Text>
                </View>
                <Text style={FONTS.h3} >
                    Meal Type
                </Text>
                <View style={styles.infoContainer}>
                    <Text style={FONTS.body4}>
                        {props.mealType}
                    </Text>
                </View>
                <Text style={FONTS.h3} >
                    Calories
                </Text>
                <View style={styles.infoContainer}>
                    <Text style={FONTS.body4}>
                        {props.calories}
                    </Text>
                </View>
                <Text style={FONTS.h3} >
                    Ingredients
                </Text>
                <View style={styles.infoContainer}>
                    {props.ingredients?.map((obj) => {
                        return (
                            <Text style={FONTS.body4} >
                                {obj.text}
                            </Text>
                        )
                    })}
                </View>
            </ScrollView>
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