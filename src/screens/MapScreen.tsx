import React from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';

const MapScreen: React.FC = () => {
  const profileImage = require('../../assets/pin-map.png');
  const markers = useSelector((state: any) => state.markers.markers);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78750,
          longitude: -122.4350,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        {markers.map((marker: any) => (
          <Marker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.name}
            description={marker.description}
            onCalloutPress={()=>{
              console.log('wewski');
            }}
            >
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
