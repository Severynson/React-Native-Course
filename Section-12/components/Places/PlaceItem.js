import { Image, Pressable, StyleSheet, View } from "react-native";

export default function PlaceItem({
  place: { imageUri, title, address },
  onSelect,
}) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={imageUri} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
    
})