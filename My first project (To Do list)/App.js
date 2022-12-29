import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoal() {
    setModalIsVisible(true);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals((previousExistingGoals) => [
      ...previousExistingGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText("");
    setModalIsVisible(false);
  };

  function deleteGoalHandler(itemToDeleteKey) {
    setCourseGoals((previousExistingGoals) =>
      previousExistingGoals.filter(({ key }) => {
        return key !== itemToDeleteKey;
      })
    );
  }

  function cancelHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoal} />
        <GoalInput
          {...{
            modalIsVisible,
            enteredGoalText,
            goalInputHandler,
            addGoalHandler,
            cancelHandler,
          }}
        />
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
    </>
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
