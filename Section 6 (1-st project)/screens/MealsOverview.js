import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
// import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
  // Use prop OR hook provided by library:
  // const route = useRoute();
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const categoryTitle = CATEGORIES.find(
    (category) => category.id === categoryId
  ).title;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}
