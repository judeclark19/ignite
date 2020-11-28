import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { resizeImage } from "../util";

import { popIn } from "../animations";

//Redux
import { useDispatch } from "react-redux";
import { fetchDetails } from "../actions/detailAction";

function Game({ name, releaseDate, image, id }) {
  const pathIdString = id.toString();

  const dispatch = useDispatch();

  const fetchDetailsHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(fetchDetails(id));
  };

  return (
    <StyledGameDiv
      variants={popIn}
      initial="hidden"
      animate="show"
      layoutId={pathIdString}
      onClick={fetchDetailsHandler}
    >
      <Link to={`/game/${id}`}>
        <CardTextDiv>
          <motion.h3 layoutId={`title ${pathIdString}`}>{name}</motion.h3>
          <p>Release Date: {releaseDate}</p>
        </CardTextDiv>
        <motion.img
          layoutId={`image ${pathIdString}`}
          src={resizeImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGameDiv>
  );
}

const StyledGameDiv = styled(motion.div)`
  cursor: pointer;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.27);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
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
