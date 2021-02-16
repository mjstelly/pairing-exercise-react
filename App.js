import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Formik } from "formik";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const PersonalInfo = (props) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        birthDate: "",
        ssnLast4: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={{
            // flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Text style={{ color: "#223e4b", fontSize: 20, marginBottom: 16 }}>
            Personal Info
          </Text>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              placeholder="Enter your first name"
              autoCorrect={false}
              autoCapitalize="words"
              keyboardType="default"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              onChangeText={handleChange("firstName")}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              placeholder="Enter your last name"
              autoCorrect={false}
              autoCapitalize="words"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              onChangeText={handleChange("lastName")}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              placeholder="Enter your birthdate"
              keyboardType="numeric"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              onChangeText={handleChange("birthDate")}
            />
          </View>
          <View
            style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
          >
            <TextInput
              placeholder="Enter last 4 digits of your SSN"
              keyboardType="numeric"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              onChangeText={handleChange("ssnLast4")}
            />
          </View>
          <Button onPress={handleSubmit} label="Submit" />
        </View>
      )}
    </Formik>
  );
};

const FitnessInfo = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Text style={{ color: "#223e4b", fontSize: 20, marginBottom: 16 }}>
        Fitness Info
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          placeholder="Enter your weight in pounds"
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          placeholder="Enter your height in inches"
          keyboardType="numeric"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
    </View>
  );
};
const HealthInfo = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Text style={{ color: "#223e4b", fontSize: 20, marginBottom: 16 }}>
        Health Info
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          placeholder="What condition brings you here?"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          placeholder="Any other concerns?"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="go"
          returnKeyLabel="go"
        />
      </View>
    </View>
  );
};

export default function App() {
  // const { handleChange, handleSubmit, values } = useFormik({
  //   initialValues: { firstName: "", lastName: "", birthDate: "", ssnLast4: "" },
  //   onSubmit: (values) =>
  //     alert(`First Name: ${values.firstName},
  //   Last Name: ${values.lastName},
  //   Birth Date: ${values.birthDate},
  //   SSN Last4: ${values.ssnLast4}`),
  // });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PersonalInfo />
      <StatusBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
