import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { BASEURL } from "../../../services/Baseurl";
import { useSelector } from "react-redux";
import { Button } from "react-native-elements";
import { Dropdown } from "react-native-element-dropdown";

const Booking = ({ navigation }) => {
  const token = useSelector((state) => state.auth.token.access);
  const username = useSelector((state) => state.auth.username);
  const is_driver = useSelector((state) => state.auth.is_driver);
  console.log("is_driver", is_driver);
  const [trip_price_data, setTripPriceData] = useState([
    {
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
            is_driver: false,
          },
          license_number: "",
          phone_number: "",
          address: "",
          date_of_birth: "",
          driving_experience: 0,
          rating: "",
          total_rides: 0,
          earnings: "00",
          availability_status: false,
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
      price: "00",
    },
  ]);
  const [booking_data, setBookingData] = useState({
    trip_price_id: "",
    num_passengers: 0,
  });

  const [trippriceid, setTripPriceid] = useState([]);
  useEffect(() => {
    const getTripId = async () => {
      try {
        const response = await axios.get(`${BASEURL}driver/trip/trip-price`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        addTripPriceid(response.data.data);
        setTripPriceData(response.data.data);

        // console.log("Booking response data", response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getTripId();
  }, []);

  // console.log("Token", token);
  // console.log("Username", username);

  //   console.log("Booking Screen", trip_price_data);

  const addTripPriceid = (trip_data_ids) => {
    const tripIds = trip_data_ids.map((item) => item.trip_price_id);
    setTripPriceid(tripIds);
  };

  console.log("Trip Price Id", trippriceid);

  const handleInputChange = (value, field) => {
    setBookingData({
      ...booking_data,
      [field]: value,
    });
  };
  const postBooking = async () => {
    try {
      const response = await axios.post(
        `${BASEURL}/driver/trip/booking/`,
        booking_data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Booking Response", response.data);
      navigation.navigate("PassengerHomeScreen");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Text>Booking Screen</Text>
      <View>
        <Text>Choose Trip</Text>
        <Dropdown
          className="border-2 p-2 rounded-lg my-1"
          placeholder="Select Trip"
          data={trippriceid.map((item) => ({ label: item, value: item }))}
          labelField="label"
          value={booking_data.trip_price_id.toString()}
          onChange={(item) => handleInputChange(item.value, "trip_price_id")}
        />
      </View>
      <View>
        <Text>No of Passenger</Text>
        <TextInput
          className="border-2 p-2 rounded-lg my-1"
          placeholder="Choose Price"
          value={booking_data.num_passengers.toString()}
          onChangeText={(value) => handleInputChange(value, "num_passengers")}
          keyboardType="numeric"
        />
      </View>

      <Button onPress={postBooking} title={"submit"} />
    </View>
  );
};

export default Booking;
