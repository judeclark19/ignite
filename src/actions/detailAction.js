import axios from "axios";
import { gameDetailsURL } from "../api";

export const fetchDetails = (id) => async (dispatch) => {
  const detailsData = await axios.get(gameDetailsURL(id));

  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      game: detailsData.data,
    },
  });
};

// export default fetchDetails;
