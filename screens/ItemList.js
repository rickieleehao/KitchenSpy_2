import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList,
    Alert,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { icons, COLORS, SIZES, FONTS, items } from '../constants'

const ItemList = ({ navigation }) => {

    const products = [
        {
            id: 1,
            image: items.almond,
            name: "almond",
            quantity: 0,
        },
        {
            id: 2,
            image: items.almonds,
            name: "almonds",
            quantity: 0,
        },
        {
            id: 3,
            image: items.anise,
            name: "anise",
            quantity: 0,
        },
        {
            id: 4,
            image: items.bay_leaf,
            name: "bay leaf",
            quantity: 0,
        },
        {
            id: 5,
            image: items.bread,
            name: "bread",
            quantity: 0,
        },
        {
            id: 6,
            image: items.butter,
            name: "butter",
            quantity: 0,
        },
        {
            id: 7,
            image: items.cake,
            name: "cake",
            quantity: 0,
        },
        {
            id: 8,
            image: items.cereal,
            name: "cereal",
            quantity: 0,
        },
        {
            id: 9,
            image: items.cheese,
            name: "cheese",
            quantity: 0,
        },
        {
            id: 10,
            image: items.chili_powder,
            name: "chili powder",
            quantity: 0,
        },
        {
            id: 11,
            image: items.cinnamon,
            name: "cinnamon",
            quantity: 0,
        },
        {
            id: 12,
            image: items.condense_milk,
            name: "condense milk",
            quantity: 0,
        },
        {
            id: 13,
            image: items.cookie,
            name: "cookie",
            quantity: 0,
        },
        {
            id: 14,
            image: items.cooking_wine,
            name: "cooking wine",
            quantity: 0,
        },
        {
            id: 15,
            image: items.egg,
            name: "egg",
            quantity: 0,
        },
        {
            id: 16,
            image: items.fennel,
            name: "fennel",
            quantity: 0,
        },
        {
            id: 17,
            image: items.flour,
            name: "bay leaf",
            quantity: 0,
        },
        {
            id: 18,
            image: items.instant_noodle,
            name: "instant noodle",
            quantity: 0,
        },
        {
            id: 19,
            image: items.ketchup,
            name: "ketchup",
            quantity: 0,
        },
        {
            id: 20,
            image: items.milk,
            name: "milk",
            quantity: 0,
        },
        {
            id: 21,
            image: items.oil,
            name: "oil",
            quantity: 0,
        },
        {
            id: 22,
            image: items.pasta,
            name: "pasta",
            quantity: 0,
        },
        {
            id: 23,
            image: items.pepper,
            name: "pepper",
            quantity: 0,
        },
        {
            id: 24,
            image: items.rice,
            name: "rice",
            quantity: 0,
        },
        {
            id: 25,
            image: items.salt,
            name: "salt",
            quantity: 0,
        },
        {
            id: 26,
            image: items.sesame,
            name: "sesame",
            quantity: 0,
        },
        {
            id: 27,
            image: items.soft_drink,
            name: "soft drink",
            quantity: 0,
        },
        {
            id: 28,
            image: items.soy_sauce,
            name: "soy sauce",
            quantity: 0,
        },
        {
            id: 29,
            image: items.sugar,
            name: "sugar",
            quantity: 0,
        },
        {
            id: 30,
            image: items.vinegar,
            name: "vinegar",
            quantity: 0,
        },
    ]

    const [addedProducts, setAddedProducts] = useState([]);

    useEffect(() => {
        getValue();
    }, [])

    const getValue = () => {
        try {
            const value = AsyncStorage.getItem('ProductData');
            if (value !== null) {
              setAddedProducts(JSON.parse(value));
            }
          } catch (error) {
            console.log(error);
          }
    }

    const [product, setProduct] = React.useState(products)

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

    const [addProduct, setAddProduct] = useState({id: 0, image: '', name: '', quantity: 0});
    

    function addItem(item) {
        
        const storeItem = async (value) => {
            try {
                 await AsyncStorage.setItem('ProductData',JSON.stringify(value));
              } catch (e) {
                console.log(e);
              }
        }

        // Alert.alert(JSON.stringify(item));
        // const tempAddProduct = {id: item.id, image: item.image, name: item.name, quantity: item.quantity}
        setAddProduct({id: item.id, image: item.image, name: item.name, quantity: 0});
        let exists = false;
        for(let i = 0; i > addedProducts.length; i++) {
            if(addedProducts[i].id == item.id) {
                exists = true;
                addedProducts[i].quantity+=1;
                break;
            }
        }
        if(!exists) {
            addProduct.quantity = 1;
            addedProducts.push(addProduct);
        }
        storeItem(addedProducts);   
    }

    

    function renderContent() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity style={styles.list} 
                onPress={() => {
                    // Alert.alert(JSON.stringify(item)); 
                    // Alert.alert("name: " + item.name + "\nquantity: " + item.quantity);
                    addItem(item);
                    // Alert.alert(JSON.stringify(addedProducts));
                }}
                >
                    <View>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.textBox}>
                            <Text style={styles.itemDetails}>{item.name}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }

        

        
    
        return (
            <FlatList
                data={product}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}>
            </FlatList>
        );
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
    },
    list: {
        borderWidth: 2,
        borderRadius: 90,
        width: '60%',
        height: 250,
        left: 90,
        alignItems: "center",
        marginVertical: SIZES.padding,
        backgroundColor: COLORS.secondary,

    },
    itemBox: {
        flexDirection: "row",
    },
    textBox: {
        alignItems: "center",
    },
    itemImage: {
        width: 200,
        height: 200,
        borderRadius: 70,
    },
    itemDetails: {
        fontSize: 20,
    }
})

export default ItemList;