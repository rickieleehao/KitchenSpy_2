import React, { useState } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,

} from "react-native";

import { icons, COLORS, SIZES, FONTS } from '../constants'

const Profile = () => {

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
                    }} >Profile</Text>
            </View>
        )
    }

    function renderContent() {
        const [{ textName, textEmail }, setText] = useState('');
        return (
            <View style={{ margin: 30 }}>
                <Text style={{ height: 50 }}></Text>
                <Text style={styles.text}>Username</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="None"
                        onChangeText={textName => setText(textName)}
                        defaultValue={textName}
                    />
                </View>
                <Text style={{ height: 50 }}></Text>
                <Text style={styles.text}>Email</Text>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder="None"
                        onChangeText={textEmail => setText(textEmail)}
                        defaultValue={textEmail}
                    />
                </View>
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
        backgroundColor: COLORS.lightGray4,
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
    text: {
        textAlign: "center",
        fontFamily: FONTS.h2.fontFamily,
        fontSize: SIZES.h2,
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
        height: 40
    },
    input: {
        textAlign: "center",
        fontFamily: FONTS.h2.fontFamily,
        fontSize: SIZES.h2,
    },
    inputView: {
        borderWidth: 2,
        borderColor: COLORS.black,
    },
})

export default Profile;