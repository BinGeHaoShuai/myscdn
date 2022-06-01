import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import dynamicStyles from '../styles/dynamicStyles';
import SquareScreen from '../components/dynamic/SquareScreen';
import NearbyScreen from '../components/dynamic/NearbyScreen';
import ConcernScreen from '../components/dynamic/ConcernScreen';
import MineScreen from '../components/dynamic/MineScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/core';

const tabs = [{
    id: 0,
    screen: 'ConcernScreen',
    title: '关注',
}, {
    id: 1,
    screen: 'SquareScreen',
    title: '广场',
}, {
    id: 2,
    screen: 'NearbyScreen',
    title: '附近',
}, {
    id: 3,
    screen: 'MineScreen',
    title: '我的',
}
];
const Stack = createStackNavigator();

const Dynamic = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState(1);

    const GotoPage = (page) => {
        setActiveTab(page);
        let screen = tabs[page].screen;
        console.log(screen);
        navigation.navigate(screen);
    };

    const Tabs = (item) => {
        return (
            <TouchableOpacity onPress={() => GotoPage(item.id)} key={item.id}>
                <Text style={[dynamicStyles.headTab_font,activeTab===item.id ? {color: '#000', fontSize: 17}:{}]}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={dynamicStyles.box}>
            <View style={dynamicStyles.headTab}>
                <View style={dynamicStyles.headTab_font_box}>
                    {tabs.map((item) => Tabs(item))}
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('PublishDynamicsScreen')}>
                    <Image source={require('../assets/icon_more2.png')} style={dynamicStyles.more_btn_icon}/>
                </TouchableOpacity>
            </View>
            <View style={dynamicStyles.line}/>
            <Stack.Navigator
                initialRouteName="SquareScreen"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="ConcernScreen" component={ConcernScreen}/>
                <Stack.Screen name="SquareScreen" component={SquareScreen}/>
                <Stack.Screen name="NearbyScreen" component={NearbyScreen}/>
                <Stack.Screen name="MineScreen" component={MineScreen}/>
            </Stack.Navigator>
        </View>
    );
};

export default Dynamic;
