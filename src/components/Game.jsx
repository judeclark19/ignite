import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

//Redux
import { useDispatch } from "react-redux";
import { fetchDetails } from "../actions/detailAction";

function Game({ name, releaseDate, image, id }) {
  const dispatch = useDispatch();

  const fetchDetailsHandler = () => {
    dispatch(fetchDetails(id));
  };

  return (
    <StyledGameDiv onClick={fetchDetailsHandler}>
      <Link to={`/game/${id}`}>
        <CardTextDiv>
          <h3>{name}</h3>
          <p>Release Date: {releaseDate}</p>
        </CardTextDiv>
        <img src={image} alt={name} />
      </Link>
    </StyledGameDiv>
  );
}

const StyledGameDiv = styled(motion.div)`
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

const CardTextDiv = styled.div`
  padding: 1rem 0rem;
`;

export default Game;
