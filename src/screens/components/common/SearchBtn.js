import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchBtn = ({btnName="btn", onPressText}) => {
  return (
    <TouchableOpacity onPress={onPressText} className="border-2 border-white p-1 rounded-lg w-10/12 self-end ">
      <Text className="text-blue-500 text-lg text-center" style={{
        fontSize: 20,
      }}>{btnName}</Text>
    </TouchableOpacity>
  )
}

export default SearchBtn

const styles = StyleSheet.create({})