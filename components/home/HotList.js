import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/hotlistStyles';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        index: '1',
        title: '廖飞成长日记',
        hot: '3.5w',
        author: '小廖',
        reader: '666',
        commend: '1',
        collection: '174',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        index: '2',
        title: 'Second Item',
        hot: '3w',
        author: '廖飞',
        reader: '66',
        commend: '166',
        collection: '174',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        index: '3',
        title: 'Third Item',
        hot: '2.9w',
        author: '黄飞鸿',
        reader: '66',
        commend: '166',
        collection: '174',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        index: '4',
        title: '小廖舔狗日记',
        hot: '1.2w',
        author: '渣渣灰',
        reader: '66',
        commend: '166',
        collection: '174',
    },
];

const Item = ({item}) => (
    <View style={styles.item}>
        <View style={styles.ranking}>
            <View style={styles.box_row}>
                <View style={styles.index_box}>
                    <Text style={styles.ranking_author}>{item.index}</Text>
                </View>
                <Text style={styles.ranking_author}>  {item.author}</Text>
            </View>
            <View style={styles.box_row}>
                <Image
                    source={require('../../assets/icon_hot.png')}
                    style={styles.hot_icon}
                />
                <Text style={styles.ranking_hot}> {item.hot} 热度</Text>
            </View>
        </View>
        <View style={styles.title}>
            <View style={styles.title_v}>
                <Text style={styles.title_text}>{item.title}</Text>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.content_text}>{item.reader}阅读 {item.commend}评论 {item.collection}收藏</Text>
                    </View>
                </View>
            </View>
            <Image
                source={require('../../assets/content/default_headshot.png')}
                style={styles.content_img}/>
        </View>
        <View style={styles.line}/>
    </View>
);

const HotList = ({navigation}) => {
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('DetailMessagePage');
        }}>
            <Item item={item}/>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default HotList;
