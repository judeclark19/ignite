import axios from "axios";
import { gameDetailsURL, screenshotsURL } from "../api";

export const fetchDetails = (id) => async (dispatch) => {
  const detailsData = await axios.get(gameDetailsURL(id));
  const screenshotsData = await axios.get(screenshotsURL(id));

  dispatch({
    type: "FETCH_DETAIL",
    payload: {
      game: detailsData.data,
      screenshots: screenshotsData.data,
    },
  });
};

// export default fetchDetails;
