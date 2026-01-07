import styled, {css} from 'styled-components/native';
import themes from '../../global/styles/themes';


type PokemonType = {
  type: string
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  ${({ theme, type }) => css `
    background-color: ${themes.colors.backgroundCard[type]};
    border-radius: 10px;
    margin-top: 10px;
    flex-direction: row;
    padding: 20px;

  
  `}
`

export const leftSide = styled.View`
  width: 50%;
  position: relative;
`

export const pokemonId = styled.Text`
  ${({ theme }) => css ` 
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: ${themes.colors.light_text};
  `} 
`

export const pokemonName = styled.Text`
  ${({ theme }) => css ` 
  font-weight: bold;
  font-size: 25px;
  line-height: 31px;
  margin-top: 5px;
  text-transform: capitalize;
  color: ${themes.colors.text_white};
  `} 
`

export const PokemonContentType = styled.View`  
  flex-direction: row;
`
export const PokemonType = styled.View<PokemonType>`
  ${({ theme, type }) => css `
  background-color: ${themes.colors.boxType[type]};
  border-radius: 4px;
  padding: 5px ;
  height: 25px;
  width: 65px;
  margin-left: 5px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
  `}
`
export const PokemonTypeText = styled.Text`
  ${({ theme }) => css ` 
  font-weight: 500; 
  font-size: 12px;
  line-height: 14px;
  color: ${themes.colors.text_white};
  text-transform: capitalize;
  `} 
`