import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function GameDetail() {
  const { screenshots, game } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map((platform) => (
                <h3 key={platform.platform.id}>{platform.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>

        <div className="media">
          <img src={game.background_image} alt="image" />
        </div>
        <div className="gallery">
          {screenshots.results.map((screenshot) => (
            <img
              src={screenshot.image}
              alt="gallery image"
              key={screenshot.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameDetail;
