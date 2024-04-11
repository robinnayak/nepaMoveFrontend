import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const CrateTrip = ({ navigation }) => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [selectedTrip, setSelectedTrip] = useState("");
  const [tripPrice, setTripPrice] = useState("");
  const Vehicles = ["JAN1234XYZ", "KAT1234XYZ", "BIR1234XYZ"];
  const Trips = ["JANKAT", "KATJAN", "BIRKAT", "KATBIR", "BIRJAN", "JANBIR"];
  data = Vehicles.map((item) => ({ label: item, value: item }));
  //   console.log(data);

  const handleSubmit = () => {
    const message = `
      Data submitted!
      Vehicle: ${selectedVehicle}
      Trip: ${selectedTrip}
      Trip Price: ${tripPrice}
    `;
    alert(message);
  };

  return (
    <View className="p-4">
      <View>
        <Text>choose Vehicle</Text>
        <Dropdown
          className="border-2 p-2 rounded-lg my-1"
          placeholder="Select Vehicle"
          data={Vehicles.map((item) => ({ label: item, value: item }))}
          labelField={"label"}
          onChange={(item)=>setSelectedVehicle(item.value)}
          value={selectedVehicle}
        />
      </View>
      <View>
        <Text>Choose Trip</Text>
        <Dropdown
          className="border-2 p-2 rounded-lg my-1"
          placeholder="Select Trip"
          data={Trips.map((item) => ({ label: item, value: item }))}
          labelField={"label"}
          onChange={(item)=>setSelectedTrip(item.value)}
          value={selectedTrip}
        />
      </View>
      <View>
        <Text>Trip Price</Text>
        <TextInput
          className="border-2 p-2 rounded-lg my-1"
          placeholder="Choose Price"
          value={tripPrice}
          onChangeText={setTripPrice}
        />
      </View>
      <TouchableOpacity
        className="border-2 mt-3 rounded-full w-1/2 self-center"
        onPress={handleSubmit} // Call handleSubmit on press
      >
        <Text className="text-center font-bold text-lg p-1.5">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CrateTrip;
