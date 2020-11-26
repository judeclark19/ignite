import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function GameDetail() {
  const history = useHistory();

  //Exit modal
  const exitModalHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const { screenshots, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadowDiv className="shadow" onClick={exitModalHandler}>
          <DetailDiv>
            <StatsDiv>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <InfoDiv>
                <h3>Platforms</h3>
                <PlatformsDiv>
                  {game.platforms && (
                    <>
                      {game.platforms.map((platform) => (
                        <p>{platform.platform.name}</p>
                      ))}
                    </>
                  )}
                </PlatformsDiv>
              </InfoDiv>
            </StatsDiv>

            <MediaDiv>
              {game.background_image && (
                <img src={game.background_image} alt="main" />
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
                      <img src={screenshot.image} alt="screenshot" />
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
  border: 2px dashed gray;
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
