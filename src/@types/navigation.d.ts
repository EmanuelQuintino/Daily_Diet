export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      newmeal: undefined;
      editmeal: {
        dayHour: string;
      };
      feedback: {
        isInDiet: boolean;
      };
      mealdetails: {
        dayHour: string;
      };
    }
  }
}
