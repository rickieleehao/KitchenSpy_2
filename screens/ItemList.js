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

const ItemList = ({ route, navigation }) => {

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
                        left: -20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: SIZES.padding,
                        paddingTop: SIZES.padding,
                    }}
                >
                    <View
                        style={{
                            height: 40,
                            width: 250,
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.secondary
                        }}
                    >
                        <Text>Add item</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderContent() {
        return (
            <View>
                <Text>hi</Text>
            </View>
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

export default ItemList;