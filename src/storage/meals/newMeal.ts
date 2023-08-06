import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_DATA } from "@storage/storageConfig";
import { getMeals } from "./getMeals";

export async function newMeal(meal: string) {
  try {
    const storageMeals = await getMeals();
    const storage = JSON.stringify([...storageMeals, meal]);
    await AsyncStorage.setItem(MEALS_DATA, storage);
  } catch (error) {
    throw error;
  }
}
