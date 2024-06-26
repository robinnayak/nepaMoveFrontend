import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
import { BASEURL, LOGOUT } from "../../services/Baseurl";
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
import { setDriverData } from "../../app/features/driver/driverSlice";

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
  const driver_info = useSelector((state) => state.driver);
  const { phone_number, license_number, earnings, rating } = driver_info.user;

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
            <Text className="text-center text-sm">{license_number}</Text>
          </View>
          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              <CurrencyDollarIcon color="black" size={20} />
            </Text>
            <Text className="text-center text-sm">NPR {earnings}</Text>
          </View>
          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              <PhoneIcon color="black" size={20} />
            </Text>
            <Text className="text-center text-sm">{phone_number}</Text>
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

// ======================small details ========================

const SmallDetail = ({navigation}) => {
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
  const handleLogout = async () => {
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

  const renderMenuItem = (title, icon, onPress) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text className="border-2 rounded-2xl p-1 text-center self-center justify-self-center min-h-fit">
          {icon}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="border-2 border-red-100 top-10 max-h-full bg-white drop-shadow-lg p-4 flex flex-row justify-evenly items-center">
      {renderMenuItem(
        "Location",
        <MapPinIcon fill="black" size={icon_size_L} />,
        () => navigation.navigate("Location")
      )}
      {renderMenuItem(
        "Notification",
        <BellAlertIcon fill="black" size={icon_size_N} />,
        () => navigation.navigate("Notification")
      )}
      {renderMenuItem(
        "Home",
        <HomeIcon fill="black" size={icon_size_H} />,
        is_driver ? ()=> navigation.navigate("Home") : ()=> navigation.navigate("PassengerHomeScreen") ,

      )}
      {renderMenuItem(
        "Ai",
        <CpuChipIcon color="black" size={icon_size_A} />,
        () => navigation.navigate("Ai")
      )}
      {renderMenuItem(
        "Profile",
        <UserIconOutline fill="black" size={icon_size_P} />,
        () => navigation.navigate("Profile", { is_driver: is_driver })
      )}
      {renderMenuItem(
        "Logout",
        <ArrowLeftStartOnRectangleIcon color={"black"} size={icon_size_P} />,
        handleLogout
      )}
    </View>
  );
};
const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AsyncStorage.getItem("loginData");
        const loginData = JSON.parse(data);
        const access = loginData.token.access;
        const username = loginData.username;
        setUsername(username);

        const res = await axios.get(BASEURL + `driver/${username}`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        setData(res.data);
        dispatch(setDriverData(res.data.user));
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View className="min-h-screen bg-white ">
      <UserProfileDetails data={data} username={username} />
      <SmallDetail navigation={navigation} />
      <View className="flex my-5 flex-row flex-nowrap justify-center items-center">
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
        is_driver={true}
      />
    </View>
  );
};

export default Home;
export { Card, Menu, StarRatingIcon };
