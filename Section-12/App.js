import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: {
              backgroundColor: Colors.gray700, 
            },
          }}
        >
          <Stack.Screen
            name="Your Favorite Places"
            component={AllPlaces}
            options={({ navigation: { navigate } }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  size={24}
                  color={tintColor}
                  icon="add"
                  onPress={() => {
                    navigate("AddPlace");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a new Place",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
