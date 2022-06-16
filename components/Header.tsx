import { View, Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.h2}>Grab your</Text>
            <Text style={styles.h1}>Delicious meal!</Text>
        </View>
    )
} 


const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        marginHorizontal: 25
    },
    h2: {
        fontSize: 35,
        fontWeight: '300'
    },
    h1: {
        fontSize: 35,
        fontWeight: '500'
    }
})

export default Header;