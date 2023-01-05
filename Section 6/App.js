import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle: { backgroundColor: "#351401" },
              // headerTintColor: "white",
              // contentStyle: { backgroundColor: "#3f2f25" },
            }}
          />
          <Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const categoryId = route.params.categoryId;
            //   return {
            //     title: categoryId,
            //   };
            // }}
          />
          <Screen name="MealDetail" component={MealDetailScreen} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
