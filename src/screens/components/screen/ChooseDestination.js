import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoogleSearchName from '../common/GoogleSearchName'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_API_KEY } from '../../../services/apikey'

const ChooseDestination = () => {
  return (
    <View style={styles.container}>
        <GoogleSearchName placeholdertxt="Search Location.." />
    </View>
  )
}

export default ChooseDestination

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})