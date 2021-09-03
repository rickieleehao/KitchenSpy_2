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
import FlatButton from '../components/button';

const Home = ({ navigation }) => {
    const containers = [
        {
            id: 1,
            name: "Fridge",
            img: icons.back,
            containData: [

            ]
        },
        {
            id: 2,
            name: "Freezer",
            containData: [

            ]
        },
        {
            id: 3,
            name: "Kitchen",
            containData: [

            ]
        }
    ]

    const [container, setContainer] = React.useState(containers)

    const getValue = () => {
        AsyncStorage.getAllKeys()
            .then((value) => {
                setItems(value);
            })
    }


    const [items, setItems] = React.useState(null)

    const [selectedContainer, setSelectedContainer] = React.useState(null)

    function onSelectCategory(category) {
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
        const renderItem = ({ item }) => {
            return (
                // <FlatButton
                //     text={item.name}
                //     onPress={navigation.navigate("ItemList")}
                // ></FlatButton>

                <TouchableOpacity style={{ width: 100, height: 30, top: -20, backgroundColor: "white" }}>
                    <Text style={{ width: "100%", height: "100%" }}>
                        i
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ height: 45, backgroundColor: COLORS.primary, paddingLeft: SIZES.padding, paddingBottom: SIZES.padding }}>
                <FlatList
                    data={container}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 2
                    }}
                >
                </FlatList>
            </View>
        )
    }

    function renderItem() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={styles.list}>
                    <Text style={{ textAlign: "center", textAlignVertical: "center" }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <FlatList
                data={container}
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
            {/* {Tabs()} */}
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

// <TouchableOpacity
                //     style={{
                //         paddingHorizontal: SIZES.padding * 1.5,
                //         width: 100,
                //         height: 100,
                //         backgroundColor: 'red'
                //     }}
                //     onPress={() => {
                //         navigation.navigate("ItemList")
                //     }}
                // >
                //     <View
                //         style={{
                //             width: 100,
                //             height: 30,
                //             top: -15,
                //             backgroundColor: COLORS.lightGray3,
                //             alignItems: 'center',
                //             justifyContent: 'center',
                //             borderRadius: SIZES.radius,
                //             borderColor: COLORS.white,
                //             borderWidth: 2,
                //         }}
                //     >
                //         <Text
                //             style={{
                //                 width: "100%",
                //                 height: "100%",
                //                 backgroundColor: COLORS.primary,
                //                 alignItems: 'center',
                //                 justifyContent: 'center',
                //                 textAlignVertical: 'center',
                //                 textAlign: 'center',
                //                 borderRadius: SIZES.radius,
                //                 color: COLORS.white,
                //                 fontSize: SIZES.body3
                //             }}>
                //             {item.name}
                //         </Text>
                //     </View>
                // </TouchableOpacity>