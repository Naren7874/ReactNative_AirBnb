import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listing from '@/components/Listing'

const index = () => {
  return (
    <View style={{ flex: 1}}>
      <Stack.Screen options={{
        header:()=><ExploreHeader/>
      }}/>
      <Listing/>
      {/* <Link href={'/(modals)/login'}>Login</Link>
      <Link href={'/(modals)/booking'}>booking</Link>
      <Link href={'/listing/13546'}>Listing Details</Link> */}
    </View>
  )
}

export default index