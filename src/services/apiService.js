import axios from "axios";
import Constants from 'expo-constants';

const apiAppKey = Constants.expoConfig.extra.apiAppKey
const apiAppId = Constants.expoConfig.extra.apiAppId
const apiBaseURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${apiAppId}&app_key=${apiAppKey}`;

const fetchFoodData = async (search) => {
    try {
        const response = await axios.get(`${apiBaseURL}&ingr=${search}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching food data:", error);
        throw error;
    }
};

export { fetchFoodData };