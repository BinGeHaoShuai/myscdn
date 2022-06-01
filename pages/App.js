import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainCSDN from './MainCSDN';
import DetailMessagePage from './DetailMessagePage';
import SetScreen from './SetScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import PublishDynamicsScreen from './PublishDynamicsScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="MainCSDN"
                    component={MainCSDN}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="DetailMessagePage" component={DetailMessagePage}  options={{title: ''}}/>
                <Stack.Screen name="SetScreen" component={SetScreen} options={{title: '设置'}}/>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: '登录'}}/>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{title: '注册'}}/>
                <Stack.Screen name="PublishDynamicsScreen" component={PublishDynamicsScreen} options={{title: ''}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
