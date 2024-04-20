import React, { useEffect, useState } from "react";
import { UserIcon as UserIconOutline } from "react-native-heroicons/outline";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Menu, StarRatingIcon } from "../Home/Home";
import { BookOpenIcon } from "react-native-heroicons/outline";
import Van from "../../assets/images/van.png";
import Profile1 from "../../assets/images/Profile/profile 1.jpg";
import {
  IdentificationIcon,
  CurrencyDollarIcon,
  TruckIcon,
  CalendarDaysIcon,
  CalendarIcon,
} from "react-native-heroicons/outline";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import SeatIcon from "../Trip/SeatIcon";
import { BASEURL } from "../../services/Baseurl";
import {
  setNoOfVehicles,
  setvehicles,
} from "../../app/features/driver/driverSlice";
// SeatsIcon component
const SeatsIcon = ({ color, seating_capacity = 0, available_seat = 0 }) => {
  return (
    <View
      id="Seat"
      className="w-4/5 self-center my-5 h-3/4 flex flex-row flex-wrap items-center pt-6 shadow-md shadow-slate-600"
    >
      {/* Top row */}
      <View className="w-full flex flex-row justify-evenly">
        <SeatIcon color={"green"} />
        <SeatIcon color={"red"} />
      </View>

      {/* 2nd row */}
      <View className="w-full flex flex-row justify-evenly">
        <SeatIcon color={"green"} />
        <View className="flex flex-row">
          <SeatIcon color={"green"} />
          <SeatIcon color={"green"} />
        </View>
      </View>

      {/* 3rd row */}
      <View className="w-full flex flex-row justify-evenly">
        <SeatIcon color={"yellow"} />
        <View className="flex flex-row">
          <SeatIcon color={"green"} />
          <SeatIcon color={"green"} />
        </View>
      </View>

      {/* 4th row */}
      <View className="w-full flex flex-row justify-evenly">
        <SeatIcon color={"yellow"} />
        <View className="flex flex-row">
          <SeatIcon color={"yellow"} />
          <SeatIcon color={"yellow"} />
        </View>
      </View>

      {/* 5th row */}
      <View className="w-full flex flex-row justify-center">
        <SeatIcon color={"yellow"} />
        <SeatIcon color={"yellow"} />
        <SeatIcon color={"yellow"} />
        <SeatIcon color={"yellow"} />
      </View>

      {/* Seat marks */}
      <View className="shadow-sm shadow-red-100 flex flex-row justify-center">
        <SeatMark
          color="text-green-600"
          title="Booked"
          bg_color="bg-green-500"
        />
        <SeatMark
          color="text-yellow-300"
          title="Availability"
          bg_color="bg-yellow-400"
        />
        <SeatMark color="text-red-300" title="Driver" bg_color="bg-red-400" />
      </View>

      {/* Seating capacity and availability */}
      <View className="shadow-sm shadow-red-100 flex flex-row justify-center self-center border-t-1 rounded-b-lg w-full">
        <View className="flex flex-row justify-evenly items-center">
          <Text className="text-red-100 rounded-full p-1 self-center mx-2 text-lg font-semibold">
            {seating_capacity}
          </Text>
          <Text className="text-red-100 p-1 text-center text-lg font-semibold">
            Capacity
          </Text>
        </View>
        <View className="flex flex-row justify-evenly">
          <Text className="text-red-100 rounded-full p-1 self-center mx-2 text-lg font-semibold">
            {available_seat}
          </Text>
          <Text className="text-red-100 p-1 text-center text-lg font-semibold">
            Available
          </Text>
        </View>
      </View>
    </View>
  );
};

// SeatMark component
const SeatMark = ({
  color = "text-green-600",
  title = "Default",
  bg_color = "bg-green-500",
}) => {
  return (
    <View className="flex flex-row justify-evenly mt-3 ml-3">
      <View
        className={`${bg_color} w-4 h-4 rounded-full p-1 self-center mx-2`}
      ></View>
      <Text className={`${color} p-1 text-center`}>{title}</Text>
    </View>
  );
};

// Detail component
const Detail = ({ name, icon }) => {
  return (
    <View className="w-full border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-center items-center">
      <Text className="self-center">{icon}</Text>
      <Text className="text-center text-sm text-red-100 mx-3">{name}</Text>
    </View>
  );
};

