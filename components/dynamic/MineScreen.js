import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const MineScreen = () => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
            <View style={styles.btn}>
                <Text style={{color: '#000'}}>发表你的第一条动态</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    btn:{
        width: 160,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#cbcbcb',
        borderRadius: 15,
    }
});
export default MineScreen;
