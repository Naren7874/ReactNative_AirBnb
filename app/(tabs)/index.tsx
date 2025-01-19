import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listing from '@/components/Listing'
import listingData from '@/assets/data/airbnb-listings.json'

const index = () => {
  const [category,setCategory]=useState('Tiny homes')
  const items = useMemo(()=>listingData as any,[])

  const onDataChanged = (category:string)=>{
    setCategory(category)
  }
  return (
    <View style={{ flex: 1}}>

      <Stack.Screen options={{
        header:()=><ExploreHeader onCategoryChanged={onDataChanged}/>
      }}/>

      <Listing listing={items} category={category}/>
    </View>
  )
}

export default index