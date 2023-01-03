import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

export default ({ children, style }) => (
  <Text style={[styles.instructionText, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.primary500,
    fontSize: 24,
  },
});
