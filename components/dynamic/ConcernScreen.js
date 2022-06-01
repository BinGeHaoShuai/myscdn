import React from 'react';
import {Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import createData from '../../assets/data/creator.json';
import styles from '../../styles/ConcernStyles';

const creator = (name, fanNum, id) => {
    return (<View style={styles.container} key={id}>
        <Image source={require('../../assets/content/default_headshot.png')} style={styles.head_img} />
        <View style={styles.container_info}>
            <Text style={styles.name_font}>{name}</Text>
            <View style={styles.fanBox}>
                <Text style={styles.fanFont}>粉丝:{fanNum}</Text>
            </View>
        </View>
        <View style={styles.concern_btn}>
            <Text style={styles.concern_btn_font}>关注</Text>
        </View>
    </View>);
}

const ConcernScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.box}>
                <View style={styles.topInfoBox}>
                    <Text>这里暂时没有新内容，推荐你看看其他人在说些什么。</Text>
                </View>
                {createData.map((item) =>creator(item.name, item.fanNum, item.id))}
            </View>
        </ScrollView>
    );
};

export default ConcernScreen;
