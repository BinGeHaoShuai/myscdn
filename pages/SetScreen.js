import React from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from '../styles/SetScreenStyles';
import SetData from '../assets/data/setdata.json';

const OptionBar = (text, rightIcon = true) => {

    return (
        <View style={styles.space_between}>
            <Text style={styles.font}>{text}</Text>
            {rightIcon ? <Image source={require('../assets/my/icon_right.png')} style={styles.right_icon}/> :
                <View/>}
        </View>
    );
};

const SetScreen = () => {
    const navigation = useNavigation();

    const goLogin = () => {
        navigation.navigate('LoginScreen');
    };
    return (
        <View style={styles.contentBox}>
            <ScrollView>
                {SetData.map((item) => OptionBar(item.name, item.rightIcon))}
                <TouchableOpacity activeOpacity={0.5} onPress={() => goLogin()}>
                    {OptionBar('退出登录', false)}
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default SetScreen;
