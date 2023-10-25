// AdventureGame.jsx

import React, { useState, useEffect } from 'react';
import './AdventureGame.css';
import { textNodes } from './data/storyData';

const AdventureGame = () => {
  const [state, setState] = useState({});
  const [currentTextNode, setCurrentTextNode] = useState(1);

  useEffect(() => {
    showTextNode(currentTextNode);
  }, [currentTextNode]);

  const startGame = () => {
    setState({});
    setCurrentTextNode(1);
  };

  const showTextNode = (textNodeIndex) => {
    const textNode = textNodes.find((node) => node.id === textNodeIndex);
    setCurrentTextNode(textNodeIndex);

    if (textNode?.setState) {
      setState((prevState) => ({ ...prevState, ...textNode.setState }));
    }
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
  };

  return (
    <div className="container">
      {textNodes.find((node) => node.id === currentTextNode)?.img && (
        <img
          src={`/${textNodes.find((node) => node.id === currentTextNode).img}`}
          alt={textNodes.find((node) => node.id === currentTextNode)?.h1}
          className="adventure-image"
        />
      )}
      <div className="container-game-frame">
        <div id="text">
          <h1>{textNodes.find((node) => node.id === currentTextNode)?.h1}</h1>
          {textNodes.find((node) => node.id === currentTextNode)?.text}
        </div>

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
    </div>
  );
};

export default AdventureGame;
