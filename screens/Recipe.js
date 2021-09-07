import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions,
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import CustomRecipe from '../components/customRecipe';

const { width } = Dimensions.get("window");
const height = width * 0.6;

const Recipe = ({ navigation }) => {

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, backgroundColor: COLORS.primary }}>
                <Text
                    resizeMode="contain"
                    style={{
                        width: 120,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center',
                        textAlignVertical: "center",
                        fontSize: SIZES.h2,
                        color: COLORS.white,
                    }} >Recipes</Text>
            </View>
        )
    }

    function renderRecipes() {
        const [recipes, setRecipes] = useState([])

        useEffect(() => {
            axios.get('https://api.edamam.com/api/recipes/v2?type=public&q=American&app_id=7cd0fc3e&app_key=d2a2ae66c178d79ec7ba1b66174b9614')
                .then(res => {
                    console.log(res.data.hits)
                    setRecipes(res.data.hits)
                })
                .catch(err => {
                    console.log(err)
                })
        })

        let viewAPI = recipes.map((obj, key) => {
            return (
                <CustomRecipe
                    key={key}
                    recipeImg={obj.recipe.image}
                    dishType={obj.recipe.dishType}
                    onPress={() => { navigation.navigate("RecipePage", { obj }) }}
                >
                </CustomRecipe>
            )
        });

        return (
            <ScrollView>
                {viewAPI}
            </ScrollView>
        )
    }

    return (
        <SafeAreaView style={style.mainContainer}>
            {renderHeader()}
            {renderRecipes()}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    container: {
        marginTop: 50,
        width,
        height
    },
    scroll: { width, height },
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
        paddingTop: 10,
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText: {
        fontSize: (width / 30),
        color: '#888',
        margin: 3
    },
    pagingActiveText: {
        fontSize: (width / 30),
        color: '#fff',
        margin: 3
    }
})

export default Recipe;