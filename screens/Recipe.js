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
                        paddingLeft: SIZES.padding * 1,
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
                <View name={key}
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
                        {obj.recipe.label}
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
                            key={key}
                            source={{ uri: obj.recipe.image }}
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
                                {obj.recipe.dishType}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
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