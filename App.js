import { NavigationContainer } from '@react-navigation/native';
import Home from './componentes/telaHome/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import TelaEntypo from './componentes/telaIcons/index';
import TelaFontA from './componentes/telaFontA/index';
import TelaAntDesign from './componentes/telaAntD/index';
import TelaFontA5 from './componentes/telaFontA5/index';
import TelaIonicons from './componentes/telaIonicons/index';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
      <ImageBackground source={require('./assets/marca_marcacolorida_colorida.jpg')} style={{width: '100%', height: '100%'}}></ImageBackground>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Entypo" component={TelaEntypo}/>
        <Drawer.Screen name="FontAwesome" component={TelaFontA}/>
        <Drawer.Screen name="AntDesign" component={TelaAntDesign}/>
        <Drawer.Screen name="FontAwesome5" component={TelaFontA5}/>
        <Drawer.Screen name="Ionicons" component={TelaIonicons}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#008442',
  },
  drawerHeader: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC42C',
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});


