import React, {useState} from 'react';
import {View, StyleSheet, Text, ActivityIndicator} from 'react-native';

const Loading = () => {
    const [show, setShow] = useState(true);
    const showLoading = () => {
        setShow(true);
    };
    const hideLoading = () => {
        setShow(false);
    };

    const currentLoading = () => {
        if (show) {
            return (<View style={styles.LoadingPage}>
                <View style={styles.LoadingView}>
                    <ActivityIndicator size="large" color="#FFF"/>
                    <Text style={styles.LoadingFont}>正在加载...</Text>
                </View>
            </View>);
        } else {
            return (<View/>);
        }
    }

    return (currentLoading());

};
export default Loading;

const styles = StyleSheet.create({
    LoadingPage: {
        height: 500,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoadingView: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.6)',
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
    },
    LoadingFont: {
        marginLeft: 10,
        color: '#ffffff',
        marginTop: 10
    },
});
