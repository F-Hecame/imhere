import { GearIcon, MagnifyingGlassIcon } from 'phosphor-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, TextInputComponent, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}> 

        <Text style={styles.logo}>Pokedéx</Text>
        <GearIcon size={32} color='#fff'/>

      </View>
      <Text style={styles.info}>Encontre seu pokemon pesquisando pelo nome ou por seu Código Pokédex.</Text>

      <View style={styles.inputContainer}>  
      <MagnifyingGlassIcon size={30} color='#fff'/>
      <TextInput
      style={styles.input}
        placeholder="Pesquisar..."
        placeholderTextColor="#fff"
      />
      </View>
      <View  style={styles.content}>
      </View>
      <View style={styles.footer}>
        <Pressable> 
          <Text>Pesquisar Pokémon</Text>
        </Pressable>
      </View>
    </View>

    
  );
}

export const styles = StyleSheet.create({ 
  container: {
    flex: 1, 
    backgroundColor: '#ee5454ff',
  },
  header: { 
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
   },
   info:{
    color: '#fff',
    fontSize: 18,
    marginTop: 20, 
    paddingHorizontal: 20,
   },
   inputContainer:{
    flexDirection: 'row',
    gap: "5%",
    backgroundColor: '#f98e80',
    margin: 20,
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20, 
    borderRadius: 8,
    marginTop: 20,
   },
   input:{
    width: '100%',
   },
   content:{
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
   },
   footer:{
    borderWidth: 1,
    borderColor: '#fffdfdff',
    backgroundColor: '#ffffffff',
  
   }
});