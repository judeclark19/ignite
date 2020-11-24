import axios from "axios";
import { popularGamesURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
  //fetch w axios
  const popularGamesData = await axios.get(popularGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGamesData.data.results,
    },
  });
};
