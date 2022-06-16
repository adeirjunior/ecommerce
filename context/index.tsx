import { createContext, useContext, useState } from "react";
import type { FC } from "react";



const Context = createContext({});

export const StateContext: FC = ({ children }) => {
    const [categories, setCategories]: object[] = useState([
        {name: 'burger', uri: require('./../assets/category-icons/burger.png')},
        {name: 'cake', uri: require('./../assets/category-icons/cake.png')},
        {name: 'pasta', uri: require('./../assets/category-icons/pasta.png')},
        {name: 'pizza', uri: require('./../assets/category-icons/pizza.png')},
        {name: 'smoothies', uri: require('./../assets/category-icons/smoothies.png')},
        {name: 'steak', uri: require('./../assets/category-icons/steak.png')}
    ])
    return (
        <Context.Provider
        value={{
            categories
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
