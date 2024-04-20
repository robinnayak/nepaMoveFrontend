import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Menu } from "../Home/Home";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import { Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../../services/Baseurl";
import { setStoreTripPrice } from "../../app/features/driver/driverSlice";
const Card = ({
  title,
  width = "w-32",
  height = "h-40",
  position_top = "top-0",
  z_index = "z-10",
  data,
  navigation,
  margin = "-mx-1",
}) => {
  return (
    <View
      className={`flex flex-col justify-evenly items-center ${z_index} relative ${position_top} ${margin} border-2 border-gray-800 rounded-lg shadow-md bg-white overflow-hidden px-4 py-5 ${width} ${height}`}
    >
      <Text className="text-sm font-bold text-center mb-2 ">{title}</Text>
      <Text className="text-center font-bold border-2 p-2 rounded-lg ">
        {data}
      </Text>
    </View>
  );
};

// const save = (...args) => {
//   const prefix = `${this.trip.trip_id}${this.vehicle.registration_number}`;
//   this.trip_price_id = prefix.toUpperCase();
//   super.save(...args);
// };

const Trip = ({ navigation }) => {
  const no_of_vehicles = useSelector((state) => state.driver.no_of_vehicles);
  const user_token = useSelector((state) => state.auth.token.access);
  const [no_of_trips,setNoOfTrips] = useState(0);

  const dispatch = useDispatch();
  const [triplocation, setTripLocation] = useState({
    from_location: "",
    to_location: "",
  });
  // const
  const [triplocationdata, setTripLocationData] = useState(null);

  const getLocationFilterData = async () => {
    try {
      const response = await axios.get(`${BASEURL}/driver/tripprice/filter/`,{
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      });
      setNoOfTrips(response.data.count);
      console.log("response get data trip ", response.data);
    }
    catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    // handleGet();

    getLocationFilterData();

  }, []);

  const handleInputChange = (value, name) => {
    setTripLocation({
      ...triplocation,
      [name]: value,
    });
  };

  const handlePost = async () => {
    const message = `
      Data Submitted!
      from : ${triplocation.from_location}
      to : ${triplocation.to_location}
    `;
    // Alert.alert("Data", message);
    try {
      const response = await axios.post(
        `${BASEURL}/driver/tripprice/filter/`,
        triplocation,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user_token}`,
          },
        }
      );
      // console.log("response post data trip ",response.data.data[0]);
      setTripLocationData(response.data.data[0]);
      dispatch(setStoreTripPrice(response.data.data[0]));
      // navigation.navigate("Trip");
    } catch (e) {
      console.log(e);
    }
  };
  // console.log("=====================================")
  // console.log("set trip location", triplocation)
  // console.log("=====================================")

    // if (triplocation !== null) {
    //   const { price } = triplocationdata;
    //   const { from_location, to_location, start_datetime, end_datetime } =
    //     triplocationdata.trip;
    //   // const {}
    //   console.log("=====================================");
    //   console.log("price", triplocationdata.trip.from_location);
    //   console.log("=====================================");
    // }

  return (
    <View className="bg-zinc-50 flex flex-col justify-center items-stretch ">
      {/* top design  */}
      <View className="bg-slate-500 h-32 absolute top-0 right-0 left-0 rounded-b-3xl"></View>

      <View className=" flex my-5 flex-row flex-nowrap justify-center items-center ">
        <Card title="No Of Trips" position_top="top-6" data={no_of_trips} />
        <Card
          title="No Of Vehicles"
          position_top="top-8"
          data={no_of_vehicles}
        />
        <Card
          title="Today's Date"
          position_top="top-6"
          z_index="z-0"
          data={new Date().toLocaleDateString()}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateTrip")}
        className="my-6 border-2 border-gray-600 flex-row justify-center items-center"
      >
        <PlusCircleIcon color="black" size={36} />
        <Text className="text-center text-lg font-bold">Create Trip</Text>
      </TouchableOpacity>

      <View
        className="w-full self-center mx-2 bg-gray-400 pt-2"
        style={{ height: "53%" }}
      >
        {/* search from to  */}
        <View className="w-full">
          <View className=" w-3/4 self-center">
            <View className="mt-2">
              <TextInput
                placeholder="From"
                className="text-center bg-white text-slate-900 text-lg border-2 rounded-xl p-0.5 "
                value={triplocation.from_location}
                onChangeText={(value) =>
                  handleInputChange(value, "from_location")
                }
              />
            </View>
            <View className="mt-2">
              <TextInput
                placeholder="To"
                className="text-center bg-white  text-slate-900 text-lg border-2 rounded-xl p-0.5 "
                value={triplocation.to_location}
                onChangeText={(value) =>
                  handleInputChange(value, "to_location")
                }
              />
            </View>
            <View className="mt-2 w-1/2 self-center border-red-500 border-2 rounded-lg ">
              <Button className="bg-none" title="Search" onPress={handlePost} />
            </View>
          </View>
          <Text className="font-semibold mt-2 text-gray-50 ">
            Trip At this Date: {new Date().toLocaleDateString()}
          </Text>

          {/* details about the trip */}
          <View className="h-1/2 mt-2 bg-slate-600">
            <View className="w-2/3 rounded-lg bg-slate-700">
              <Text className="font-semibold text-center text-gray-100 p-1 ">
                {triplocationdata!== null ?  triplocationdata.trip.from_location.toUpperCase() + " to " + triplocationdata.trip.to_location.toUpperCase()  : "Janakpur to Kathmandu" }  
              </Text>
            </View>
            <View className="h-1 w-3/4 bg-red-500 mt-1 rounded-lg"></View>
            <View>
              <Text className="font-bold text-sm text-white">
              {triplocationdata!==null? triplocationdata.vehicle.company_made +',' + triplocationdata.vehicle.model + " - " + triplocationdata.vehicle.registration_number  : "Toyta, Sienna (ABC123WXY)" }
                
              </Text>
              <View className=" flex my-5 flex-row flex-nowrap justify-center items-center  ">
                <Card
                  title="Passenger"
                  position_top="top-0"
                  data={10}
                  width="w-1/3"
                  height="h-26"
                  margin="mx-0"
                />
                <Card
                  title="Departure"
                  position_top="top-0"
                  data={triplocationdata!==null? triplocationdata.trip.start_datetime.split('T')[1].split('+')[0] :"7:00 AM"}
                  width="w-1/3"
                  height="h-26"
                  margin="mx-1"
                />
                <Card
                  title="Arrival"
                  position_top="top-0"
                  z_index="z-0"
                  data={triplocationdata!==null? triplocationdata.trip.end_datetime.split('T')[1].split('+')[0] :"7:00 PM"}
                  width="w-1/3"
                  height="h-26"
                  margin="mx-0"
                />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => alert("passenger list")}
          className="border-2 p-0.5 w-1/2 self-center rounded-full "
        >
          <Text className="font-bold text-lg text-center">Passenger List</Text>
        </TouchableOpacity>
      </View>

      <Menu
        navigation={navigation}
        icon_size_L={32}
        icon_size_N={32}
        icon_size_H={36}
        icon_size_A={32}
        icon_size_P={32}
      />
    </View>
  );
};

export default Trip;
