import { MealDataProps } from "@screens/MealDetails";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newmeal: undefined;
      editmeal: MealDataProps;
      feedback: {
        isInDiet: boolean;
      };
      mealdetails: {
        dayHour: string;
      };
    }
  }
}
