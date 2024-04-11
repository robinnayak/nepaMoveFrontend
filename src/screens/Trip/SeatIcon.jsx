import { View, Text, Image } from "react-native";
import Seat from "../../assets/images/car.png";
const SeatIcon = ({ seat, color }) => {
  return (
    <Image
      source={Seat}
      style={{
        width: 40,
        height: 40,
        backgroundColor: color,
        marginLeft: 2 ,
        marginTop: 6,
        // opacity: 0.5,
      }}
    />
  );
};
export default SeatIcon;