// VehicleInfo component
// const VehicleInfo = ({ userVehicleInfo }) => {
const VehicleInfo = ({ userVehicleInfo }) => {
  // Extract necessary data from userVehicleInfo
  const {
    driver,
    registration_number,
    vehicle_type,
    company_made,
    model,
    age,
    color,
    seating_capacity,
    license_plate_number,
    available_seat,
    insurance_expiry_date,
  } = userVehicleInfo.data;
  const { rating } = driver;
  const { username, email, phone_number, is_driver } = driver.user;
  
  return (
    <View className="border-2 w-4/5 self-center my-5 h-3/4 flex flex-row flex-wrap items-center pt-6 shadow-md shadow-slate-600">
      {/* Driver details */}
      <View className="flex-row justify-center gap-5 align-center mx-1">
        <View className="border-4 overflow-hidden border-sky-200 rounded-3xl h-40">
          <Image
            source={Profile1}
            className="h-20 rounded-3xl"
            style={{
              width: 100,
              height: 130,
              borderRadius: 20,
            }}
          />
        </View>

        <View className="flex-1 rounded-3xl p-3 flex-column align-center justify-evenly">
          {/* Driver name */}
          <Detail
            name={username.toUpperCase() || "Driver Name"}
            icon={<UserIconOutline color="white" size={20} />}
          />
          {/* Registration number */}
          <Detail
            name={registration_number.toUpperCase() || "N/A"}
            icon={<IdentificationIcon color="white" size={20} />}
          />
          {/* Model name and type */}
          <Detail
            name={`${company_made} ${model}` || "N/A"}
            icon={<TruckIcon color="white" size={20} />}
          />
          {/* Driver age */}
          <Detail
            name={age || "N/A"}
            icon={<CalendarDaysIcon color="white" size={20} />}
          />
          {/* Insurance expiry date */}
          <Detail
            name={insurance_expiry_date || "N/A"}
            icon={<CalendarIcon color="white" size={20} />}
          />
        </View>
      </View>

      {/* Other vehicle information */}
      <View className="flex-column justify-center items-center w-full">
        {/* Today's earnings */}
        <Detail
          name="NPR 7200 - 6 passengers"
          icon={<CurrencyDollarIcon color="white" size={20} />}
        />

        <View className="flex-row justify-evenly items-center w-64 mt-5">
          <StarRatingIcon
            rating={rating}
            fill_color="red"
            border_color="white"
          />
        </View>
        <Text className="font-bold text-sm text-center mt-2 text-red-100">
          {rating} Star
        </Text>
      </View>
    </View>
  );
};

