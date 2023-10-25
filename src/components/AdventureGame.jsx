// AdventureGame.jsx

import React, { useState } from 'react';
import './AdventureGame.css';
import { textNodes } from './data/storyData';

const AdventureGame = () => {
  const [state, setState] = useState({});
  const [currentTextNode, setCurrentTextNode] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const startGame = () => {
    setState({});
    setBackgroundImage(null);
    showTextNode(1);
  };

  const updateBackgroundImage = (textNodeIndex, optionIndex) => {
    const textNode = textNodes.find((node) => node.id === textNodeIndex);
    const option = textNode?.options[optionIndex];
    const imageSrc = option?.img ? `${option.img}` : null;
    setBackgroundImage(imageSrc);
  };

  const showTextNode = (textNodeIndex) => {
    const textNode = textNodes.find((node) => node.id === textNodeIndex);
    setCurrentTextNode(textNodeIndex);

    if (textNode?.setState) {
      setState((prevState) => ({ ...prevState, ...textNode.setState }));
    }

    updateBackgroundImage(textNodeIndex, 0); // Default to the first option's image
  };

  const showOption = (option) => {
    return option?.requiredState == null || option.requiredState(state);
  };

  const selectOption = (option, optionIndex) => {
    const nextTextNodeId = option.nextText;

    if (nextTextNodeId <= 0) {
      return startGame();
    }

    if (option?.setState) {
      setState((prevState) => ({ ...prevState, ...option.setState }));
    }

    showTextNode(nextTextNodeId);
    updateBackgroundImage(nextTextNodeId, optionIndex);
  };

  return (
    <div className="container">
      <h1>{textNodes.find((node) => node.id === currentTextNode)?.h1}</h1>
      <div id="text">{textNodes.find((node) => node.id === currentTextNode)?.text}</div>
      <div
        id="background-image"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}></div>
      <div id="option-buttons">
        {textNodes
          .find((node) => node.id === currentTextNode)
          ?.options.map((option, index) => (
            <button
              key={index}
              className="btn"
              onClick={() => selectOption(option, index)}
              disabled={!showOption(option)}>
              {option.text}
            </button>
          ))}
      </div>
    </div>
  );
};

export default AdventureGame;
