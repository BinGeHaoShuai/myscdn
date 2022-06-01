import React from 'react';
import {View, TextInput, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import styles from '../styles/LoginStyles';
import bg from '../assets/bg/login_bg.jpg';

const LoginScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
            <View style={styles.body}>
                <View style={styles.bottomLine}>
                    <TextInput style={styles.inputBox} maxLength={11} placeholder="请输入账号/手机号"/>
                </View>
                <View style={styles.bottomLine}>
                    <TextInput style={styles.inputBox} secureTextEntry={true} placeholder="请输入密码"/>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.goRegister}>还没账号？注册</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.btn}>
                        <Text style={styles.login_font}>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;
