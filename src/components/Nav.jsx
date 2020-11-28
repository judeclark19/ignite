import React, { useState } from "react";
//Animations
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fadeIn } from "../animations";

//Redux and router
import { searchGames } from "../actions/gamesActions";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(searchGames(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <LogoDiv onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </LogoDiv>
      <form className="search" onSubmit={submitSearch}>
        <input value={textInput} type="text" onChange={inputHandler} />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem 0 0 0.5rem;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #e97659;
    color: white;
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

const LogoDiv = styled(motion.div)`
  /* border: 1px dashed red; */
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
    margin-right: 0.5rem;
  }
`;

export default Nav;
