import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateDriver, updateStatus} from '../redux/reducers/actions';
import {Status} from '../constants/RideStatus';
import {selectMarkerById} from '../redux/reducers/selectors';

const RiderScreen: React.FC = () => {
  const route: any = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {id, driveId} = route.params;
  const marker = useSelector(selectMarkerById(id));
  const [status, setStatus] = useState(marker.status);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: marker.name,
    });
  }, []);

  useEffect(() => {
    setStatus(marker.status);
  }, [marker.status]);

  const startRide = (id: number) => {
    dispatch(updateStatus({id: id, status: Status.ACCEPTED}));
    dispatch(updateDriver({id: id, driverId: driveId}));
  };

  const updateRideStatus = (id: number, status: Status) => {
    dispatch(updateStatus({id: id, status: status}));
  };

  const btnActions: any = useState({
    [Status.PENDING]: {
      title: 'ACCEPT RIDER',
      updateStatus: () => startRide(id),
    },
    [Status.PICKED_UP]: {
      title: 'STARTED RIDE',
      updateStatus: () => updateRideStatus(id, Status.STARTED),
    },
    [Status.DECLINED]: {
      title: 'DECLINED RIDER',
      updateStatus: () => updateRideStatus(id, Status.DECLINED),
    },
    [Status.ACCEPTED]: {
      title: 'PICKED UP RIDER',
      updateStatus: () => updateRideStatus(id, Status.PICKED_UP),
    },
    [Status.STARTED]: {
      title: 'DROPPED OFF RIDER',
      updateStatus: () => updateRideStatus(id, Status.DROPED_OFF),
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rider Details</Text>
      <View style={styles.row}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{id}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>User ID:</Text>
        <Text style={styles.value}>{marker.userId}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Driver ID:</Text>
        <Text style={styles.value}>
          {marker.driverId ? marker.driverId : 'N/A'}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Pickup Location:</Text>
        <Text
          style={
            styles.value
          }>{`Latitude: ${marker.pickupLocation.latitude}, Longitude: ${marker.pickupLocation.longitude}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Destination:</Text>
        <Text
          style={
            styles.value
          }>{`Latitude: ${marker.destination.latitude}, Longitude: ${marker.destination.longitude}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{marker.status}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Pickup Time:</Text>
        <Text style={styles.value}>{marker.pickupTime.toString()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Timestamp:</Text>
        <Text style={styles.value}>{marker.timestamp.toString()}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{marker.name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Description: </Text>
        <Text style={styles.value}>{marker.description}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Miles:</Text>
        <Text style={styles.value}>{marker.miles}</Text>
      </View>

      {status !== Status.DROPED_OFF ? (
        <Button
          title={btnActions[0][status].title}
          onPress={btnActions[0][status].updateStatus}
        />
      ) : (
        <View
          style={[
            styles.row,
            {alignSelf: 'center'},
          ]}>
          <Text style={[styles.label, {fontStyle: 'italic', fontWeight: 'bold', color: 'green'}]}>Rider arrived at destination</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
});

export default RiderScreen;
