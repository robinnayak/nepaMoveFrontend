import { View, Text } from "react-native";
import { Menu } from "../Home/Home";

const Ai = ({navigation}) => {
  
  return (
    <View>
      <Text>Ai coming soon!!!</Text>
      <Menu
        navigation={navigation}
        icon_size_L={32}
        icon_size_N={32}
        icon_size_H={32}
        icon_size_A={36}
        icon_size_P={32}
      />
    </View>
  );
};

export default Ai;
