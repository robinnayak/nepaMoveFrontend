import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile1 from "../../../assets/images/Profile/profile 1.jpg";
import {
  UserIcon as UserIconOutline,
  ArrowLeftStartOnRectangleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import {
  IdentificationIcon,
  CurrencyRupeeIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  StarIcon,
  TruckIcon,
  CalendarIcon,
  MapPinIcon,
  BellAlertIcon,
  CpuChipIcon,
  HomeIcon,
  PhoneIcon,
} from "react-native-heroicons/outline";
import { BASEURL, LOGOUT } from "../../../services/Baseurl";
import axios from "axios";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const styles = StyleSheet.create({
  customButton: {
    width: 100,
    backgroundColor: "#f59e8b",
    borderRadius: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: "#f59e8b",
  },
});

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { setDriverData } from "../../../app/features/driver/driverSlice";
import { setPassengerData } from "../../../app/features/passenger/passengerSlice";
import { isDraft } from "@reduxjs/toolkit";
const StarRatingIcon = ({ rating, fill_color, border_color }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <StarIcon
          key={i}
          fill={fill_color}
          size={24}
          color={border_color}
          strokeWidth={2}
        />
      );
    } else {
      stars.push(
        <StarIcon
          key={i}
          fill="white"
          size={24}
          color={border_color}
          strokeWidth={2}
        />
      );
    }
  }

  return (
    <View>
      <Text className="pt-1">{stars}</Text>
    </View>
  );
};

const UserProfileDetails = ({
  username,
  email,
  total_booking,
  phone_number,
  is_driver,
  emergency_contact_number,
}) => {
  console.log("====================================");
  console.log("username in userprofile", username);
  console.log("email in userprofile", email);
  console.log("total_booking in userprofile", total_booking);
  console.log("phone_number in userprofile", phone_number);
  console.log("is_driver in userprofile", is_driver);
  console.log(
    "emergency_contact_number in userprofile",
    emergency_contact_number
  );
  console.log("====================================");

  return (
    <View className="border-2 border-sky-500 border-t-0 p-10 rounded-b-3xl drop-shadow-2xl ">
      <View className="flex-row justify-center gap-5 align-center">
        <View className="border-4 overflow-hidden border-sky-200 rounded-3xl ">
          <Image
            source={Profile1}
            className="h-20 rounded-3xl"
            style={{
              width: 110,
              height: 140,
              borderRadius: 20,
            }}
          />
        </View>

        <View className=" flex-1 rounded-3xl p-3 flex-column align-center justify-evenly ">
          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              <UserIconOutline fill="black" size={20} />
            </Text>
            <Text className="text-center text-sm">
              {username ? username.toUpperCase() : <Text>Null</Text>}
            </Text>
          </View>
          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              <IdentificationIcon fill="black" size={20} />
            </Text>
            <Text className="text-center text-sm">
              {email ? email : <Text>Null</Text>}
            </Text>
          </View>
          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              {/* <CurrencyRupeeIcon fill="red" size={20} /> */}
              <CurrencyDollarIcon color="black" size={20} />
            </Text>
            <Text className="text-center text-sm">
              Bookings {total_booking ? total_booking : <Text>Null</Text>}
            </Text>
          </View>
          
          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              {/* <CurrencyRupeeIcon fill="red" size={20} /> */}
              <PhoneIcon color="black" size={20} />
            </Text>
            <Text className="text-center text-sm">
              {is_driver ? "is_driver" : <Text>Not Driver</Text>}
            </Text>
          </View>
          
        </View>
      </View>
      <View className="flex-column justify-center items-center">
        <View className="flex-row justify-evenly items-center w-64">
          <StarRatingIcon
            rating={Math.round(4)}
            fill_color="red"
            border_color="black"
          />
        </View>
        <Text className="font-bold text-sm text-center mt-2 ">
          {" "}
          {Math.round(4)} Star
        </Text>
      </View>
    </View>
  );
};

// ======================small details ========================

const SmallDetail = ({ navigation }) => {
  return (
    <View className="border-2 w-full h-1/4 mt-5">
      <TouchableOpacity
        onPress={() => navigation.navigate("AddVehicle")}
        className="my-6 border-2 border-gray-600 flex-row justify-center items-center"
      >
        <PlusCircleIcon color="black" size={36} />
        <Text className="text-center text-lg font-bold">Add Vehicle</Text>
      </TouchableOpacity>

      <Text>Small Details</Text>
    </View>
  );
};

