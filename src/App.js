import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });

  return <div className="App">hello world ignite!!</div>;
}

export default App;
