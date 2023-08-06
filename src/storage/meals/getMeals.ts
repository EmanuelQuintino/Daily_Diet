import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_DATA } from "@storage/storageConfig";

export async function getMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_DATA);
    const meals: string[] = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}
