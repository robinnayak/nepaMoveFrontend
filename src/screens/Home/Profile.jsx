import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import axios from "axios";
import { BASEURL, Driver, LOGOUT } from "../../services/Baseurl";
import { Menu } from "./Home";
import { useSelector } from "react-redux";
import Profile1 from "../../assets/images/Profile/profile 1.jpg";
import {
  UserIcon as UserIconOutline,
  ArrowLeftStartOnRectangleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import {
  IdentificationIcon,
  CurrencyRupeeIcon,
  CurrencyDollarIcon,
  InboxArrowDownIcon,
  StarIcon,
  HomeModernIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  CalendarDaysIcon,
} from "react-native-heroicons/outline";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    marginBottom: 20,
  },
  username: {
    color: "purple",
  },
  driverProfile: {
    // Styles for the driver profile
  },
  passengerProfile: {
    // Styles for the passenger profile
  },
  dataItem: {
    fontSize: 14,
    marginBottom: 10,
  },
});

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

const UserProfileDetails = ({ data, username }) => {
  // console.log("redux data testing", driver_info.user);
  console.log("data user", data);
  // console.log("phone_number", phone_number);
  // console.log("license_number", license_number);
  // console.log("earnings", earnings);

  const {email,is_driver} = data.user;
  const {
    license_number,
    phone_number,
    address,
    date_of_birth,
    driving_experience,
    earnings,
    rating,
    total_rides,
    availability_status,
  } = data;
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
              <InboxArrowDownIcon fill="black" size={20} />
            </Text>
            <Text className="text-center text-sm">
              {email ? email : <Text>Null</Text>}
            </Text>
          </View>

          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              <IdentificationIcon fill="black" size={20} />
            </Text>
            <Text className="text-center text-sm">{license_number}</Text>
          </View>

          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              <HomeModernIcon fill="black" size={20} />
            </Text>
            <Text className="text-center text-sm">{address}</Text>
          </View>

          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              <CalendarDaysIcon fill="black" size={20} />
            </Text>
            <Text className="text-center text-sm">{date_of_birth}</Text>
          </View>

          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              {/* <CurrencyRupeeIcon fill="red" size={20} /> */}
              <CurrencyDollarIcon color="black" size={20} />
            </Text>
            <Text className="text-center text-sm">NPR {earnings}</Text>
          </View>

          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              {/* <CurrencyRupeeIcon fill="red" size={20} /> */}
              <PhoneIcon color="black" size={20} />
            </Text>
            <Text className="text-center text-sm">{phone_number}</Text>
          </View>

          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              {/* <CurrencyRupeeIcon fill="red" size={20} /> */}
              <WrenchScrewdriverIcon color="black" size={20} />
            </Text>
            {is_driver ? (<Text className="text-center text-sm">
              {is_driver ? "Driver" : "Not Driver"}
            </Text>):(<Text className="text-center text-sm">
              "Not Driver"
            </Text>)}
            
          </View>
        </View>
      </View>
      <View className="flex-column justify-center items-center">
        <View className="flex-row justify-evenly items-center w-64">
          <StarRatingIcon
            rating={Math.round(rating)}
            fill_color="red"
            border_color="black"
          />
        </View>
        <Text className="font-bold text-sm text-center mt-2 ">
          {" "}
          {Math.round(rating)} Star
        </Text>
      </View>
    </View>
  );
};

const Profile = ({ route, navigation }) => {

  console.log("profile page route", route.params.is_driver);
  const is_driver = route.params.is_driver;
  const [userData, setUserData] = useState(null);
  const user_token = useSelector((state) => state.auth.token.access);
  const username = useSelector((state) => state.auth.username);
  // console.log("profile page user token",user_token)
  console.log("profile page username", username);

  // const [csrftoken,setCsrfToken] = useState(route.params.token);

  useEffect(() => {
    // console.log("is_driver in profile page", is_driver);
    if (is_driver) {
      getDriverUserData();
    }
    else {
      getPassengerUserData();
    }
    // getDriverUserData();
  }, [user_token]);
  const handleLogout = async () => {
    const res = await axios.get(BASEURL + LOGOUT);
    if (res.data.is_logout) {
      console.log("logout data", res.data);
      navigation.navigate("Login");
    }
  };

  const getPassengerUserData = async () => {
    // localhost:8000/passenger/profile/shen
    try {
      const response = await axios.get(`${BASEURL}passenger/profile/${username}`, {
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      });
      console.log("profile page response data", response.data);
      setUserData(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  const getDriverUserData = async () => {
    try {
      const response = await axios.get(BASEURL + Driver + username, {
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      });
      console.log("profile page response data", response.data);
      setUserData(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <View>
      {userData ? (
        <UserProfileDetails data={userData} username={username} />
      ) : (
        <Text>Loading...</Text>
      )}

      <Button title="logout" onPress={handleLogout} />

      <View>
        <Menu
          navigation={navigation}
          icon_size_L={32}
          icon_size_N={32}
          icon_size_H={32}
          icon_size_A={32}
          icon_size_P={36}
          is_driver={is_driver}
          
        />
      </View>
    </View>
  );
};

export default Profile;
