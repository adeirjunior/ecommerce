import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from "../constants/styles";

const Search = () => {
    return (
        <View style={[styles.search, styles.elevation]}>
            <FontAwesome name="search" size={25} />
            <TextInput placeholder="Search..." placeholderTextColor="#000" style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        maxWidth: '70%',
        marginHorizontal: 25,
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: '#fff',
        overflow: 'hidden',
        padding: 10,
        borderRadius: 10,
    },
    elevation,
    input : {
        fontSize: 20,
        marginLeft: 10
    }
})

export default Search;