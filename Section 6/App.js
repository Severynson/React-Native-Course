import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";

const Stack = createNativeStackNavigator();
const { Navigator } = Stack;

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Navigator></Navigator>
        <CategoriesScreen />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
