import { Image, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const { duration, complexity, affordability } = selectedMeal;
  const MealDetailsProps = { duration, complexity, affordability };

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails {...MealDetailsProps} />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}
