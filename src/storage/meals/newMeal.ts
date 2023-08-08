import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_DATA } from "@storage/storageConfig";
import { getMeals } from "./getMeals";

export type MealDataProps = {
  day: string;
  data: {
    meal: string;
    hour: string;
    isInDiet: boolean;
    description: string;
  }[];
};

export async function newMeal(meal: MealDataProps) {
  try {
    const storageMeals = await getMeals();

    const mealIndex = storageMeals.findIndex((item) => item.day == meal.day);

    if (mealIndex !== -1) {
      storageMeals[mealIndex].data.push(...meal.data);
    } else {
      storageMeals.push(meal);
    }

    const storage = JSON.stringify(storageMeals);
    await AsyncStorage.setItem(MEALS_DATA, storage);
  } catch (error) {
    throw error;
  }
}
