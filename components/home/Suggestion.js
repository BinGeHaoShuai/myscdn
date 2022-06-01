import React from 'react';
import {Image, Text, View, ScrollView, FlatList} from 'react-native';
import styles from '../../styles/SuggestionStyles';
import suggestionData from '../../assets/data/suggestiondata.json';
/**
 * 问答界面
 * @returns {JSX.Element}
 * @constructor
 */

const tabs = ['最新', '最热', '精华', '悬赏', '待回答'];
const Question = (title, types, id) => {
    return (
        <View style={styles.questionBox} key={id}>
            <Text
                style={styles.question_title}
                numberOfLines={2}
                ellipsizeMode="tail"
            >
                {title}
            </Text>
            <View style={{flexDirection: 'row'}}>
                {types.map((item, k)=>(
                    <View style={styles.question_type_box} key={k}>
                        <Text style={styles.question_type}>{item}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const Suggestion = () => {

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image source={require('../../assets/swiperImg/img3.jpg')} style={styles.topImg}/>
                <View style={styles.tabs_box}>
                    {tabs.map((item, k) => (
                        <Text style={styles.tabs_font} key={k}>{item}</Text>
                    ))}
                </View>
                <View style={styles.content}>
                    {suggestionData.map((item) => Question(item.title, item.types, item.id))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Suggestion;
