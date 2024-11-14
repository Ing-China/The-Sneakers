import React from 'react';
import RootNavigator from './RootNavigation';
import useStartUp from '../hooks/useStartUp';
import {Alert} from 'react-native';

const AppNavigation: React.FC = () => {
  const {isInitialized} = useStartUp();
  if (!isInitialized) {
    // Alert.alert(
    //   'Initializing',
    //   'Please wait while the app is being initialized...',
    // );
    null;
  }
  return <RootNavigator />;
};

export default AppNavigation;
