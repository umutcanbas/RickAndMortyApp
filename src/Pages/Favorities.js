import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import routes from '../navigation/routes'

const Favorities = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Favorities</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(routes.HOME) }>
        <Text>aaaa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Favorities

const styles = StyleSheet.create({})