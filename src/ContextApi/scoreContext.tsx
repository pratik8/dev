import React, { createContext, useState } from 'react';

export const scoreContext = createContext(null);

export const ScoreContextWrapper = ({ children }) => {
  const [score, updateScore] = useState<number>(0);

  const setScore = (score) => {
    updateScore(score);
  };

  return (
    <scoreContext.Provider value={{ scoreData: score, addScore: setScore }}>
      {children}
    </scoreContext.Provider>
  );
};
