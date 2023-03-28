import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function TelaAntDesign() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
      <AntDesign name="areachart" size={24} color="#C340FE" style={styles.icon}/>
        <Text style={styles.iconText}>Areachart</Text>
      </View>
      <View style={styles.iconContainer}>
      <AntDesign name="shoppingcart" size={24} color="#00F5FF" style={styles.icon}/>
        <Text style={styles.iconText}>Shoppingcart</Text>
      </View>
      <View style={styles.iconContainer}> 
      <AntDesign name="picture" size={24} color="#FFA200" style={styles.icon}/>
        <Text style={styles.iconText}>Picture</Text>
      </View>
      <View style={styles.iconContainer}>
      <AntDesign name="team" size={24} color="#2742E0" style={styles.icon}/>
        <Text style={styles.iconText}>Team</Text>
      </View>
      <View style={styles.iconContainer}>
      <AntDesign name="qrcode" size={24} color="black" style={styles.icon}/>
        <Text style={styles.iconText}>QRcode</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#1C7A3C',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10,
  },
  iconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#F2C450',
    borderRadius: 50,
    height: 50,
    width: 200,
    marginTop: 10

    
  },
  iconText: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
