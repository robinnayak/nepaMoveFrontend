import { View, Text } from "react-native";
import { Menu } from "../Home/Home";
import MapLocation from "../components/common/MapLocation";
import MapView from "react-native-maps";
import { useState, useEffect } from "react";

const DriverLocation = () => {
  return (
    <View>
      <Text>Driver Location</Text>
    </View>
  );
};

const PassengerLocation = () => {
  return (
    <View
      className="border-2 border-red-400 flex flex-row justify-center  "
      style={{ height: "88%" }}
    >
      <MapLocation />
    </View>
  );
};

const LocationTracking = ({ navigation }) => {
  const is_driver = false;

  return (
    <View>
      {is_driver ? <DriverLocation /> : <PassengerLocation />}
      <Menu
        navigation={navigation}
        icon_size_L={36}
        icon_size_N={32}
        icon_size_H={32}
        icon_size_A={32}
        icon_size_P={32}
      />
    </View>
  );
};

export default LocationTracking;
