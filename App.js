// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import RegisterScreen from "./src/screens/Auth/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/Auth/LoginScreen";
import HomeScreen from "./src/screens/Home/Home";
import ProfileScreen from "./src/screens/Home/Profile";
import EditScreen from "./src/screens/Home/Edit";
import LocationScreen from "./src/screens/Location/Location";
import NotificationScreen from "./src/screens/Notfication/Notification";
import AiScreen from "./src/screens/AI/Ai";
import TripScreen from "./src/screens/Trip/Trip";
import VehicleScreen from "./src/screens/Trip/Vehicle";
import BookingScreen from "./src/screens/Trip/Booking";
import CrateTrip from "./src/screens/Trip/CrateTrip";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Ai" component={AiScreen} />
        <Stack.Screen name="Trip" component={TripScreen} />
        <Stack.Screen name="Vehicle" component={VehicleScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="CreateTrip" component={CrateTrip} />
        {/* <Stack.Screen name="ai" component={EditScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
