import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setVehicleData } from "../../app/features/driver/driverSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASEURL } from "../../services/Baseurl";

const AddVehicle = () => {
  const token = useSelector((state) => state.auth.csrf_token);
  const user_token = useSelector((state) => state.auth.token.access);
  // console.log("====================================");
  // console.log("user_token", user_token);
  // console.log("====================================");
  const initialVehicleData = {
    registration_number: "",
    vehicle_type: "",
    company_made: "",
    model: "",
    age: 0,
    color: "",
    seating_capacity: 0,
    license_plate_number: "",
    available_seat: 0,
  };
  // const initialVehicleData = {
  //   registration_number: "",
  //   vehicle_type: "",
  //   company_made: "",
  //   model: "",
  //   age: 0,
  //   color: "",
  //   seating_capacity: 0,
  //   license_plate_number: "",
  //   available_seat: 0,
  // };
  const vehicleTypes = ["car", "van", "motorcycle"];
  const [vehicleInfo, setVehicleInfo] = useState({
    registration_number: "",
    vehicle_type: "",
    company_made: "",
    model: "",
    age: 0,
    color: "",
    seating_capacity: 0,
    license_plate_number: "",
    available_seat: 0,
  });
  const dispatch = useDispatch();
  const handleInputChange = (value, field) => {
    if (
      field === "age" ||
      field === "seating_capacity" ||
      field === "available_seat"
    ) {
      value = parseInt(value, 10);
    }
    setVehicleInfo({ ...vehicleInfo, [field]: value });
  };

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      console.log("====================================");
      console.log("usertoken", user_token);
      console.log("token", token);
      console.log("====================================");
      // (async () => {
      //   const data = await AsyncStorage.getItem("logindata");
      //   const logindata = JSON.parse(data);
      //   const access = logindata.access;
      //   console.log("====================================");
      //   console.log("login data from add vehicle", data);
      //   console.log("====================================");
      // })();
    } catch (e) {
      console.log(e);
    }
  };
  const getVehicleData = async () => {
    try {
      const response = await axios.get(`${BASEURL}driver/`, {
        headers: {
          // "Content-Type": "application/json",
          contentType: "application/json",
          // "X-CSRFToken": token,
          Authorization: `Bearer ${user_token}`,
        },
      });
      const vehicleData = response.data;
      console.log("vehicleData", vehicleData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = async () => {
    dispatch(setVehicleData(vehicleInfo));
    const message = `
      Data submitted!
      Registration Number: ${vehicleInfo.registration_number}
      Vehicle Type: ${vehicleInfo.vehicle_type}
      Company Made: ${vehicleInfo.company_made}
      Model: ${vehicleInfo.model}
      Age: ${vehicleInfo.age}
      Color: ${vehicleInfo.color}
      Seating Capacity: ${vehicleInfo.seating_capacity}
      License Plate Number: ${vehicleInfo.license_plate_number}
      Available Seat: ${vehicleInfo.available_seat}
    `;
    Alert.alert("Submission", message);
    const postVehicleData = async () => {
      try {
      console.log("====================================");
      console.log("user_token vehicle info", vehicleInfo);
      console.log("user_token", user_token);
      console.log("====================================");

      const response = await axios.post(
        `${BASEURL}/driver/`, // Modified URL path
        {
        registration_number: vehicleInfo.registration_number,
        vehicle_type: vehicleInfo.vehicle_type,
        company_made: vehicleInfo.company_made,
        model: vehicleInfo.model,
        age: vehicleInfo.age,
        color: vehicleInfo.color,
        seating_capacity: vehicleInfo.seating_capacity,
        license_plate_number: vehicleInfo.license_plate_number,
        available_seat: vehicleInfo.available_seat,
        },
        {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user_token}`,
        },
        }
      );
      console.log("vehicle response", response.data);
      } catch (error) {
      console.error("Error:", error);
      }
    };
    postVehicleData();
  };

  // useEffect(()=>{
  //   (async()=>{
  //     try{
  //       const data = await AsyncStorage.getItem("logindata");
  //       const logindata = JSON.parse(data);
  //       const access = logindata.access;
  //       console.log("data", data);
  //     }
  //     catch(e){
  //       console.log(e);
  //     }

  //   })
  // },[])

  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <View>
          <Text>Registration Number</Text>
          <TextInput
            style={{
              borderWidth: 2,
              padding: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
            placeholder="Registration Number"
            value={vehicleInfo.registration_number.toString()}
            onChangeText={(value) =>
              handleInputChange(value, "registration_number")
            }
          />
        </View>
        <View>
          <Text>Vehicle Type</Text>
          <Dropdown
            style={{
              borderWidth: 2,
              padding: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
            placeholder="Vehicle Type"
            data={vehicleTypes.map((item) => ({ label: item, value: item }))}
            labelField="label"
            value={vehicleInfo.vehicle_type.toString()}
            onChange={(item) => handleInputChange(item.value, "vehicle_type")}
          />
        </View>
        <View>
          <Text>Company Made</Text>
          <TextInput
            style={{
              borderWidth: 2,
              padding: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
            placeholder="Company Made"
            value={vehicleInfo.company_made.toString()}
            onChangeText={(value) => handleInputChange(value, "company_made")}
          />
        </View>
        <View>
          <Text>Model</Text>
          <TextInput
            style={{
              borderWidth: 2,
              padding: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
            placeholder="Model"
            value={vehicleInfo.model.toString()}
            onChangeText={(value) => handleInputChange(value, "model")}
          />
        </View>

        <View>
          <Text>Age</Text>
          <TextInput
            className="border-2 p-2 rounded-lg my-1"
            placeholder="Age"
            value={vehicleInfo.age.toString()}
            onChangeText={(value) => handleInputChange(value, "age")}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text>Color</Text>
          <TextInput
            style={{
              borderWidth: 2,
              padding: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
            placeholder="Color"
            value={vehicleInfo.color.toString()}
            onChangeText={(value) => handleInputChange(value, "color")}
          />
        </View>
        <View>
          <Text>Seating Capacity</Text>
          <TextInput
            style={{
              borderWidth: 2,
              padding: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
            placeholder="Seating Capacity"
            value={vehicleInfo.seating_capacity.toString()}
            onChangeText={(value) =>
              handleInputChange(value, "seating_capacity")
            }
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text>License Plate Number</Text>
          <TextInput
            style={{
              borderWidth: 2,
              padding: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
            placeholder="License Plate Number"
            value={vehicleInfo.license_plate_number.toString()}
            onChangeText={(value) =>
              handleInputChange(value, "license_plate_number")
            }
          />
        </View>
        <View>
          <Text>Available Seat</Text>
          <TextInput
            style={{
              borderWidth: 2,
              padding: 8,
              borderRadius: 8,
              marginTop: 4,
            }}
            placeholder="Available Seat"
            value={vehicleInfo.available_seat.toString()}
            onChangeText={(value) => handleInputChange(value, "available_seat")}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            marginTop: 12,
            borderRadius: 999,
            alignSelf: "center",
            width: "50%",
          }}
          onPress={handleSubmit}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              padding: 6,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={getVehicleData}>
          <Text>get Friver data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddVehicle;

// import React, { useState,useEffect } from "react";
// import { setVehicleData } from "../../app/features/driver/driverSlice";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   ScrollView,
//   Alert,
// } from "react-native";
// import { Dropdown } from "react-native-element-dropdown";
// import { useDispatch } from "react-redux";

// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// const AddVehicle = () => {
//   const initialVehicleData = {
//     registration_number: "",
//     vehicle_type: "",
//     company_made: "",
//     model: "",
//     age: "",
//     color: "",
//     seating_capacity: "",
//     license_plate_number: "",
//     available_seat: "",
//   };
//   const vehicleTypes = ["Car", "Bike", "Bus", "Truck"];
//   const [vehicleInfo, setVehicleInfo] = useState(initialVehicleData);
//   const dispatch = useDispatch();
//   const handleInputChange = (value, field) => {
//     setVehicleInfo({ ...vehicleInfo, [field]: value });
//   };

//   useEffect(() => {
//     (async () => {
//       try{

//         const data = await AsyncStorage.getItem("logindata");
//         console.log("data", data);
//         const logindata = JSON.parse(data);
//         console.log("logindata", logindata);
//         const access = logindata.access;
//         console.log("access", access);
//         const getVehicleData = async () => {
//           try {
//             const response = await axios.get(`${BASEURL}driver/`, {
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${access}`,
//               },
//             });
//             const vehicleData = response.data;
//             console.log("vehicleData", vehicleData);
//           } catch (error) {
//             console.error("Error:", error);
//           }
//         };
//         getVehicleData();

//       }
//       catch(e){
//         console.log(e);
//       }

//     })()

//   }, []);

//   const handleSubmit = () => {
//     dispatch(setVehicleData(vehicleInfo));
//     const message = `
//       Data submitted!
//       Registration Number: ${vehicleInfo.registration_number}
//       Vehicle Type: ${vehicleInfo.vehicle_type}
//       Company Made: ${vehicleInfo.company_made}
//       Model: ${vehicleInfo.model}
//       Age: ${vehicleInfo.age}
//       Color: ${vehicleInfo.color}
//       Seating Capacity: ${vehicleInfo.seating_capacity}
//       License Plate Number: ${vehicleInfo.license_plate_number}
//       Available Seat: ${vehicleInfo.available_seat}
//     `;

//     Alert.alert("Submission", message);
//     const postVehicleData = async () => {
//       const data = await AsyncStorage.getItem("logindata");
//       const logindata = JSON.parse(data);
//       const access = logindata.access;
//       try {
//         const response = await axios.post(`${BASEURL}driver/`, vehicleInfo, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${access}`,
//           },
//         });
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };
//     postVehicleData();
//   };

//   return (
//     <ScrollView>
//       <View style={{ padding: 16 }}>
//         <View>
//           <Text>Registration Number</Text>
//           <TextInput
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="Registration Number"
//             value={vehicleInfo.registration_number}
//             onChangeText={(value) =>
//               handleInputChange(value, "registration_number")
//             }
//           />
//         </View>
//         <View>
//           <Text>Vehicle Type</Text>
//           <Dropdown
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="Vehicle Type"
//             data={vehicleTypes.map((item) => ({ label: item, value: item }))}
//             labelField="label"
//             value={vehicleInfo.vehicle_type}
//             onChange={(item) => handleInputChange(item.value, "vehicle_type")}
//           />
//         </View>
//         <View>
//           <Text>Company Made</Text>
//           <TextInput
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="Company Made"
//             value={vehicleInfo.company_made}
//             onChangeText={(value) => handleInputChange(value, "company_made")}
//           />
//         </View>
//         <View>
//           <Text>Model</Text>
//           <TextInput
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="Model"
//             value={vehicleInfo.model}
//             onChangeText={(value) => handleInputChange(value, "model")}
//           />
//         </View>
//         <View>
//           <Text>Age</Text>
//           <TextInput
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="Age"
//             value={vehicleInfo.age}
//             onChangeText={(value) => handleInputChange(value, "age")}
//             keyboardType="numeric"
//           />
//         </View>
//         <View>
//           <Text>Color</Text>
//           <TextInput
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="Color"
//             value={vehicleInfo.color}
//             onChangeText={(value) => handleInputChange(value, "color")}
//           />
//         </View>
//         <View>
//           <Text>Seating Capacity</Text>
//           <TextInput
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="Seating Capacity"
//             value={vehicleInfo.seating_capacity}
//             onChangeText={(value) =>
//               handleInputChange(value, "seating_capacity")
//             }
//             keyboardType="numeric"
//           />
//         </View>
//         <View>
//           <Text>License Plate Number</Text>
//           <TextInput
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="License Plate Number"
//             value={vehicleInfo.license_plate_number}
//             onChangeText={(value) =>
//               handleInputChange(value, "license_plate_number")
//             }
//           />
//         </View>
//         <View>
//           <Text>Available Seat</Text>
//           <TextInput
//             style={{
//               borderWidth: 2,
//               padding: 8,
//               borderRadius: 8,
//               marginTop: 4,
//             }}
//             placeholder="Available Seat"
//             value={vehicleInfo.available_seat}
//             onChangeText={(value) => handleInputChange(value, "available_seat")}
//             keyboardType="numeric"
//           />
//         </View>
//         <TouchableOpacity
//           style={{
//             borderWidth: 2,
//             marginTop: 12,
//             borderRadius: 999,
//             alignSelf: "center",
//             width: "50%",
//           }}
//           onPress={handleSubmit}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               fontWeight: "bold",
//               fontSize: 16,
//               padding: 6,
//             }}
//           >
//             Submit
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// export default AddVehicle;
