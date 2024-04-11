import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Menu } from "../Home/Home";
import { PlusCircleIcon } from "react-native-heroicons/outline";
import { Button } from "react-native";
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
      <Text className="text-center font-bold border-2 p-2 rounded-lg ">{data}</Text>
    </View>
  );
};

const Trip = ({ navigation }) => {
  return (
    <View className="bg-zinc-50 flex flex-col justify-center items-stretch ">
      {/* top design  */}
      <View className="bg-slate-500 h-32 absolute top-0 right-0 left-0 rounded-b-3xl"></View>

      <View className=" flex my-5 flex-row flex-nowrap justify-center items-center ">
        <Card title="No Of Trips" position_top="top-6" data={7} />
        <Card title="No Of Vehicles" position_top="top-8" data={2} />
        <Card
          title="Today's Date"
          position_top="top-6"
          z_index="z-0"
          data="Nov 5,2024"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("CreateTrip")}
        className="my-6 border-2 border-gray-600 flex-row justify-center items-center"
      >
        <PlusCircleIcon color="black" size={36} />
        <Text className="text-center text-lg font-bold">Create Trip</Text>
      </TouchableOpacity>


      <View className="w-full self-center mx-2 bg-gray-400 pt-2" style={{height:'53%'}}>
        {/* search from to  */}
        <View className="w-full">
          <View className=" w-3/4 self-center">
            <View className="mt-2">
              <TextInput
                placeholder="From"
                className="text-center bg-white text-gray-50 font-bold text-xl border-2 rounded-xl p-0.5 "
              />
            </View>
            <View className="mt-2">
              <TextInput
                placeholder="To"
                className="text-center bg-white text-gray-50 font-bold text-xl border-2 rounded-xl p-0.5 "
              />
            </View>
            <View className="mt-2 w-1/2 self-center border-red-500 border-2 rounded-lg ">
              <Button
                className="bg-none"
                title="Search"
                onPress={() => alert("search")}
              />
            </View>
          </View>
          <Text className="font-semibold mt-2 text-gray-50 ">
            Trip At this Date: Nov 5,2024
          </Text>

          {/* details about the trip */}
          <View className="h-1/2 mt-2 bg-slate-600">
            <View className="w-2/3 rounded-lg bg-slate-700">
              <Text className="font-semibold text-center text-gray-100 p-1 ">
                Janakpur to Kathmandu
              </Text>
            </View>
            <View className="h-1 w-3/4 bg-red-500 mt-1 rounded-lg"></View>
            <View>
              <Text className="font-bold text-sm text-white">
                Toyta, Sienna (ABC123WXY)
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
                  data="7:00 AM"
                  width="w-1/3"
                  height="h-26"
                  margin="mx-1"
                />
                <Card
                  title="Arrival"
                  position_top="top-0"
                  z_index="z-0"
                  data="5:00 Pm"
                  width="w-1/3"
                  height="h-26"
                  margin="mx-0"
                />
              </View>
            </View>
          </View>
        </View>


          <TouchableOpacity onPress={()=>alert("passenger list")} className="border-2 p-0.5 w-1/2 self-center rounded-full ">
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
