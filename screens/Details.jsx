import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Details({tour}) {
    console.log(tour);
  return (
    <SafeAreaView>
      <Text>Details</Text>
    </SafeAreaView>
  )
}