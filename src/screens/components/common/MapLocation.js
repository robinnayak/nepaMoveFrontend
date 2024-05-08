import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { setOrigin } from "../../../app/features/passenger/passengerSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchBtn from "./SearchBtn";
import { useNavigation } from "@react-navigation/native";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from "../../../services/apikey";
GOOGLE_API_KEY
const MapLocation = () => {
  const dispatch = useDispatch();
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const map_location = useSelector((state) => state.passenger.map_location);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [dest, setDest] = useState({
    latitude: 26.7271,
    longitude: 85.9407,
  });
  const coords = map_location?.origin?.coords;
  const navigation = useNavigation();
  useEffect(() => {
    _getLocation();
  }, []);

  const _getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    dispatch(
      setOrigin({
        ...location,
        origin: location.coords,
      })
    );
  };

  const hasValidCoords =
    location?.coords?.latitude && location?.coords?.longitude;
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log("internal location", location);
  console.log("map_location", map_location);
  console.log("coords", coords);
  console.log("hasValidCoords", hasValidCoords);

  const { latitude, longitude } = hasValidCoords ? location.coords : {};
  const handleBtn = () => {
    navigation.navigate("ChooseDestination");
  };
  return (
    <>
      {location ? (
        <>
          <MapView
            ref={mapRef}
            initialRegion={{
              // latitude: latitude,
              // longitude: longitude,
              latitude: 27.7172,
              longitude: 85.324,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            }}
            style={styles.map}
          >
            {coords && latitude && longitude && (
              <Marker
                coordinate={{
                  // latitude: coords.latitude,
                  // longitude: coords.longitude,
                  latitude: 27.7172,
                  longitude: 85.324,
                }}
                title="Origin"
                description="This is the origin"
              />
            )}

            <Marker
              coordinate={{
                latitude: dest.latitude,
                longitude: dest.longitude,
              }}
              title="Destination"
              description="This is the Destination"
            />

            <MapViewDirections
              origin={{
                latitude: 27.7172,
                longitude: 85.324,
              }}
              destination={{
                latitude: dest.latitude,
                longitude: dest.longitude,
              }}
              apikey="AIzaSyDyKJ-4kZjQ7n2JG3wz9w1DmQ8bY6X5v3s"
            />
          </MapView>
          <SearchBtn
            onPressText={handleBtn}
            btnName="Choose a Destinaton...  "
          />
        </>
      ) : (
        <Text>Loading..</Text>
      )}
    </>
  );
};

export default MapLocation;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
});
