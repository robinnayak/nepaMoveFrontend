import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { BASEURL } from "../../services/Baseurl";
import { setStoreTripPrice } from "../../app/features/driver/driverSlice";
import { useDispatch, useSelector } from "react-redux";




const CrateTrip = ({ navigation }) => {
  const user_token = useSelector((state) => state.auth.token.access);

  const [tripPrice, setTripPrice] = useState({
    trip: "",
    vehicle: "",
    price: 0.0,
  
  });
  const [tripPriceData, setTripPriceData] = useState([]);
  const [tripid, setTripid] = useState([]);
  const [tripdata, setTripdata] = useState(null);
  const [license_plate_num, setLicense_plate_num] = useState([]);
  const username = useSelector((state) => state.auth.username);

  const filter_data = useSelector((state) => state.driver.vehicles);
  
  const dispatch = useDispatch();
  const handleInputChange = (value, field) => {
    // if (field === "price") {
    //   value = parseInt(value, 10);
    // }
    setTripPrice({
      ...tripPrice,
      [field]: value,
    });
  };

  useEffect(() => {
    const getTripData = async () => {
      try {
        const response = await axios.get(`${BASEURL}/driver/trip/tripview`,{
          headers: {
            Authorization: `Bearer ${user_token}`,
          },
        });
        setTripdata(response.data);
        addTripid(response.data);
        addData(filter_data);
      } catch (e) {
        console.log(e);
      }
    };
    getTripData();
  }, [user_token]);

  const addData = (filter_data) => {
    if (filter_data) {
      const licensePlateNums = filter_data.map(
        (data) => data.license_plate_number
      );
      setLicense_plate_num(licensePlateNums);
      console.log("license plate num", licensePlateNums);
    }
  };

  const addTripid = (trip_data) => {
    const tripIds = trip_data.data.map((item) => item.trip_id);
    setTripid(tripIds);
    console.log("trip id", tripIds);
  };

  const handleSubmit = async () => {
    const message = `
      Data submitted!
      Vehicle: ${tripPrice.vehicle}
      Trip: ${tripPrice.trip}
      Trip Price: ${tripPrice.price}
    `;
    Alert.alert("Success", message);
    try {
      console.log("trip price inside form", tripPrice)
      const response = await axios.post(
        `${BASEURL}/driver/trip/trip-price/`,
        tripPrice,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user_token}`,
          },
        }
      );
      console.log(response.data);
      setTripPriceData(response.data);
      dispatch(setStoreTripPrice(response.data)); 
      navigation.navigate("Trip"); 
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="p-4">
      <View>
        <Text>Choose Trip</Text>
        <Dropdown
          className="border-2 p-2 rounded-lg my-1"
          placeholder="Select Trip"
          data={tripid.map((item) => ({ label: item, value: item }))}
          labelField="label"
          value={tripPrice.trip.toString()}
          onChange={(item) => handleInputChange(item.value, "trip")}
        />
      </View>
      <View>
        <Text>Choose Vehicle</Text>
        <Dropdown
          className="border-2 p-2 rounded-lg my-1"
          placeholder="Select Vehicle"
          data={license_plate_num.map((item) => ({ label: item, value: item }))}
          labelField="label"
          value={tripPrice.vehicle.toString()}
          onChange={(item) => handleInputChange(item.value, "vehicle")}
        />
      </View>
      <View>
        <Text>Trip Price</Text>
        <TextInput
          className="border-2 p-2 rounded-lg my-1"
          placeholder="Choose Price"
          value={tripPrice.price.toString()}
          onChangeText={(value) => handleInputChange(value, "price")}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        className="border-2 mt-3 rounded-full w-1/2 self-center"
        onPress={handleSubmit}
      >
        <Text className="text-center font-bold text-lg p-1.5">Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CrateTrip;
