// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import RegisterScreen from "./src/screens/Auth/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./src/screens/Auth/LoginScreen";
import HomeScreen from "./src/screens/Home/Home";
import ProfileScreen from "./src/screens/Home/Profile";
import EditScreen from "./src/screens/Home/Edit";
import LocationScreen from "./src/screens/Location/LocationTracking";
import NotificationScreen from "./src/screens/Notfication/Notification";
import AiScreen from "./src/screens/AI/Ai";
import TripScreen from "./src/screens/Trip/Trip";
import VehicleScreen from "./src/screens/vehicle/Vehicle";
import BookingScreen from "./src/screens/Trip/Booking";
import CrateTrip from "./src/screens/Trip/CrateTrip";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import AddVehicle from "./src/screens/vehicle/AddVehicle";
// import PassengerHomeScreen from "./src/screens/passengers/screens/Home";
import PassengerHomeScreen from "./src/screens/passengers/screens/PassengerHomeScreen";
import Booking from "./src/screens/passengers/screens/Booking";
import ChooseDestination from "./src/screens/components/screen/ChooseDestination";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
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
          <Stack.Screen name="AddVehicle" component={AddVehicle} />
          <Stack.Screen name="ChooseDestination" component={ChooseDestination} />

          {/* <Stack.Screen name="ai" component={EditScreen} /> */}


          <Stack.Screen name="PassengerHomeScreen" component={PassengerHomeScreen} />
          <Stack.Screen name="PassengerBooking" component={Booking} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
