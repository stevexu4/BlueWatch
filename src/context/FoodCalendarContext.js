/*
 The goal of this context is to hold the food data for a day
 
 The object uses the format YYYY-MM-DD (ISO 8601) as a key
 See https://en.wikipedia.org/wiki/ISO_8601 for more information about why this format is so cool ! 

 The global object has several dates as keys each date is itself an object with in theory 4 keys
 for Breakfast, Lunch, Snack & Dinner each one holds an array with the different foods 

 */

import React, { useState } from "react";

const FoodCalendarContext = React.createContext();

const FoodCalendarCalendarProvider = ({ children }) => {
  const [dates, setDates] = useState({});

  const addFoodToDate = (date, meal, food) => {
    setDates((prevDates) => ({
      ...prevDates,
      [date]: {
        ...prevDates[date],
        [meal]: [...(prevDates[date]?.[meal] || []), food],
      },
    }));
  };

  const removeFoodToDate = (date, meal, food) => {
    setDates((prevDates) => {
      const updatedDates = { ...prevDates };
      if (updatedDates[date] && updatedDates[date][meal]) {
        const foods = [...updatedDates[date][meal]];
        const foodIndex = foods.indexOf(food);
        if (foodIndex !== -1) {
          foods.splice(foodIndex, 1);
          updatedDates[date][meal] = foods;
        }
      }
      return updatedDates;
    });
  };

  // Remove all meal planning for the whole day
  const removeDate = (date) => {
    setDates((prevDates) => {
      const updatedDates = { ...prevDates };
      delete updatedDates[date];
      return updatedDates;
    });
  };

  const contextValue = {
    dates,
    addFoodToDate,
    removeFoodToDate,
    removeDate,
  };

  return (
    <FoodCalendarContext.Provider value={contextValue}>
      {children}
    </FoodCalendarContext.Provider>
  );
};

export { FoodCalendarCalendarProvider, FoodCalendarContext };
