import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import { StatusBar } from 'expo-status-bar';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // Replace this with actual authentication logic
  const checkAuth = () => {
    // If user is authenticated, set isAuthenticated to true
    // Otherwise, set it to false
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;