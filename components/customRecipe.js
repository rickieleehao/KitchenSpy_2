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

export default function CustomRecipe({ recipeImg, cuisineType, mealType, calories, ingredients }) {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: SIZES.padding * 2,
        }}>
            <Image
                source={{ uri: recipeImg }}
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
                        {cuisineType}
                    </Text>
                </View>
                <Text style={FONTS.h3} >
                    Meal Type
                </Text>
                <View style={styles.infoContainer}>
                    <Text style={FONTS.body4}>
                        {mealType}
                    </Text>
                </View>
                <Text style={FONTS.h3} >
                    Calories
                </Text>
                <View style={styles.infoContainer}>
                    <Text style={FONTS.body4}>
                        {calories}
                    </Text>
                </View>
                <Text style={FONTS.h3} >
                    Ingredients
                </Text>
                <View style={styles.infoContainer}>
                    {/* {ingredients.map((obj) => {
                        return (
                            <Text style={FONTS.body4} >
                                {obj.text}
                            </Text>
                        )
                    })} */}
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