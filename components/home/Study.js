import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from '../../styles/StudyStyles';

/**
 * 学习界面
 * @returns {JSX.Element}
 * @constructor
 */

const columndata = ['学习路径', '精品视频', '精品专栏'];

const studyColumnOne=['Java开发环境搭建', 'Java语法基础', 'Java技术应用及实践', '源代码管理：Git入门'];

const Study = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.onRow}>
                    <View>
                        <Text style={styles.vip_title}>超级会员</Text>
                        <Text style={styles.vip_get_font}>开通会员专栏·视频免费学</Text>
                    </View>
                    <View style={styles.open_vip_btn}>
                        <Text style={styles.open_vip_font}>立即开通</Text>
                    </View>
                </View>
                <View style={[styles.onRow,styles.vip_content_box]}>
                    <Text>知识点 679</Text>
                    <Text>视频 4779</Text>
                    <Text>图文 248</Text>
                </View>
            </View>

            <View style={styles.column_box}>
                {columndata.map((v,k) => (
                    <Text style={styles.column_font} key={k}>{v}</Text>
                ))}
            </View>
            <View style={styles.container}>
                <View style={styles.study_box}>
                    <View style={styles.study_oneColumn}>
                        <Text style={styles.study_column_title}>
                            小白快速入门开发
                        </Text>
                    </View>
                    {studyColumnOne.map((v,k) => (
                        <View style={[styles.study_oneColumn,{backgroundColor: '#f1fcfc'}]} key={k}>
                            <Text style={styles.study_column_option}>
                                {v}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default Study;
