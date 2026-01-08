import { GearIcon, MagnifyingGlassIcon } from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputComponent,
  View,
} from "react-native";
import api from "../service/api";
import { Card, Pokemon, PokemonType } from "../components/card";


// type PokemonType={
//   type: string
// }

// type Pokemon={
//   name: string
//   url: string
//   id: number
//   types: PokemonType[]
// }

type Request = {
  id: number
  types: PokemonType[]

}

export default function Index() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    async function getAllPokemon() {
      const response = await api.get("/pokemon");
      const { results } = response.data;

      const payloadPokemons = await Promise.all(
        results.map(async (pokemon: Pokemon) => {
          const { id, types } = await getMoreInfo(pokemon.url);
          return{
            name: pokemon.name,
            id,
            types

          }
        })
      );
        setPokemons(payloadPokemons)
    }

    getAllPokemon();
  }, []);
  

  async function getMoreInfo(url: string): Promise<Request>{
    const response = await api.get(url)
    const {id, types} = response.data
    return{
      id, types
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Pokedéx</Text>
        <GearIcon size={32} color="#fff" />
      </View>
      <Text style={styles.info}>
        Encontre seu pokemon pesquisando pelo nome ou por seu Código Pokédex.
      </Text>

      <View style={styles.inputContainer}>
        <MagnifyingGlassIcon size={30} color="#fff" />
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          placeholderTextColor="#fff"
        />
      </View>
      <View style={styles.content}>
        <FlatList 
          data={pokemons}
          keyExtractor={pokemon => pokemon.id.toString()}
          renderItem={({item : pokemon}) =>
          
          <Card data={pokemon} />}
        />
      </View>
     
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f76a6aff",
   
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  info: {
    color: "#fff",
    fontSize: 18,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: "row",
    gap: "5%",
    backgroundColor: "#f98080ff",
    margin: 20,
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  input: {
    width: "100%",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 20,
  },
  footer: {
    borderWidth: 1,
    height: "11%",
    borderColor: "#b3b2b2ff",
    backgroundColor: "#ffffffff",
  },
  bottonFooter: {
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
    height: 50,
    borderRadius: 3,
    paddingHorizontal: 10,
    backgroundColor: "#f76a6aff",
  },

});
