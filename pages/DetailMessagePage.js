import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from '../styles/DetailMessageScreenStyles';

const DetailMessagePage = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.textTitle}>怎么说你在干什么呢</Text>
                <View style={styles.space_between}>
                    <View style={styles.space_between}>
                        <Image source={require('../assets/content/default_headshot.png')} style={styles.headshot}/>
                        <View style={styles.author_box}>
                            <Text style={styles.author_name}>小廖同学</Text>
                            <Text style={styles.content_type}>原创</Text>
                        </View>
                    </View>
                    <View style={styles.concernBtn}>
                        <Text style={styles.concernBtn_font}>关注</Text>
                    </View>
                </View>
                <View style={styles.content_box}>
                    <Text style={styles.content_font}>为什么我没有女朋友</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default DetailMessagePage;
