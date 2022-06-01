import React from 'react';
import {Dimensions, Image, Text, View, ScrollView} from 'react-native';
import styles from '../../styles/RankingStyles';
import suggestionData from '../../assets/data/suggestiondata.json';
/**
 * 排行榜界面
 * @returns {JSX.Element}
 * @constructor
 */

let {width, height, scale} = Dimensions.get('window');
const Width = 1080;
const DpWidth = 412;
const wuli = scale * width / Width * width / DpWidth;

const contentTabs = ['里程碑专区', '收藏榜', '悬赏榜', '社区榜'];
const authorTabs = ['新晋作者', '作者周榜', '作者总榜', '原力月榜', '领军人物', '新人榜'];

const getTabs = (title, key) => {
    return (<View style={styles.tabBox} key={key}>
        <Text style={styles.tabFont}>{title}</Text>
    </View>);
};

const content = (title, id, author) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.rankingId}>{id}</Text>
            <View style={styles.questionBox} key={id}>
                <Text
                    style={styles.question_title}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                >
                    {title}
                </Text>
                <Text>{author}</Text>
            </View>
        </View>

    );
}

const Rankings = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftTabs}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.tabBox}>
                        <Text style={styles.tab_module}>◊ 内容榜</Text>
                    </View>
                    <View style={[styles.tabBox, {backgroundColor: '#fff'}]}>
                        <Text style={styles.tabFont}>综合热榜</Text>
                    </View>
                    {contentTabs.map((v, k) => getTabs(v, k))}
                    <View style={styles.tabBox}>
                        <Text style={styles.tab_module}>◊ 人物榜</Text>
                    </View>
                    {authorTabs.map((v, k) => getTabs(v, k))}
                </ScrollView>
            </View>
            <View style={styles.contentOfTabs}>
                <ScrollView showsVerticalScrollIndicator={false}>
                {suggestionData.map((item) => content(item.title, item.id, item.author))}
                </ScrollView>
            </View>
        </View>
    );
};

export default Rankings;
