import React from "react";
import 'react-native-gesture-handler'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";



//importar las rutas de los archivos.js de la carpeta de navegación
import Home from "./Navegacion/Home";
import Home2 from "./Navegacion/Home2";
import HomeBtn from "./Navegacion/HomeBtn";


//crear una variable para utilizar el CreateBottom
const TabNav = createBottomTabNavigator();

function Tabs(){
    return(
        <TabNav.Navigator>
            {/* Para llamar a las pantallas en la navegación tab */}
            <TabNav.Screen name="Pantalla Principal" component={Home} initialRouteName="Home" screenOption/>
            <TabNav.Screen name="Pantalla Secundaria" component={Home2}/>
            <TabNav.Screen name="Pantalla" component={HomeBtn}/>
        </TabNav.Navigator>
    );
}

export default function Navegacion() {
    return(   
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    );
}