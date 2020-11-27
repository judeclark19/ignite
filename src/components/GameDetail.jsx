import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { resizeImage } from "../util";

//icons
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

function GameDetail({ pathID }) {
  const history = useHistory();

  //Exit modal
  const exitModalHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //Display stars for rating
  // const getStars

  //Render platform icons
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playstation;
      case "PlayStation 4":
        return playstation;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadowDiv className="shadow" onClick={exitModalHandler}>
          <DetailDiv layoutId={pathID}>
            <StatsDiv>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <InfoDiv>
                <h3>Platforms</h3>
                <PlatformsDiv>
                  {game.platforms && (
                    <>
                      {game.platforms.map((platform) => (
                        <img
                          key={platform.platform.id}
                          src={getPlatformIcon(platform.platform.name)}
                        ></img>
                      ))}
                    </>
                  )}
                </PlatformsDiv>
              </InfoDiv>
            </StatsDiv>

            <MediaDiv>
              {game.background_image && (
                <motion.img
                  layoutId={`image ${pathID}`}
                  src={resizeImage(game.background_image, 1280)}
                  alt="main"
                />
              )}
            </MediaDiv>
            <DescriptionDiv>
              <p>{game.description_raw}</p>
            </DescriptionDiv>

            <div className="gallery">
              {screenshots.results && (
                <>
                  {screenshots.results.map((screenshot) => (
                    <>
                      <img
                        src={resizeImage(screenshot.image, 1280)}
                        alt="screenshot"
                      />
                    </>
                  ))}
                </>
              )}
            </div>
          </DetailDiv>
        </CardShadowDiv>
      )}
    </>
  );
}

//styles
// ================================================================

const CardShadowDiv = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e97659;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const DetailDiv = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 7rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const StatsDiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoDiv = styled(motion.div)`
  text-align: center;
`;

const PlatformsDiv = styled(motion.div)`
  /* border: 2px dashed gray; */
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const MediaDiv = styled(motion.div)`
  margin-top: 4rem;
`;

const DescriptionDiv = styled(motion.div)`
  margin: 4rem 0rem;
`;

export default GameDetail;
