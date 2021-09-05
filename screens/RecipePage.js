import React from "react";
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
import CustomRecipe from "../components/customRecipe";
const RecipePage = ({ route, navigation }) => {

    const [recipe, setRecipe] = React.useState(null);

    React.useEffect(() => {
        let { obj } = route.params;
        setRecipe(obj)
    })

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: COLORS.primary }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3,
                            marginVertical: SIZES.padding * 1.1
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{recipe?.recipe.label}</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderContent() {
        return (
            <CustomRecipe
                recipeImg={{ uri: recipe?.recipe.image }}
                cuisineType={recipe?.recipe.cuisineType}
                mealType={recipe?.recipe.mealType}
                calories={recipe?.recipe.calories}
                ingredients={ }
            ></CustomRecipe>
            // <View style={{
            //     justifyContent: "center",
            //     alignItems: "center",
            //     paddingTop: SIZES.padding * 2,
            // }}>
            //     <Image
            //         source={{ uri: recipe?.recipe.image }}
            //         style={{
            //             width: 250,
            //             height: 250,
            //             borderRadius: 40,
            //             alignContent: "center",
            //             marginBottom: SIZES.padding * 2,
            //         }}
            //     ></Image>

            //     {/* Recipe Information */}
            //     <ScrollView>
            //         <Text style={FONTS.h3}>
            //             Cuisine Type
            //         </Text>
            //         <View style={styles.infoContainer}>
            //             <Text style={FONTS.body4}>
            //                 {recipe?.recipe.cuisineType}
            //             </Text>
            //         </View>
            //         <Text style={FONTS.h3} >
            //             Meal Type
            //         </Text>
            //         <View style={styles.infoContainer}>
            //             <Text style={FONTS.body4}>
            //                 {recipe?.recipe.mealType}
            //             </Text>
            //         </View>
            //         <Text style={FONTS.h3} >
            //             Calories
            //         </Text>
            //         <View style={styles.infoContainer}>
            //             <Text style={FONTS.body4}>
            //                 {recipe?.recipe.calories}
            //             </Text>
            //         </View>
            //         <Text style={FONTS.h3} >
            //             Ingredients
            //         </Text>
            //         <View style={styles.infoContainer}>
            //             {recipe?.recipe.ingredients.map((obj) => {
            //                 return (
            //                     <Text style={FONTS.body4} >
            //                         {obj.text}
            //                     </Text>
            //                 )
            //             })}
            //         </View>
            //     </ScrollView>
            // </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    infoContainer: {
        paddingLeft: SIZES.padding * 2,
        backgroundColor: COLORS.secondary,
        width: 400
    }
})

export default RecipePage;