import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_DATA } from "@storage/storageConfig";
import { getMeals } from "./getMeals";
import { AppError } from "@utils/AppError";

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
    function validateDate(date: string) {
      const [day, month, year] = date.split(".").map(Number);
      const fullYear = 2000 + year;
      const newDate = new Date(fullYear, month - 1, day);

      return (
        newDate.getFullYear() === fullYear &&
        newDate.getMonth() === month - 1 &&
        newDate.getDate() === day
      );
    }

    const isValidDate = validateDate(meal.day);

    if (!isValidDate) {
      throw new AppError("Data inválida!");
    }

    const storageMeals = await getMeals();

    const mealIndex = storageMeals.findIndex((item) => item.day == meal.day);

    if (mealIndex !== -1) {
      storageMeals[mealIndex].data.push(...meal.data);
    } else {
      storageMeals.push(meal);
    }

    storageMeals.sort((a, b) => {
      const [aDay, aMonth, aYear] = a.day.split(".").map(Number);
      const [bDay, bMonth, bYear] = b.day.split(".").map(Number);

      if (aYear !== bYear) {
        return bYear - aYear;
      }
      if (aMonth !== bMonth) {
        return bMonth - aMonth;
      }
      return bDay - aDay;
    });

    storageMeals.forEach((item) => {
      item.data.sort((a, b) => {
        const [aHour, aMinute] = a.hour.split(":").map(Number);
        const [bHour, bMinute] = b.hour.split(":").map(Number);

        if (aHour !== bHour) {
          return bHour - aHour;
        }
        return bMinute - aMinute;
      });
    });

    const storage = JSON.stringify(storageMeals);
    await AsyncStorage.setItem(MEALS_DATA, storage);
  } catch (error) {
    throw error;
  }
}
