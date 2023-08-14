import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_DATA_KEY } from "@storage/storageConfig";
import { getMeals } from "./getMeals";

export type MealDataProps = {
  day: string;
  data: {
    name: string;
    hour: string;
    isInDiet: boolean;
    description: string;
  }[];
};

export async function deleteMeal(day: string, hour: string) {
  try {
    const storageMeals = await getMeals();

    const deleteMeals = storageMeals
      .map((item) => {
        if (item.day === day) {
          const remainingMeals = item.data.filter((meal) => meal.hour !== hour);
          return { ...item, data: remainingMeals };
        }
        return item;
      })
      .filter((item) => item.data.length > 0);

    if (deleteMeals.length > 0) {
      const storage = JSON.stringify(deleteMeals);
      await AsyncStorage.setItem(MEALS_DATA_KEY, storage);
    } else {
      await AsyncStorage.removeItem(MEALS_DATA_KEY);
    }
  } catch (error) {
    throw error;
  }
}
