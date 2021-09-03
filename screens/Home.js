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

import { icons, images, SIZES, COLORS, FONTS } from '../constants';

import FlatButton from '../components/button';

const Home = ({ navigation }) => {

    const containers = [
        {
            id: 1,
            name: "Fridge",
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
    const [selectedContainer, setSelectedContainer] = React.useState(null)

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

                <View style={{ width: 300, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "65%",
                            backgroundColor: COLORS.secondary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                    </View>
                </View>
            </View>
        )
    }

    function renderContainer() {
        const renderItem = ({ item }) => {
            return (
                <FlatButton
                    text={item.name}

                ></FlatButton>

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

    // function renderItem() {
    //     return (
    //         <View style={{ padding: SIZES.padding * 2 }}>
    //             <Text style={{ ...FONTS.h1 }}>Contained Items</Text>
    //             <FlatList
    //                 data={categories}
    //                 horizontal
    //                 showsHorizontalScrollIndicator={false}
    //                 keyExtractor={item => `${item.id}`}
    //                 renderItem={renderItem}
    //                 contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
    //             />
    //         </View>
    //     )
    // }

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
            {/* {renderItem()} */}
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
    }
})

export default Home;