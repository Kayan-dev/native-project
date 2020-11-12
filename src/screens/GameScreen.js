import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { DeviceMotion } from "expo-sensors";

export default function GameScreen() {
  useEffect(() => {
    DeviceMotion.setUpdateInterval(250);
    const subscription = DeviceMotion.addListener((data) => {
      console.log(data);
    });

    // cleanup on unmount
    return () => subscription.remove();
  }, []);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text style={{ marginBottom: 20, fontSize: 24, fontWeight: "bold" }}>
        Choose your color!
      </Text>
    </View>
  );
}
