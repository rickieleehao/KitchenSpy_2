import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';

const Home = ({ navigation }) => {
    const [product, setProducts] = React.useState()

    function renderData() {
        if (!AsyncStorage.getItem("ProductData")) {
            AsyncStorage.setItem("ProductData", "");
        }

        AsyncStorage.getItem("ProductData")
            .then((value) => {
                setProducts(value);
            })

    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, backgroundColor: COLORS.primary }}>
                <Text
                    resizeMode="contain"
                    style={{
                        width: 130,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center',
                        textAlignVertical: "center",
                        fontSize: SIZES.h2,
                        color: COLORS.white,
                    }} >KitchenSpy</Text>
            </View>
        )
    }

    function renderContainer() {
        return (
            <View style={{ width: 415, height: 40, backgroundColor: COLORS.secondary, alignItems: "center", paddingVertical: SIZES.padding * 0.5 }}>
                <Text style={FONTS.h2}>
                    Contained Items
                </Text>
            </View>
        )
    }

    function renderItem() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={styles.list}>
                    <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
                        {item}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <FlatList
                data={product}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
            >
            </FlatList>
        )
    }

    function renderPlusButton() {
        return (
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => {
                    navigation.navigate("ItemList")
                }}
            >
                <Image source={icons.plus} style={{ width: '60%', height: '60%' }}></Image>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderContainer()}
            {renderData()}
            {renderItem()}
            {renderPlusButton()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
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
    },
    floatingButton: {
        backgroundColor: COLORS.secondary,
        width: 55,
        height: 55,
        position: 'absolute',
        bottom: 15,
        right: 25,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        borderWidth: 1,
        height: 80,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default Home;
