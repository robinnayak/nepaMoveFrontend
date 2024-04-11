import React, { useState } from "react";
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

import SeatIcon from "./SeatIcon";

// =============================================
const SeatsIcon = ({ color }) => {
  return (
    <View
      id="Seat"
      className="w-4/5 self-center my-5 h-3/4 flex flex-row flex-wrap items-center pt-6 shadow-md shadow-slate-600 "
    >
      {/* top row  */}
      <View className=" w-full flex flex-row justify-evenly ">
        <SeatIcon color={"green"} />
        <SeatIcon color={"red"} />
      </View>

      {/* 2nd row */}
      <View className=" w-full flex flex-row justify-evenly">
        <SeatIcon color={"green"} />

        <View className="flex flex-row">
          <SeatIcon color={"green"} />
          <SeatIcon color={"green"} />
        </View>
      </View>

      {/* 3rd row  */}
      <View className=" w-full flex flex-row justify-evenly">
        <SeatIcon color={"yellow"} />
        <View className="flex flex-row">
          <SeatIcon color={"green"} />
          <SeatIcon color={"green"} />
        </View>
      </View>
      {/* 4th row  */}
      <View className=" w-full flex flex-row justify-evenly">
        <SeatIcon color={"yellow"} />

        <View className="flex flex-row">
          <SeatIcon color={"yellow"} />
          <SeatIcon color={"yellow"} />
        </View>
      </View>
      {/* 5th row  */}
      <View className=" w-full flex flex-row justify-center">
        <SeatIcon color={"yellow"} />
        <SeatIcon color={"yellow"} />
        <SeatIcon color={"yellow"} />
        <SeatIcon color={"yellow"} />
        {/* circle */}
      </View>
      <View className="shadow-sm shadow-red-100 flex flex-row justify-center ">
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

      {/* seating capacity and availability seat  */}
      <View className="shadow-sm shadow-red-100 flex flex-row justify-center self-center border-t-1 rounded-b-lg  w-full  ">
        <View className={`flex flex-row justify-evenly items-center`}>
          <Text
            className={` text-red-100 rounded-full p-1 self-center mx-2 text-lg font-semibold `}
          >
            14
          </Text>
          <Text
            className={` text-red-100  p-1 text-center text-lg font-semibold `}
          >
            Capacity
          </Text>
        </View>
        <View className={`flex flex-row justify-evenly`}>
          <Text
            className={` text-red-100 rounded-full p-1 self-center mx-2 text-lg font-semibold `}
          >
            8
          </Text>
          <Text
            className={` text-red-100  p-1 text-center text-lg font-semibold `}
          >
            Available
          </Text>
        </View>
      </View>
    </View>
  );
};

// =======================================

const SeatMark = ({
  color = "text-green-600",
  title = "Dfault",
  bg_color = "bg-green-500",
}) => {
  return (
    <View className={`flex flex-row justify-evenly mt-3 ml-3`}>
      <View
        className={` ${bg_color} w-4 h-4 rounded-full p-1 self-center mx-2 `}
      ></View>
      <Text className={` ${color}  p-1 text-center`}>{title}</Text>
    </View>
  );
};

// ============================info section ==========================

const Detail = ({ name, icon }) => {
  return (
    <View className=" w-full border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-center items-center ">
      <Text className="self-center">{icon}</Text>
      <Text className="text-center text-sm text-red-100 mx-3">{name}</Text>
    </View>
  );
};
const VehicleInfo = () => {
  return (
    <View
      id="Info"
      className="border-2 w-4/5 self-center my-5 h-3/4 flex flex-row flex-wrap items-center pt-6 shadow-md shadow-slate-600 "
    >
      <View className="flex-row justify-center gap-5 align-center mx-1">
        <View className="border-4 overflow-hidden border-sky-200 rounded-3xl h-40 ">
          <Image
            source={Profile1}
            className="h-20 rounded-3xl "
            style={{
              width: 100,
              height: 130,
              borderRadius: 20,
            }}
          />
        </View>

        <View className=" flex-1 rounded-3xl p-3 flex-column align-center justify-evenly ">
          {/* Driver name */}
          <Detail
            name="Samitha Thapa"
            icon={<UserIconOutline color="white" size={20} />}
          />
          {/* register number */}
          <Detail
            name="XYZ1234"
            icon={<IdentificationIcon color="white" size={20} />}
          />
          {/* model name and type  */}
          <Detail
            name="Honda, Civic"
            icon={<TruckIcon color="white" size={20} />}
          />
          {/* driver age */}
          <Detail
            name="33"
            icon={<CalendarDaysIcon color="white" size={20} />}
          />
          {/* license expiry date */}
          <Detail
            name="2024-03-24"
            icon={<CalendarIcon color="white" size={20} />}
          />
        </View>
      </View>
      <View className="flex-column justify-center items-center w-full">
        {/* todays earning  */}
        <Detail
          name="NPR 7200 -6 passengers"
          icon={<CurrencyDollarIcon color="white" size={20} />}
        />

        <View className="flex-row justify-evenly items-center w-64 mt-5">
          <StarRatingIcon fill_color="red" border_color="white" />
          <StarRatingIcon fill_color="red" border_color="white" />
          <StarRatingIcon fill_color="red" border_color="white" />
          <StarRatingIcon fill_color="red" border_color="white" />
          <StarRatingIcon fill_color="white" border_color="white" />
        </View>
        <Text className="font-bold text-sm text-center mt-2 text-red-100 ">
          {" "}
          4 Star
        </Text>
      </View>
    </View>
  );
};

// ============================info section ends ==========================

const Vehicle = ({ navigation }) => {
  const [is_seat, setSeat] = useState(true);
  return (
    <SafeAreaView className="min-h-full bg-slate-900">
      <View className=" bg-slate-800 h-1/3 flex-col justify-center items-start shadow-lg rounded-b-lg">
        <Image
          source={Van}
          style={{
            marginTop: "2.5%",
            width: "85%",
            height: "70%",
          }}
        />

        <TouchableOpacity
          onPress={() => alert("vehicle view ")}
          className="border-2 border-gray-600 flex-row justify-center items-center w-1/3 self-center mt-1 rounded-full bg-slate-900"
        >
          <Text className="text-center text-lg font-bold text-white p-1">
            View
          </Text>
        </TouchableOpacity>
      </View>

      <View className="h-1/2 shadow-xl mt-2">
        <View className="rounded-lg bg-slate-700 mt-2">
          <Text className="font-bold text-center text-lg  text-gray-100 p-2 ">
            Janakpur to Kathmandu
          </Text>
        </View>
        {/* info and seat availability */}
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
            className="border-2 border-gray-600 w-1/3 mt-1  bg-slate-900"
          >
            <Text className="text-center text-lg font-bold text-white p-1">
              Info
            </Text>
          </TouchableOpacity>
        </View>
        {/* ==============seat and info section==============  */}
        {is_seat ? <SeatsIcon /> : <VehicleInfo />}

        {/* <SeatsIcon /> */}
        {/* ==============seat and info section ends==============  */}
      </View>
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
