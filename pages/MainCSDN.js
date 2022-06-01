import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Message from './Message';
import My from './My';
import Shop from './Shop';
import Dynamic from './Dynamic';
import wuli from '../styles/wuli';

const Tab = createBottomTabNavigator();

const MainCSDN = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    if (route.name === '首页') {
                        return (focused ? <Image source={require('../assets/icon_home.png')} style={styles.icon}/>
                            : <Image source={require('../assets/icon_home.png')} style={styles.icon}/>);
                    } else if (route.name === '商城') {
                        return (focused ? <Image source={require('../assets/icon_shop.png')} style={styles.icon}/>
                            : <Image source={require('../assets/icon_shop.png')} style={styles.icon}/>);
                    } else if (route.name === '动态') {
                        return (focused ? <Image source={require('../assets/icon_dynamic.png')} style={styles.icon}/>
                            : <Image source={require('../assets/icon_dynamic.png')} style={styles.icon}/>);
                    } else if (route.name === '消息') {
                        return (focused ? <Image source={require('../assets/icon_message.png')} style={styles.icon}/>
                            : <Image source={require('../assets/icon_message.png')} style={styles.icon}/>);
                    } else {
                        return (focused ? <Image source={require('../assets/icon_my.png')} style={styles.icon}/>
                            : <Image source={require('../assets/icon_my.png')} style={styles.icon}/>);
                    }
                },
                tabBarActiveBackgroundColor: '#e4e4ed',
                tabBarActiveTintColor: '#000000',
                tabBarLabelStyle: {fontSize: 13 * wuli},
                headerShown: false,
                tabBarStyle: {height: 50 * wuli},
            })}
        >
            <Tab.Screen name="首页" component={Home}/>
            <Tab.Screen name="商城" component={Shop}/>
            <Tab.Screen name="动态" component={Dynamic}/>
            <Tab.Screen name="消息" component={Message}/>
            <Tab.Screen name="我的" component={My}/>
        </Tab.Navigator>
    );
};

export default MainCSDN;

const styles = StyleSheet.create({
    icon: {
        width: 30 * wuli,
        height: 30 * wuli,
    },
});
