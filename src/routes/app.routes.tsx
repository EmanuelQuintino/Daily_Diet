import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";
import { Feedback } from "@screens/Feedback";
import { MealDetails } from "@screens/MealDetails";
import { FormMeal } from "@screens/FormMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newmeal" component={FormMeal} />
      <Screen name="editmeal" component={FormMeal} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealdetails" component={MealDetails} />
    </Navigator>
  );
}
