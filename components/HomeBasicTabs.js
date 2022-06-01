import React from 'react';
import {View,Text} from 'react-native';
import Recommend from './home/Recommend';
import HotList from './home/HotList';
import Study from './home/Study';
import Suggestion from './home/Suggestion';
import Rankings from './home/Rankings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/homeStyles';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Recommend"
            screenOptions={{
                tabBarActiveTintColor: '#000',
                tabBarLabelStyle: styles.top_tab_font,
                tabBarStyle: { backgroundColor: '#fff'},
                tabBarIndicatorStyle:{ height: 0 }
            }}
        >
            <Tab.Screen
                name="Recommend"
                component={Recommend}
                options={{ tabBarLabel: '推荐' }}
            />
            <Tab.Screen
                name="HotList"
                component={HotList}
                options={{ tabBarLabel: '热榜' }}
            />
            <Tab.Screen
                name="Study"
                component={Study}
                options={{ tabBarLabel: '学习' }}
            />
            <Tab.Screen
                name="Suggestion"
                component={Suggestion}
                options={{ tabBarLabel: '问答' }}
            />
            <Tab.Screen
                name="Rankings"
                component={Rankings}
                options={{ tabBarLabel: '排行榜' }}
            />
        </Tab.Navigator>
    );
}
const HomeBasicTabs = () => {
    return (
        <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
            <MyTabs />
        </View>
    );
}

export default HomeBasicTabs;

