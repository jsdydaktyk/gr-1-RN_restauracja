import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from  '@react-navigation/native' ;
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsDetailScreen from './screens/MealsDetailScreen' ;

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            constStyle: {backgroundColor: '#3f2f'},
            headerStyle: {backgroudColor: '#991410'},
            headerTintColor: "white"
          }}
        >
       
        <Stack.Screen name="MealsCategories" 
                      component={CategoriesScreen} 
                      options={{
                        title: "All Categories",
                       
                        headerStyle:{
                          backgroundColor: '#991410'
                        },
                       
                      }
                    
                    }
                      />
        <Stack.Screen name="MealsOverview" 
                      component={MealsOverviewScreen} 
                      options={{
                        title: "Meals",
                        headerStyle:{
                          backgroundColor: '#991410'
                        },
                        
                       
                      }
                    
                    }
                      />

      <Stack.Screen name="MealsDetails" 
                      component={MealsDetailScreen} 
                      options={{
                        title: "Meal Details",
                        headerStyle:{
                          backgroundColor: '#991410'
                        },
                       
                      }
                    
                    }
                      
                      />
          
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
