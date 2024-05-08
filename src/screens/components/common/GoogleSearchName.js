import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../../../services/apikey";

const GoogleSearchName = ({ placeholdertxt = "Search" }) => {
  const fetchDestCords = (data, details = null) => {
    console.log(data, details);
  };
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholdertxt}
      onPress={fetchDestCords}
      fetchDetails={true}
      query={{
        key: GOOGLE_API_KEY,
        language: "en",
      }}
      styles={{
        textInputContainer: styles.containerStyle,
        textInput: styles.textInputStyle,
      }}
    />
  );
};

export default GoogleSearchName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: "white",
  },
  textInputStyle: {
    height: 48,
    color: "black",
    fontSize: 16,
    backgroundColor: "#f3f3f3",
  },
});
