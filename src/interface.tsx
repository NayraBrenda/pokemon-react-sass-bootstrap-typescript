export interface Data {
  data: PokemonData;
}

export interface PokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResults[];
}

export interface PokemonResults {
  name: string;
  url: string;
}

export interface PokemonDetailsData {
  data: PokemonDetails;
}
export interface PokemonDetails {
  abilities: PokemonAbilities[];
  moves: PokemonMoves[];
  name: string;
  sprites: PokemonSprites;
}

export interface PokemonSpritesOtherItem {
  front_default: string;
}

export interface PokemonSpritesOther {
  dream_world: PokemonSpritesOtherItem;
}

export interface PokemonSprites {
  front_default: string;
  other: PokemonSpritesOther;
}

export interface PokemonAbilities {
  ability: PokemonResults;
}

export interface PokemonMoves {
  move: PokemonResults;
}

export interface PokemonMovesDetails {
  accuracy: number;
  power: number;
}
