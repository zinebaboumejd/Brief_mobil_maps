import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import MapView ,{Marker}from 'react-native-maps';
import icon from '../assets/micro-scooter.png'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [markers,setMarkers]=useState([]);
  const [latitude,setLatitude]=useState();

  // fitche marks
  const fetchMarkers=async()=>{
    axios({
          method: "get",
          url: "http://192.168.9.46:9000/admin/getScoter",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            console.log(res.data);
            setMarkers(res.data);
          }
          )
          .catch((err) => {
            console.log(err);
          }
          );
          console.log(markers);
          // consol latitude
          console.log("latitude",markers[0].latitude);
          setLatitude(markers[0].latitude)

  }
 
  useEffect(()=>{ 
    fetchMarkers()
  },[])

  

  // const markers = [
  //   {
  //     id: 1,
  //     title: 'Marqueur 1',
  //     description: 'Ceci est le marqueur 1',
  //     coordinate: {
  //       latitude: 32.3001,
  //       longitude: -9.2211,
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: 'Marqueur 2',
  //     description: 'Ceci est le marqueur 2',
  //     coordinate: {
  //       latitude: 32.3023,
  //       longitude: -9.2311,
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: 'Marqueur 3',
  //     description: 'Ceci est le marqueur 3',
  //     coordinate: {
  //       latitude: 32.3023,
  //       longitude: -9.2411,
  //     },
  //   },
  // ];



  
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://192.168.9.46:9000/admin/getScoter",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res.data);
  //       setMarkers(res.data);
  //     }
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //     }
  //     );

    // async function fetchMarkers() {
    //   const response = await fetch('http://192.168.9.46:9000/admin/getScoter');
    //   const data = await response.json();
    //   setMarkers(data);
    // }
    // console.log(markers);
    // // console.log('fetching markers',markers._id)
    // fetchMarkers();

  // }, []);



  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.3001,
          longitude: -9.2211,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker._id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 30,
    height: 30,
  },
});
