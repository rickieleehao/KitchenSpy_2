import React, {useEffect, useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { icons, images, SIZES, COLORS, FONTS, items } from '../constants';

const datas = [];

const Home = ({ navigation }) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getValue();
        // AsyncStorage.clear(); 
    })

    const getValue = async() => {
        if (!AsyncStorage.getItem("ProductData")) {
            await AsyncStorage.setItem("ProductData", JSON.stringify(datas));
        }

        try {
            const value = await AsyncStorage.getItem('ProductData');
            // Alert.alert(value);
            if (value !== null) {
                setProduct(JSON.parse(value));
                
            }
          } catch (error) {
            console.log(error);
          }
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50, backgroundColor: COLORS.primary, zIndex: 200 }}>
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


    function renderData() {
        const renderItem = ({ item }) => {
            return (
                <View style={{justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity style={styles.list}>
                    <Image source={item.image} style={styles.productIcon}/>
                    <Text style={FONTS.body2}>
                        {item.name}
                        {"\n"}
                        {item.quantity}
                    </Text>
                    
                </TouchableOpacity>
                </View>
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
        height: 100,
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        width: 300,
        marginVertical: 10, 
        backgroundColor: COLORS.lightGray3,
        flexDirection: 'row',
    },
    productIcon: {
        width: 80,
        height: 80,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 40,
    },
})

export default Home;
