import React, { createContext, useState } from "react";

export const HealthGoalsContext = createContext();

export const HealthGoalsProvider = ({ children }) => {
  const [caloricIntake, setCaloricIntake] = useState(0);

  const updateCaloricIntake = (intake) => {
    setCaloricIntake(intake);
  };

  return (
    <HealthGoalsContext.Provider value={{ caloricIntake, updateCaloricIntake }}>
      {children}
    </HealthGoalsContext.Provider>
  );
};
