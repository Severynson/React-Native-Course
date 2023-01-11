import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary {...{ expenses }} periodName={expensesPeriod} />
      <ExpensesList {...{ expenses }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});