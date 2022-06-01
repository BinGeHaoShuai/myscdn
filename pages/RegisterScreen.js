import React from 'react';
import {ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
import bg from '../assets/bg/register_bg.jpg';
import styles from '../styles/LoginStyles';
const RegisterScreen = () => {
    return (
        <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
            <View style={styles.body}>
                <View style={styles.bottomLine}>
                    <TextInput style={styles.inputBox} maxLength={8} placeholder="请输入用户名"/>
                </View>
                <View style={styles.bottomLine}>
                    <TextInput style={styles.inputBox} maxLength={11} placeholder="请输入账号"/>
                </View>
                <View style={styles.bottomLine}>
                    <TextInput style={styles.inputBox} secureTextEntry={true} placeholder="请输入密码"/>
                </View>
                <View style={styles.bottomLine}>
                    <TextInput style={styles.inputBox} secureTextEntry={true} placeholder="请确认密码"/>
                </View>
                <Text style={styles.goRegister}>去登录</Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.btn}>
                        <Text style={styles.login_font}>注册</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default RegisterScreen;
