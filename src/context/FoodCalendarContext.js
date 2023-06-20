/*
 The goal of this context is to hold the food data for a day
 
 The object uses the format YYYY-MM-DD (ISO 8601) as a key
 See https://en.wikipedia.org/wiki/ISO_8601 for more information about why this format is so cool ! 

 The object holds for a key an array with the food object

 */

import React, { useState } from "react";

const FoodCalendarContext = React.createContext();

const FoodCalendarCalendarProvider = ({ children }) => {
    const [dates, setDates] = useState({});

    const addFoodToDate = (date, food) => {
        setDates((prevDates) => ({
            ...prevDates,
            // Add to existing array or adds it to empty
            [date]: [...(prevDates[date] || []), food],
        }));
    };

    const removeFoodToDate = (date, food) => {
        setDates((prevDates) => {
            const updatedDates = { ...prevDates };
            // if date key exists otherwise do nothing
            if (updatedDates[date]) {
                const foods = updatedDates[date];
                const foodIndex = foods.indexOf(food);
                if (foodIndex !== -1) {
                    foods.splice(foodIndex, 1);
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
