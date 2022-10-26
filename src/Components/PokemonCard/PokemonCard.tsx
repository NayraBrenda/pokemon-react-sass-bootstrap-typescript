import axios from "axios";
import { Col, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./PokemonCard.module.sass";
import ReactLoading from "react-loading";
import {
  PokemonDetailsData,
  PokemonDetails,
  PokemonResults,
} from "../../interface";

interface IProps {
  pokemon: PokemonResults;
  handleClick(pokemonDetails: PokemonDetails | undefined): void;
}

function PokemonCard({ pokemon, handleClick }: IProps) {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    axios
      .get(pokemon?.url)
      .then((resp: PokemonDetailsData) => {
        setPokemonDetails(resp.data);
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  const image = pokemonDetails?.sprites ? (
    <img src={pokemonDetails?.sprites.front_default} />
  ) : (
    <ReactLoading type="spin" color="#ccc" height={100} width={100} />
  );

  return (
    <>
      <Col
        onClick={() => handleClick(pokemonDetails)}
        className={styles.PokemonContainer}
        sm={12}
        md={6}
        lg={4}
        xl={3}
      >
        <div className={styles.PokemonProfile}>
          {errorMessage && (
            <Alert key={"danger"} variant={"danger"}>
              {errorMessage}
            </Alert>
          )}
          <div className={styles.PokemonImageBox}>{image}</div>
          <div className={styles.PokemonName}>
            <h4>{pokemon.name}</h4>
          </div>
        </div>
      </Col>
    </>
  );
}

export default PokemonCard;
