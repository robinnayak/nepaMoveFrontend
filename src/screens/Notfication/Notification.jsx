import { View, Text } from "react-native";
import { Menu } from "../Home/Home";

const Notification = ({navigation}) => {
  return (
    <View>
      <Text>Notification coming soon!!</Text>
      <Menu
        navigation={navigation}
        icon_size_L={32}
        icon_size_N={36}
        icon_size_H={32}
        icon_size_A={32}
        icon_size_P={32}
      />
    </View>
  );
};

export default Notification;
