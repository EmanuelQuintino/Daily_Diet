import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsDataProps } from "@screens/Home";
import { MEALS_DATA_KEY } from "@storage/storageConfig";

export async function getMealByDayHours(day: string, hour: string) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_DATA_KEY);

    const meals: MealsDataProps = storage ? JSON.parse(storage) : [];

    const mealFilter = meals.find((item) => {
      if (item.day === day) {
        const remainingMeal = item.data.find((meal) => meal.hour === hour);
        return remainingMeal;
      }
    });

    if (mealFilter) {
      const { data, day } = mealFilter;
      const formattedMealFilter = {
        data: data[0],
        day,
      };
      return formattedMealFilter;
    }
    return undefined;
  } catch (error) {
    throw error;
  }
}
