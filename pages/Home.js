import React from 'react';
import {View} from 'react-native';
import styles from '../styles/homeStyles';
import Header from '../components/Header';
import HomeBasicTabs from '../components/HomeBasicTabs';
const Home = () => {
    return (
        <View style={styles.pageContent}>
            <Header/>
            <HomeBasicTabs/>
        </View>
    );
};

export default Home;
