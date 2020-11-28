import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchGames } from "../actions/gamesActions";

import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

function Home() {
  const location = useLocation();

  //This returns the pathname as an array separated by the slash. /game/id returns 3 items in the array: ["", "game", "the ID"]
  const pathID = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const { popularGames, newGames, upcomingGames, searchedGames } = useSelector(
    (state) => state.games
  );

  return (
    <GameListDiv>
      {/* Ed says: any component that you add AnimatePresence to should have some sort of toggle functionality */}
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathID && <GameDetail pathID={pathID} />}
        </AnimatePresence>

        {searchedGames[0] && (
          <>
            <h2>Search Results</h2>
            <GamesDiv>
              {searchedGames.map((game) => (
                <Game
                  name={game.name}
                  releaseDate={game.released}
                  id={game.id}
                  key={game.id}
                  image={game.background_image}
                />
              ))}
            </GamesDiv>
          </>
        )}

        <h2>Popular Games</h2>
        <GamesDiv>
          {popularGames.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </GamesDiv>

        <h2>New Games</h2>
        <GamesDiv>
          {newGames.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </GamesDiv>

        <h2>Upcoming Games</h2>
        <GamesDiv>
          {upcomingGames.map((game) => (
            <Game
              name={game.name}
              releaseDate={game.released}
              id={game.id}
              key={game.id}
              image={game.background_image}
            />
          ))}
        </GamesDiv>
      </AnimateSharedLayout>
    </GameListDiv>
  );
}

const GameListDiv = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const GamesDiv = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Home;
