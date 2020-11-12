import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
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

  return (
    <GameScreen></GameScreen>
    // <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
    //   <FlatList
    //     ListHeaderComponent={myHeader}
    //     data={[0, 1, 2, 3, 4]}
    //     renderItem={({ item }) => {
    //       return (
    //         <TouchableOpacity
    //           onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
    //         >
    //           <Image
    //             source={{
    //               uri: `https://picsum.photos/500/300?random=${
    //                 randomNum + item
    //               }`,
    //             }}
    //             style={{ width: "100%", height: 160, marginBottom: 30 }}
    //           />
    //         </TouchableOpacity>
    //       );
    //     }}
    //     keyExtractor={(item) => String(item)}
    //     ListFooterComponent={myFooter}
    //   />
    //   <View style={{ height: "50%" }}>
    //     <View
    //       style={{ flex: 1, width: "20%", backgroundColor: "rebeccapurple" }}
    //     />
    //     <View style={{ flex: 2, width: "50%", backgroundColor: "crimson" }} />
    //     <View style={{ flex: 3, width: "80%", backgroundColor: "gold" }} />
    //   </View>
    // </View>
  );
}
