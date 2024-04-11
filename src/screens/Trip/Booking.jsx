import { View, Text, Image, Dimensions } from "react-native";
import { Menu } from "../Home/Home";
import SeatIcon from "./SeatIcon";
// import Carousel from "react-native-snap-carousel";
import Van from "../../assets/images/van.png";
const { width: windowWidth } = Dimensions.get("window");

const Slider = () => {
  const [activeStatus, setActiveStatus] = useState(0);
  const data = [
    {
      id:1 , image:Van
    },
    {
      id:2 , image:Van
    },
    {
      id:3 , image:Van
    },
    {
      id:4 , image:Van
    },
    {
      id:5 , image:Van
    },
    {
      id:6 , image:Van
    },
    {
      id:7 , image:Van
    },
    {
      id:8 , image:Van
    },
    {
      id:9 , image:Van
    },
    {
      id:10 , image:Van
    },
  ];
};

const renderItem = ({item})=>{
  return (
    <View>
      <Image source={item.image} style={{width:windowWidth-40, height:200}}/>
    </View>
  )
}
const Booking = ({ navigation }) => {
  return (
    <View>
      {/* <Carousel 
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth-40}
        onSnapToItem={(index) => setActiveStatus(index)}

      /> */}

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
