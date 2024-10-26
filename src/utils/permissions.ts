import * as ImagePicker from 'expo-image-picker';
import { Platform, Alert, Linking } from 'react-native';

export const requestCameraPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission Required',
        'Sorry, we need camera roll permissions to upload photos.',
        [
          {
            text: 'Open Settings',
            onPress: () => Platform.OS === 'ios' 
              ? Linking.openURL('app-settings:') 
              : Linking.openSettings()
          },
          { text: 'Cancel', style: 'cancel' }
        ]
      );
      return false;
    }
    return true;
  }
  return true;
};