import { StyleSheet, Text, View, Image, } from 'react-native';

import TelaIfood from './TelaIfood'
import TelaLogin from './TelaLogin'
import TelaProdutos from './TelaProdutos'
import TelaInicial from './TelaInicial'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();


export default  function App() {
  return (
    
    <NavigationContainer>
    <Drawer.Navigator InitialRouteName="Home">

    <Drawer.Screen name ="Home" component={TelaInicial} />
    <Drawer.Screen name ="Produtos" component={TelaProdutos} />
    <Drawer.Screen name ="Login" component={TelaLogin} />
    <Drawer.Screen name ="Ifood" component={TelaIfood} />

    </Drawer.Navigator>
    </NavigationContainer>

  );
}
