import { MealDataProps } from "@screens/Home";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newmeal: undefined;
      feedback: {
        isInDiet: boolean;
      };
      mealdetails: {
        meal: MealDataPropsDataProps;
      };
    }
  }
}
