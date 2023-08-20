import { MealDataProps, newMeal } from "./newMeal";
import { deleteMeal } from "./deleteMeal";

export async function updateMeal(
  day: string,
  hour: string,
  updateMeal: MealDataProps
) {
  try {
    await deleteMeal(day, hour);
    await newMeal(updateMeal);
  } catch (error) {
    throw error;
  }
}
