import { useState, useEffect } from "react";
import axios from "axios";
import { PokemonDetails, PokemonMovesDetails } from "../../../interface";
import styles from "./PokemonMoves.module.sass";
import { Alert } from "react-bootstrap";

interface IProps {
  pokemon: PokemonDetails;
}

const PokemonMoves = ({ pokemon }: IProps) => {
  const [move, setMove] = useState<string | undefined>();
  const [moveDetails, setMoveDetails] = useState<
    PokemonMovesDetails | undefined
  >();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    move &&
      axios
        .get(move)
        .then((resp) => {
          setMoveDetails(resp.data);
        })
        .catch((error) => setErrorMessage(error.message));
  }, [move]);

  return (
    <>
      {errorMessage && (
        <Alert key={"danger"} variant={"danger"}>
          {errorMessage}
        </Alert>
      )}
      <select
        className={styles.MovesSelect}
        value={move}
        onChange={(e) => setMove(e.target.value)}
      >
        <option className={styles.MovesOption} value="">
          Movimentos:
        </option>
        {pokemon?.moves.map((item) => {
          return (
            <option
              className={styles.MovesOption}
              value={item?.move.url}
              key={item?.move.url}
            >
              {item?.move?.name}
            </option>
          );
        })}
      </select>

      <div className={styles.MovesDetails}>
        {moveDetails && (
          <div className="move-details">
            precisão: {moveDetails?.accuracy || "X"}, força:{" "}
            {moveDetails?.power || "X"}
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonMoves;
