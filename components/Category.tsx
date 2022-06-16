import { FC, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { elevation } from "../constants/styles";
import { categories, category } from "../types";

const Category: FC<category> = ({ imageName, imageUri, onPressCategoryItem, active }) => {
    

    return (
        <TouchableOpacity onPress={onPressCategoryItem}>
            <View style={[styles.card, styles.elevation, active ? {backgroundColor: 'red'} : {backgroundColor: '#9ef'}]}>
                <View style={styles.imageContainer}>
                    <Image 
                    style={styles.image} 
                    source={imageUri}
                    />
                </View>
                <Text style={styles.font}>{imageName}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

const GridCategory: FC<categories> = ({ items }) => {
    const [term, setTerm] = useState(''); 
    return (
        <View style={styles.container}>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={items}
            keyExtractor={(item) => item?.name}
            renderItem={({ item, index }) => (
                <Category 
                    imageName={item?.name}
                    imageUri={item?.uri}
                    index={index}
                    active={term === item?.name}
                    onPressCategoryItem={() => setTerm(item?.name)}
                />
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        marginHorizontal: 25,
        flexDirection: 'row',
    },
    card: {
        width: 70,
        marginRight: 10,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    elevation,
    image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginBottom: 5,

    },
    font: {
        fontWeight: '400'
    }
})
export default GridCategory;