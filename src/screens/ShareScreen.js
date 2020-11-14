import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View, Animated } from "react-native";

export default function ShareScreen() {
  const randomNum = useRef(Math.random()).current;
  const [text, setText] = useState("");
  function myHeader() {
    return (
      <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
        <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
          Hello React Native
        </Text>
        <ActivityIndicator
          size="large"
          color="#c1262c"
          style={{ marginBottom: 30 }}
        />
      </View>
    );
  }

  function myFooter() {
    return (
      <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
        <View
          style={{
            borderWidth: 2,
            borderColor: "black",
            padding: 20,
            marginBottom: 30,
          }}
        >
          <Text>Hello again!</Text>
        </View>
        <Button
          onPress={() => Alert.alert("Learning RN is so easy")}
          title="Learn More"
          color="#c1262c"
        />
        <TextInput
          style={{ height: 40, borderWidth: 1, borderColor: "black" }}
          placeholder="Type here something!"
          onChangeText={(text) => setText(text)}
          value={text}
          onSubmitEditing={() => Alert.alert(text)}
        />
      </View>
    );
  }
}