// ====================== Card ========================
// need to mode this in common component
const Card = ({
  title,
  width = "w-32",
  height = "h-40",
  position_top = "top-0",
  z_index = "z-10",
  icon,
  navigation,
}) => {
  return (
    <View
      className={`flex flex-col justify-evenly items-center ${z_index} relative ${position_top} -mx-1 border-2 border-gray-800 rounded-lg shadow-md bg-white overflow-hidden px-4 py-5 ${width} ${height}`}
    >
      <Text className="text-lg font-bold text-center mb-2 ">{icon}</Text>
      <Button
        title={title}
        onPress={() => navigation.navigate(title)}
        style={styles.customButton}
      />
    </View>
  );
};
// ====================== Menu ========================
const Menu = ({
  navigation,
  icon_size_L,
  icon_size_N,
  icon_size_H,
  icon_size_A,
  icon_size_P,
  is_driver,
}) => {
  const handleLogout = () => {
    const logout = async () => {
      try {
        const response = await axios.get(BASEURL + LOGOUT);
        if (response.data.is_logout) {
          console.log(response.data);
          navigation.navigate("Login");
        }
      } catch (error) {
        console.log(error);
      }
    };
    logout();
  };
  return (
    <View className=" border-2 border-red-100 top-10 max-h-full bg-white drop-shadow-lg p-4 flex flex-row justify-evenly items-center ">
      <TouchableOpacity onPress={() => navigation.navigate("Location")}>
        <Text className="border-2 rounded-2xl p-1 text-center self-center justify-self-center min-h-fit ">
          <MapPinIcon fill="black" size={icon_size_L} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
        <Text className="border-2 rounded-2xl p-1 text-center self-center justify-self-center min-h-fit">
          <BellAlertIcon fill="black" size={icon_size_N} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text className="border-2 rounded-2xl p-1 text-center self-center justify-self-center min-h-fit">
          <HomeIcon fill="black" size={icon_size_H} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ai")}>
        <Text className="border-2 rounded-2xl p-1 text-center self-center justify-self-center min-h-fit">
          <CpuChipIcon color="black" size={icon_size_A} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile", {
        is_driver: is_driver,
      })}>
        {/* <TouchableOpacity onPress={() => alert("UserProfile is clicked")}> */}
        <Text className="border-2 rounded-2xl p-1 text-center self-center justify-self-center min-h-fit">
          <UserIconOutline fill="black" size={icon_size_P} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleLogout()}>
        <Text className="border-2 rounded-2xl p-1 text-center self-center justify-self-center min-h-fit">
          <ArrowLeftStartOnRectangleIcon color={"black"} size={icon_size_P} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const PassengerHomeScreen = ({ navigation }) => {
  // const token = useSelector((state) => state.auth.token.access);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    msg: "",
    user: {
      user: {
        username: "",
        email: "",
        phone_number: "",
        is_driver: false,
      },
      phone_number: "",
      address: "",
      emergency_contact_name: "",
      emergency_contact_number: "",
      date_of_birth: null,
      preferred_language: "",
    },
  });
  const [user_n, setUserN] = useState("");
  useEffect(() => {
    //====================== asyncstorage get token==================
    (async () => {
      try {
        const data = await AsyncStorage.getItem("loginData");

        const loginData = JSON.parse(data);
        const access = loginData.token.access;
        const username = loginData.username;
        // console.log("login data in home page", loginData);
        console.log("access in home page", access);
        console.log("username home page", username);
        setUserN(username);
        // console.log("====================================");
        // console.log("async storage data from home", data);
        // console.log("====================================");
        // console.log("async storage logindata", loginData);
        // console.log("async storage logindata", access);
        // console.log("async storage jwt token", username);

        const getPassengerData = async () => {
          try {
            console.log("username in home page", user_n);
            // console.log("access in home page", access);
            const res = await axios.get(
              BASEURL + `passenger/profile/${user_n}`,
              {
                headers: {
                  Authorization: `Bearer ${access}`,
                },
              }
            );

            console.log("passenger data in home page", res.data);
            setData(res.data);
            dispatch(setPassengerData(res.data.user));
          } catch (err) {
            console.log("driver error", err);
          }
        };
        getPassengerData();
      } catch (error) {
        console.log("async storage error", error);
      }
    })();
  }, [user_n]);
  const { email, is_driver } = data.user.user;
  const {
    phone_number,
    address,
    emergency_contact_name,
    emergency_contact_number,
  } = data.user;
  console.log("====================================");
  console.log("email in home", email);
  console.log("driver in home", is_driver);
  console.log("====================================");

  return (
    <View className="min-h-screen bg-white ">
      <UserProfileDetails
        username={user_n}
        email={email}
        total_booking={7}
        phone_number={phone_number}
        is_driver={is_driver}
        emergency_contact_number={emergency_contact_number}
      />
      <SmallDetail navigation={navigation} />
      <View className=" flex my-5 flex-row flex-nowrap justify-center items-center  ">
        <Card
          title="Trip"
          navigation={navigation}
          position_top="top-12"
          z_index="z-0"
          icon={<ArrowTrendingUpIcon fill="black" size={50} color="black" />}
        />
        <Card
          title="Vehicle"
          navigation={navigation}
          width="w-36"
          icon={<TruckIcon fill="black" size={50} color="black" />}
        />
        <Card
          navigation={navigation}
          title="Booking"
          position_top="top-12"
          z_index="z-0"
          icon={<CalendarIcon fill="black" size={50} color="black" />}
        />
      </View>
      <Menu
        navigation={navigation}
        icon_size_L={32}
        icon_size_N={32}
        icon_size_H={36}
        icon_size_A={32}
        icon_size_P={32}
        is_driver={is_driver}
      />
    </View>
  );
};

export default PassengerHomeScreen;
export { Card, Menu, StarRatingIcon };
