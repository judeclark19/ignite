import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchURL,
} from "../api";

//Action Creator

export const fetchGames = () => async (dispatch) => {
  //fetch w axios
  const popularGamesData = await axios.get(popularGamesURL());
  const upcomingGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGamesData.data.results,
      upcomingGames: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const searchGames = (game_name) => async (dispatch) => {
  //hello
  const searchResults = await axios.get(searchURL(game_name));

  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searchedGames: searchResults.data.results,
    },
  });
};
