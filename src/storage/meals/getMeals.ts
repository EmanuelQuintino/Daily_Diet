import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsDataProps } from "@screens/Home";
import { MEALS_DATA } from "@storage/storageConfig";

export async function getMeals() {
  try {
    const storage = await AsyncStorage.getItem(MEALS_DATA);
    const meals: MealsDataProps = storage ? JSON.parse(storage) : [];
    return meals;
  } catch (error) {
    throw error;
  }
}
