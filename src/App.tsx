import { useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Alert } from "react-bootstrap";
import axios from "axios";

import PokemonCard from "./Components/PokemonCard/PokemonCard";
import PokemonInfo from "./Components/PokemonInfo/PokemonInfo";
import Pagination from "./Components/Pagination/Pagination";

import PokemonLogo from "./images/pokemon-logo.png";
import styles from "./App.module.sass";
import { Data, PokemonData, PokemonDetails } from "./interface";

const App = () => {
  const [pokemon, setPokemon] = useState<PokemonData>();
  const [pokemonInfo, setPokemonInfo] = useState<PokemonDetails>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const url: string = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    axios
      .get(url)
      .then((resp: Data) => {
        setPokemon(resp.data);
      })
      .catch((error) => setErrorMessage(error.message));
  }, []);

  const clickPokemon = (pokemonDetails: PokemonDetails): void => {
    setPokemonInfo(pokemonDetails);
  };

  const clickPage = (url: string): void => {
    axios
      .get(url)
      .then((resp) => {
        setPokemon(resp.data);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <>
      <Navbar className={styles.NavbarApp}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={PokemonLogo}
              width="50"
              height="50"
              className={styles.Logo}
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className={styles.ContainerApp}>
        <Row>
          <Col md={9}>
            {pokemon && (
              <Container className={styles.TitleAppContainer}>
                <h1 className={styles.TitleApp}>
                  Clique no Pokemon e veja detalhes
                </h1>
              </Container>
            )}
            {errorMessage && (
              <Alert key={"danger"} variant={"danger"}>
                {errorMessage}
              </Alert>
            )}
            <Container>
              <Row>
                {pokemon?.results?.map((item) => {
                  return (
                    <PokemonCard
                      pokemon={item}
                      key={item.name}
                      handleClick={clickPokemon}
                    />
                  );
                })}
              </Row>
            </Container>
            {pokemon && (
              <Pagination
                next={pokemon.next}
                previous={pokemon.previous}
                clickPage={clickPage}
              />
            )}
          </Col>

          <Col md={3} className={styles.DetailsContainer}>
            <div className={styles.Details}>
              {pokemonInfo && <PokemonInfo pokemon={pokemonInfo} />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
