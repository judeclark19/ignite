import axios from "axios";
import { gameDetailsURL } from "../api";

const fetchDetails = (id) => async (dispatch) => {
  const detailsData = await axios.get(gameDetailsURL(id));

  dispatch({
    type: "FETCH_DETAILS",
    payload: {
      game: detailsData.data,
    },
  });
};
