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
import { UserIcon as UserIconOutline } from "react-native-heroicons/outline";
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
} from "react-native-heroicons/outline";

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

const StarRatingIcon = ({ fill_color, border_color }) => {
  return (
    <View>
      <Text className="pt-1">
        <StarIcon
          fill={fill_color}
          size={24}
          color={border_color}
          strokeWidth={2}
        />
      </Text>
    </View>
  );
};
const UserProfileDetails = () => {
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
            <Text className="text-center text-sm">Samitha Thapa</Text>
          </View>
          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              <IdentificationIcon fill="black" size={20} />
            </Text>
            <Text className="text-center text-sm">ABC123WXY</Text>
          </View>
          <View className=" border-2 border-sky-500 rounded-3xl text-center p-1 flex-row justify-evenly items-center ">
            <Text className="self-center">
              {/* <CurrencyRupeeIcon fill="red" size={20} /> */}
              <CurrencyDollarIcon color="black" size={20} />
            </Text>
            <Text className="text-center text-sm">NPR 15000</Text>
          </View>
        </View>
      </View>
      <View className="flex-column justify-center items-center">
        <View className="flex-row justify-evenly items-center w-64">
          <StarRatingIcon fill_color="red" border_color="black" />
          <StarRatingIcon fill_color="red" border_color="black" />
          <StarRatingIcon fill_color="red" border_color="black" />
          <StarRatingIcon fill_color="red" border_color="black" />
          <StarRatingIcon fill_color="white" border_color="black" />
        </View>
        <Text className="font-bold text-sm text-center mt-2 "> 4 Star</Text>
      </View>
    </View>
  );
};

// ======================small details ========================

const SmallDetail = () => {
  return (
    <View className="border-2 w-full h-1/4 mt-5">
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
}) => {
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
      {/* <TouchableOpacity onPress={() => navigation.navigate("Profile")}> */}
      <TouchableOpacity onPress={()=>alert("UserProfile is clicked")}>
        <Text className="border-2 rounded-2xl p-1 text-center self-center justify-self-center min-h-fit">
          <UserIconOutline fill="black" size={icon_size_P} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <View className="min-h-screen bg-white ">
      <UserProfileDetails />
      <SmallDetail />
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
      />
    </View>
  );
};

export default Home;
export { Card, Menu, StarRatingIcon };
