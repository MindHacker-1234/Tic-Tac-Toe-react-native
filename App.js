import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Headings from './components/Headings';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Game from './screens/Game';
import Headings1 from './components/HeadingsGame';
import SelectedImageContext from './components/SelectedImageContext';

const Stack = createStackNavigator();

const App = () => {
  const [activeImage, setActiveImage] = useState('');
       return (
             <SelectedImageContext.Provider value={activeImage}>
               <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen  name = "Home" component={Home} options={{  
                    headerTitle: () => <Headings />, 
                    headerTitleAlign: "center",
                    headerTransparent: true,
                    headerStyle: {
                      backgroundColor: '#010b1a',
                    },
                    }}/>
                  <Stack.Screen  name = "Settings" component={Settings}
                     options={{  
                    headerTitle: () => <Headings />, 
                    headerTitleAlign: "center",
                    headerTransparent: true,
                    headerStyle: {
                      backgroundColor: '#010b1a',
                    },
                    }}
                  />
                  <Stack.Screen  name = "Game" component={Game}
                     options={{  
                    headerTitle: () => <Headings1 />, 
                    headerTransparent: true,
                    headerStyle: {
                      backgroundColor: '#010b1a',
                    },
                    }}
                  />
                </Stack.Navigator>
               </NavigationContainer>
               </SelectedImageContext.Provider>
       )
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
