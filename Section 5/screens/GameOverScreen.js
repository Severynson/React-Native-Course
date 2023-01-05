import {
  View,
  Image,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) imageSize = 150;
  if (height < 400) imageSize = 80;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  if (width < 380)
    return (
      <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
          <Title>GAME OVER!</Title>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image
              style={styles.image}
              source={require("../assets/images/success.png")}
            />
          </View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
            the number <Text style={styles.highlight}>{userNumber}</Text>.
          </Text>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </ScrollView>
    );
}

export default GameOverScreen;

// const { width: deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: 1000,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
