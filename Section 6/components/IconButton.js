import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      {...{ onPress }}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} {...{ color }} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
