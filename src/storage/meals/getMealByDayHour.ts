import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealsDataProps } from "@screens/Home";
import { MEALS_DATA_KEY } from "@storage/storageConfig";

export async function getMealByDayHours(day: string, hour: string) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_DATA_KEY);

    const meals: MealsDataProps = storage ? JSON.parse(storage) : [];

    const mealFindByDay = meals.find((item) => item.day === day);

    if (mealFindByDay) {
      const mealFindByHour = mealFindByDay.data.find(
        (meal) => meal.hour === hour
      );

      if (mealFindByHour) {
        return {
          day,
          data: mealFindByHour,
        };
      }
    }
    return undefined;
  } catch (error) {
    throw error;
  }
}
