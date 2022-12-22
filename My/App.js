import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals((previousExistingGoals) => [
      ...previousExistingGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText("");
  };

  function deleteGoalHandler(itemToDeleteKey) {
    setCourseGoals((previousExistingGoals) =>
      previousExistingGoals.filter(({ key }) => {
        return key !== itemToDeleteKey;
      })
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput {...{ enteredGoalText, goalInputHandler, addGoalHandler }} />
      <View style={styles.goalsContainer}>
        {!courseGoals.length && <Text>List of goals is empty</Text>}
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <GoalItem {...{ item, deleteGoalHandler }} />
          )}
          keyExtractor={({ key }) => key}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
