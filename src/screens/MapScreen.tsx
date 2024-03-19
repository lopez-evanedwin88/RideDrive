import React, { useLayoutEffect } from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {Route} from '../constants/Route';
import {useNavigation} from '@react-navigation/native';

const MapScreen: React.FC = () => {
  const profileImage = require('../../assets/pin-map.png');
  const markers = useSelector((state: any) => state.markers.markers);
  const navigation = useNavigation<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
        title: 'Finding a rider',
      });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.7875,
          longitude: -122.435,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        {markers.map((marker: any) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.pickupLocation.latitude,
              longitude: marker.pickupLocation.longitude,
            }}
            title={marker.name}
            description={marker.description}
            onCalloutPress={() => {
              navigation.navigate(Route.RIDE_SCREEN, {id: marker.id, driveId: 'd_001'}); // Set driver id
            }}>
            <Image source={profileImage} style={styles.markerImage} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerImage: {
    width: 40,
    height: 40,
  },
});

export default MapScreen;
