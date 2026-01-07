import React from "react";
import * as S from "./styles";

export function Card() {
  return (
    <S.PokemonCard type= "grass">
      <S.leftSide>
        <S.pokemonId></S.pokemonId>
        <S.pokemonName></S.pokemonName>
        {/* <S.ImageCardDetailsLeftSide source={} /> */}

        <S.PokemonContentType>
          <S.PokemonType type= "fire">
            <S.PokemonTypeText></S.PokemonTypeText>
          </S.PokemonType>
        </S.PokemonContentType>
      </S.leftSide>
      {/* <S.RightSide></S.RightSide> */}
    </S.PokemonCard>
  );
}
