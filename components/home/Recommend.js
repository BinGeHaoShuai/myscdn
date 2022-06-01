import React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../styles/recommendStyles';
import DetailMessagePage from '../../pages/DetailMessagePage';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '廖飞成长日记',
        author: '小廖',
        reader: '666',
        commend: '1',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        author: '小廖',
        reader: '66',
        commend: '166',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        author: '小廖',
        reader: '6',
        commend: '18',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
        title: '小廖舔狗日记1',
        author: '小廖',
        reader: '10000',
        commend: '200',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e43are',
        title: '小廖舔狗日记2',
        author: '小廖',
        reader: '10000',
        commend: '300',
    },
];

const Item = ({item}) => (
    <View style={styles.item}>
        <View style={styles.title}>
            <View style={styles.title_v}>
                <Text style={styles.title_text}>{item.title}</Text>
            </View>
            <Image
                source={require('../../assets/content/default_headshot.png')}
                style={styles.content_img}/>
        </View>
        <View style={styles.content}>
            <View>
                <Text style={styles.content_text}>{item.author} {item.reader}阅读·{item.commend}评论</Text>
            </View>
            <View>
                <Image
                    source={require('../../assets/icon_more.png')}
                    style={styles.icon_more}/>
            </View>
        </View>
    </View>
);

const Recommend = ({navigation}) => {
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('DetailMessagePage');
        }}>
            <Item item={item}/>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Recommend;
