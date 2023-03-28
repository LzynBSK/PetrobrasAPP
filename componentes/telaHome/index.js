import React, { useState } from 'react';
import { TextInput, Text, View, Button, SafeAreaView, StyleSheet, onChangeText, TouchableOpacity } from 'react-native';

import estilo from './estilo';

// export default function Home (props) {
//   return (
  export default function Home (props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      // lógica de login aqui
    };
    


    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtCadastro}>
      Nome do Usuário
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.enterButton}>
    <Text>Entrar </Text>
</TouchableOpacity>
    </SafeAreaView>


);
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  txtCadastro:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15
  },
  enterButton:{
    height: 35, 
    marginTop: 5,
    marginLeft: 310,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor:'#AB76FA',
    borderRadius:   10,
    width: 80,
    
  }
});