// Vehicle component
const Vehicle = ({ navigation }) => {
  const [is_seat, setSeat] = useState(true);
  const [userVehicleInfo, setUserVehicleInfo] = useState(null);
  const [FilterInfo, setFilterInfo] = useState(null);
  const username = useSelector((state) => state.auth.username);
  const user_token = useSelector((state) => state.auth.token.access);
  const [license_plate_num, setLicensePlateNum] = useState([]);
  const image_path = [];
  const [registration_number, setRegistrationNumber] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [company_made, setCompanyMade] = useState("");
  const [model, setModel] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [seating_capacity, setSeatingCapacity] = useState("");
  const [available_seat, setAvailableSeat] = useState("");
  const [insurance_expiry_date, setInsuranceExpiryDate] = useState("");
  const [driver, setDriver] = useState("");
  const [rating, setRating] = useState("");
  const [driver_username, setUsername] = useState("");
  const [driver_email, setEmail] = useState("");
  const [driver_phone_number, setPhoneNumber] = useState("");
  const [no_vehicles, setNoVehicles] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    const getUserVehicleFilterInfo = async () => {
      try {
        console.log("username from vehicle page", username)
        console.log("username from vehicle page", user_token)
        const response = await axios.get(
          `${BASEURL}driver/vehicle/filter/${username}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user_token}`,
            },
          }
        );
        addData(response.data);
        setFilterInfo(response.data);
        dispatch(setvehicles(response.data.data || []))
        setNoVehicles(response.data.No_of_vehicles);
      } catch (err) {
        console.error(err);
        setFilterInfo(null);
      }
    };
    getUserVehicleFilterInfo();
  }, []);

  const addData = (filter_data) => {
    console.log(no_vehicles);

    if (filter_data.data) {
      filter_data.data.map((data) => {
        license_plate_num.push(data.license_plate_number);
        image_path.push(data.image_path);
      });
    }
    console.log("license plate num", license_plate_num);
  };

  const handleVehicle = async (license_plate_number) => {
    try {
      const response = await axios.get(
        `${BASEURL}driver/vehicle/${license_plate_number}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user_token}`,
          },
        }
      );
      setUserVehicleInfo(response.data);
      setRegistrationNumber(response.data.data.registration_number);
      setVehicleType(response.data.data.vehicle_type);
      setCompanyMade(response.data.data.company_made);
      setModel(response.data.data.model);
      setAge(response.data.data.age);
      setColor(response.data.data.color);
      setSeatingCapacity(response.data.data.seating_capacity);
      setAvailableSeat(response.data.data.available_seat);
      setInsuranceExpiryDate(response.data.data.insurance_expiry_date);
      setDriver(response.data.data.driver);
      setRating(response.data.data.driver.rating);
      setUsername(response.data.data.driver.user.username);
      setEmail(response.data.data.driver.user.email);
      setPhoneNumber(response.data.data.driver.user.phone_number);

      console.log("user vehicle info", response.data);
    } catch (err) {
      console.error(err);
    }
    // try{
    //   dispatch(setNoOfVehicles(no_of_vehicles=no_vehicles));
    // }
    // catch(err){
    //   console.error(err);
    // }
  };
  // console.log("=====================================")
  // console.log("no of vehicles", no_of_vehicles);
  // console.log("=====================================")

  // console.log("=====================================")
  // console.log("user vehicle info", registration_number);
  // console.log("user vehicle info", vehicle_type);
  // console.log("user vehicle info", company_made);
  // console.log("user vehicle info", model);
  // console.log("user vehicle info", age);
  // console.log("user vehicle info", color);
  // console.log("user vehicle info", seating_capacity);
  // console.log("user vehicle info", available_seat);
  // console.log("user vehicle info", insurance_expiry_date);
  // console.log("user vehicle info", driver);
  // console.log("user vehicle info", rating);
  // console.log("user vehicle info", driver_username);
  // console.log("user vehicle info", driver_email);
  // console.log("user vehicle info", driver_phone_number);
  // console.log("=====================================")

  return (
    <SafeAreaView className="min-h-full bg-slate-900">
      {/* Vehicle image and view buttons */}
      <View className="bg-slate-800 h-1/3 flex-col justify-center items-start shadow-lg rounded-b-lg">
        <Image
          source={Van}
          style={{
            marginTop: "2.5%",
            width: "85%",
            height: "70%",
          }}
        />
        <View className="flex flex-row justify-center">
          {license_plate_num.map((plateNum, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleVehicle(plateNum)}
              className="border-2 border-gray-600 w-1/3 self-center mt-1 rounded-full bg-slate-900"
            >
              <Text className="text-center text-lg text-gray-200">View</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Seat and info section */}
      <View className="h-1/2 shadow-xl mt-2">
        <View className="rounded-lg bg-slate-700 mt-2">
          <Text className="font-bold text-center text-lg text-gray-100 p-2">
            Janakpur to Kathmandu
          </Text>
        </View>

        {/* Seat and info buttons */}
        <View className="flex flex-row flex-wrap gap-1 relative top-0.5 left-2">
          <TouchableOpacity
            onPress={() => setSeat(true)}
            className="border-2 border-gray-600 w-1/3 mt-1 bg-slate-900"
          >
            <Text className="text-center text-lg font-bold text-white p-1">
              Seat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSeat(false)}
            className="border-2 border-gray-600 w-1/3 mt-1 bg-slate-900"
          >
            <Text className="text-center text-lg font-bold text-white p-1">
              Info
            </Text>
          </TouchableOpacity>
        </View>

        {/* Render SeatsIcon or VehicleInfo based on is_seat */}
        {is_seat ? (
          <SeatsIcon
            seating_capacity={seating_capacity}
            available_seat={available_seat}
          />
        ) : (
          <VehicleInfo userVehicleInfo={userVehicleInfo} />
        )}
      </View>

      {/* Menu component */}
      <Menu
        navigation={navigation}
        icon_size_L={32}
        icon_size_N={32}
        icon_size_H={36}
        icon_size_A={32}
        icon_size_P={32}
      />
    </SafeAreaView>
  );
};

export default Vehicle;
