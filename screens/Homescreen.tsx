import { View } from "react-native";
import { Header, Search, Category } from "../components";
import { useStateContext } from "../context";

const Homescreen = () => {
    const { categories }: any = useStateContext();
    return (
        <View>
            <Header />
            <Search />
            <Category items={categories} />
        </View>
    )
}

export default Homescreen;