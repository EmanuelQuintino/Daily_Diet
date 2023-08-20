import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsDataProps } from "@screens/Home";
import { MEALS_DATA_KEY } from "@storage/storageConfig";

export async function getMealByDayHours(day: string, hour: string) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_DATA_KEY);

    const meals: MealsDataProps = storage ? JSON.parse(storage) : [];

    const mealFind = meals.find((item) => {
      if (item.day === day) {
        const remainingMeal = item.data.find((meal) => meal.hour === hour);
        return remainingMeal;
      }
    });

    console.log(mealFind);

    const filterData = mealFind
      ? mealFind.data.find((meal) => meal.hour === hour)
      : [];

    if (mealFind) {
      const formattedMealFind = {
        data: filterData,
        day,
      };
      return formattedMealFind;
    }
    return undefined;
  } catch (error) {
    throw error;
  }
}
