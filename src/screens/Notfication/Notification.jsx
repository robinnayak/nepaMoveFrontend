import { Menu } from "../Home/Home";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../../services/Baseurl";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Button, Image } from "react-native-elements";

const DriverNotification = ({ navigation, username, token }) => {
  const [ticketData, setTicketData] = useState([]);

  useEffect(() => {
    getTicketData();
  }, [token]);

  const getTicketData = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}driver/trip/ticket/filter/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("driver ticket response data", response.data.data);
      setTicketData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDownload = (ticket) => {
    // console.log("hendle download",ticket.ticket_file);

    const url = ticket.ticket_file;
    console.log(url);
    Linking.openURL(`http://10.0.2.2:8000/${url}`);
  };

  return (
    <ScrollView className="h-5/6">
      {/* UI for viewing the ticket file */}

      {ticketData.map((ticket) => (
        <View
          key={ticket.booking.booking_id}
          className="shadow-md rounded-lg bg-white p-4 mb-2 "
        >
          <Text className="font-bold text-gray-700">
            {ticket.booking.tripprice.trip.from_location} to{" "}
            {ticket.booking.tripprice.trip.to_location}
          </Text>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">From:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.tripprice.trip.from_location}
            </Text>
          </View>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">To:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.tripprice.trip.to_location}
            </Text>
          </View>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">Passenger:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.passenger.user.username}
            </Text>
          </View>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">Vehicle Type:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.tripprice.vehicle.registration_number}
            </Text>
          </View>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">Total Passenger:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.num_passengers}
            </Text>
          </View>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">Total Price:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.price}
            </Text>
          </View>
          <View className={"flex justify-end mt-2"}>
            {/* <Image source={{ uri: ticket.ticket_file }} style={{ width: 300 }} /> */}
            <Text className="text-slate-500 hover:text-slate-700 cursor-pointer font-bold text-center">
              Download Ticket {ticket.booking.booking_id}
            </Text>
            {/* <button >Download Ticket {ticket.booking.booking_id}</button> */}

            <Button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onPress={() => handleDownload(ticket)}
              title={"Download"}
              
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const PassengerNotification = ({ navigation, username, token }) => {
  const [ticketData, setTicketData] = useState([
    {
      booking: {
        booking_id: "",
        passenger: {
          user: {
            username: "",
            email: "",
            phone_number: "",
            is_driver: false,
          },
          phone_number: "",
          address: "",
          emergency_contact_name: "",
          emergency_contact_number: "",
          date_of_birth: null,
          preferred_language: "",
        },
        tripprice: {
          trip_price_id: "",
          trip: {
            trip_id: "",
            from_location: "",
            to_location: "",
            start_datetime: "",
            end_datetime: "",
          },
          vehicle: {
            driver: {
              user: {
                username: "",
                email: "",
                phone_number: "",
                is_driver: true,
              },
              license_number: "",
              phone_number: "",
              address: "",
              date_of_birth: "",
              driving_experience: 2,
              rating: "",
              total_rides: 0,
              earnings: "",
              availability_status: true,
              last_updated_location: "",
            },
            registration_number: "",
            vehicle_type: "",
            company_made: "",
            model: "",
            age: 0,
            color: "",
            seating_capacity: 0,
            license_plate_number: "",
            insurance_expiry_date: "",
            fitness_certificate_expiry_date: "",
            image: null,
            available_seat: 0,
          },
          price: "",
        },
        num_passengers: 1,
        price: "",
      },
      ticket_file: "",
    },
  ]);

  useEffect(() => {
    getTicketData();
  }, [token]);

  const getTicketData = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}driver/trip/ticket/filter/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTicketData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDownload = (ticket) => {
    // console.log("hendle download",ticket.ticket_file);

    const url = ticket.ticket_file;
    console.log(url);
    Linking.openURL(`http://10.0.2.2:8000/${url}`);
  };

  return (
    <ScrollView className="border-2 h-4/5">
      {/* UI for viewing the ticket file */}

      {ticketData.map((ticket) => (
        <View
          key={ticket.booking.booking_id}
          className="shadow-md rounded-lg bg-white p-4 mb-2 "
        >
          <Text className="font-bold text-gray-700">
            {ticket.booking.tripprice.trip.from_location} to{" "}
            {ticket.booking.tripprice.trip.to_location}
          </Text>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">From:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.tripprice.trip.from_location}
            </Text>
          </View>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">To:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.tripprice.trip.to_location}
            </Text>
          </View>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">Driver:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.tripprice.vehicle.driver.user.username}
            </Text>
          </View>
          <View className="flex flex-row my-2">
            <Text className="text-base text-gray-500">Vehicle Type:</Text>
            <Text className="text-base font-medium text-gray-700">
              {ticket.booking.tripprice.vehicle.vehicle_type}
            </Text>
          </View>
          <View className={"flex justify-end mt-2"}>
            {/* <Image source={{ uri: ticket.ticket_file }} style={{ width: 300 }} /> */}
            <Text className="text-slate-500 hover:text-slate-700 cursor-pointer font-bold text-center">
              Download Ticket {ticket.booking.booking_id}
            </Text>
            {/* <button >Download Ticket {ticket.booking.booking_id}</button> */}

            <Button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onPress={() => handleDownload(ticket)}
              title={"Download"}
              
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

// const {booking, ticket_file} = ticketData[0];

const Notification = ({ navigation }) => {
  const username = useSelector((state) => state.auth.username);
  const is_driver = useSelector((state) => state.auth.is_driver);
  const token = useSelector((state) => state.auth.token.access);
  return (
    <View>
      {is_driver ? (
        <DriverNotification
          navigation={navigation}
          username={username}
          token={token}
        />
      ) : (
        <PassengerNotification
          navigation={navigation}
          username={username}
          token={token}
        />
      )}
      <Menu
        navigation={navigation}
        icon_size_L={32}
        icon_size_N={36}
        icon_size_H={32}
        icon_size_A={32}
        icon_size_P={32}
        is_driver={is_driver}
      />
    </View>
  );
};

export default Notification;
