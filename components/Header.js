import React from 'react';
import { View,TextInput, Image} from 'react-native';
import styles from '../styles/homeStyles';

const Header = () => {
    return (
        <View style={styles.row}>
            <Image
                style = {styles.img1_style}
                source = {require('../assets/icon_broadcast.png')}/>
            <View style={styles.inputView}>
                <Image
                    style = {styles.search_icon}
                    source = {require('../assets/icon_search.png')}/>
                <TextInput
                    style={styles.inputBox}
                    placeholder="  react新手指南"
                />
            </View>
            <Image
                style = {styles.img2_style}
                source = {require('../assets/icon_more2.png')}/>
        </View>
    );
}

export default Header;



