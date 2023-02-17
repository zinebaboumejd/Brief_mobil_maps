import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import MapView ,{Marker}from 'react-native-maps';
import icon from '../assets/micro-scooter.png'


export default function Home({navigation}) {
  const markers = [
    {
      id: 1,
      title: 'Marqueur 1',
      description: 'Ceci est le marqueur 1',
      coordinate: {
        latitude: 32.3001,
        longitude: -9.2211,
      },
    },
    {
      id: 2,
      title: 'Marqueur 2',
      description: 'Ceci est le marqueur 2',
      coordinate: {
        latitude: 32.3023,
        longitude: -9.2311,
      },
    },
    {
      id: 2,
      title: 'Marqueur 3',
      description: 'Ceci est le marqueur 3',
      coordinate: {
        latitude: 32.3023,
        longitude: -9.2411,
      },
    },
  ];

  const [mapRegion,setMapRegion]=useState({
    latitude: 32.3123,
    longitude: -9.2311,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
const userLocation=async()=>{
  let status =await Location.requestForegroundPermissionsAsync();
  if(status!=='granted'){
    console.log('permission not granted');
    return;
  }
  let location=await Location.getCurrentPositionAsync({ enableHighAccurancy:true});
  setMapRegion({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })
  
  // useEffect
  useEffect(()=>{
    userLocation();
  }
  ,[])

}
  return (
    //  map data puor afficher data 
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={mapRegion}>
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Image source={icon} style={styles.marker} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 20,
    height: 20,

  },
});