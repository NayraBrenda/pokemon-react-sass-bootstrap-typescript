import axios from "axios";
import styles from "./PokemonInfo.module.sass";
import { PokemonDetails } from "../../interface";
import PokemonMoves from "./PokemonMoves/PokemonsMoves";

interface IProps {
  pokemon: PokemonDetails;
}

const PokemonInfo = ({ pokemon }: IProps) => {
  const img = pokemon?.sprites?.other?.dream_world?.front_default;
  const abilities = pokemon?.abilities;

  return (
    <>
      <img src={img} className={styles.PokemonImage} />
      {pokemon && <h1 className={styles.PokemonName}>{pokemon?.name}</h1>}
      <div>
        {pokemon && <h2 className={styles.AbilitiesTitle}>Habilidades:</h2>}
        {abilities?.map((item) => {
          return (
            <div className={styles.Abilities} key={item.ability.name}>
              {item?.ability.name}
            </div>
          );
        })}
      </div>

      {pokemon && <PokemonMoves pokemon={pokemon} />}
    </>
  );
};

export default PokemonInfo;
