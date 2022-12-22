import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item: { text, key }, deleteGoalHandler }) {
  return (
    <Pressable onPress={deleteGoalHandler.bind(this, key)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
