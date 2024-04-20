import { View, Text, Image, Dimensions, Button } from "react-native";
import { Menu } from "../Home/Home";
import SeatIcon from "./SeatIcon";
// import Carousel from "react-native-snap-carousel";
import Van from "../../assets/images/van.png";
import axios, { Axios } from "axios";
import { useGetDataQuery } from "../../app/features/auth/authApi";
import { useSelector, useDispatch } from "react-redux";
import { useGetPokemonByNameQuery } from "../../app/features/pokemon/pokemon";
import { useGetDriverDataQuery } from "../../app/features/driver/driverApi";
import { useEffect, useState } from "react";
import { BASEURL, Driver } from "../../services/Baseurl";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width: windowWidth } = Dimensions.get("window");

const Slider = () => {
  const [activeStatus, setActiveStatus] = useState(0);
  const data = [
    {
      id: 1,
      image: Van,
    },
    {
      id: 2,
      image: Van,
    },
    {
      id: 3,
      image: Van,
    },
    {
      id: 4,
      image: Van,
    },
    {
      id: 5,
      image: Van,
    },
    {
      id: 6,
      image: Van,
    },
    {
      id: 7,
      image: Van,
    },
    {
      id: 8,
      image: Van,
    },
    {
      id: 9,
      image: Van,
    },
    {
      id: 10,
      image: Van,
    },
  ];
};

// count = useSelector((state) => state.counter.value);
const renderItem = ({ item }) => {
  return (
    <View>
      <Image
        source={item.image}
        style={{ width: windowWidth - 40, height: 200 }}
      />
    </View>
  );
};
const Booking = ({ navigation }) => {
  const [access_token, setAccessToken] = useState("");
  const token = useSelector((state) => state.auth.token.access);
  const token_auth = useSelector((state) => state.auth);
  // console.log("token in booking ", token);
  // console.log("token auth in booking ", token_auth);
  // useEffect(() => {
  //   //====================== asyncstorage get token==================
  //   (async () => {
  //     const token = await AsyncStorage.getItem("jwtToken");
  //     const jwtToken = JSON.parse(token);
  //     const access = jwtToken.access;
  //     setAccessToken(access);
  //     console.log("async storage token", token);
  //     console.log("async storage jwt token", jwtToken);
  //     console.log("async storage token access", access);
  //     console.log("async storage token access", access_token);
  //     const getDriverData = async () => {
  //       try {
  //         console.log("async storage token access second", access);
  //         // console.log("token key : ", route.params.token);
  //         const res = await axios.get(BASEURL + "driver/", {
  //           headers: {
  //             Authorization: `Bearer ${access}`,
  //           },
  //         });
  //         console.log("driver data in booking page", res.data);
  //       } catch (err) {
  //         console.log("driver error", err);
  //       }
  //     };
  //     getDriverData();
  //   })();
  // }, []);
  const license_num = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  return (
    <View>
      {/* <Carousel 
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth-40}
        onSnapToItem={(index) => setActiveStatus(index)}

      /> */}
      <View>
        {license_num.map((item, index) => {
          return (
            <View key={index}>
              <Text>{item}</Text>
            </View>
          );
        }
        )}  
       </View>

      <Button title="fetch pokemon" onPress={() => handleDriverData()} />
      <SeatIcon seat={4} />
      <Text>Booking</Text>
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

export default Booking;
