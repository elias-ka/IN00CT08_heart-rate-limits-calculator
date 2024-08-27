import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [age, setAge] = useState(undefined);
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  const calculateHeartRateLimits = () => {
    if (!age) {
      alert("Enter your age");
      return;
    }

    setLowerLimit((220 - age) * 0.65);
    setUpperLimit((220 - age) * 0.85);
  };

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput value={age} onChangeText={setAge} keyboardType="numeric" />
      <Text>Limits</Text>
      <Text>
        {Math.round(lowerLimit)}-{Math.round(upperLimit)}
      </Text>
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
