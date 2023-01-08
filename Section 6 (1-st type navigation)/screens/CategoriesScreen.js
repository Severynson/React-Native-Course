import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function pressHandler({ id }) {
  this.navigate("MealsOverview", {
    categoryId: id,
  });
}

function renderCategoryItem(itemData) {
  const { title, color } = itemData.item;
  return (
    <CategoryGridTile
      {...{ title, color, onPress: pressHandler.bind(this, itemData.item) }}
    />
  );
}

export default function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem.bind(navigation)}
      numColumns={2}
    />
  );
}
