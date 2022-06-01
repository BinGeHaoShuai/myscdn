import React from 'react';
import {Text, View, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native';
import mineStyles from '../styles/mineStyles';
import wuli from '../styles/wuli';

const MyStudyData = [
    {title: '每日一练', img: require('../assets/my/my_study/test2.png')},
    {title: '技能树', img: require('../assets/my/my_study/tree.png')},
    {title: '课程', img: require('../assets/my/my_study/curriculum_system.png')},
    {title: '专栏', img: require('../assets/my/my_study/column.png')},
    {title: '超级会员', img: require('../assets/my/my_study/vip_bonus.png')},
    {title: '电子书', img: require('../assets/my/my_study/book.png')},
    {title: 'C认证', img: require('../assets/my/my_study/authoritative_certification.png')},
    {title: '资源', img: require('../assets/my/my_study/download.png')},
];
const MyCreationData = [
    {title: '内容管理', img: require('../assets/my/my_creation/lamp.png')},
    {title: '粉丝数据', img: require('../assets/my/my_creation/data.png')},
    {title: '内容数据', img: require('../assets/my/my_creation/look_data.png')},
    {title: '收益明细', img: require('../assets/my/my_creation/earnings.png')},
];

const MyMoreServiceData = [
    {title: '签到', img: require('../assets/my/more_services/sign_in.png')},
    {title: '钱包', img: require('../assets/my/more_services/purse.png')},
    {title: '收藏', img: require('../assets/my/more_services/collection.png')},
    {title: '浏览历史', img: require('../assets/my/more_services/history.png')},
    {title: '指数', img: require('../assets/my/more_services/economic_indices.png')},
    {title: '订单', img: require('../assets/my/more_services/orders.png')},
    {title: 'API服务', img: require('../assets/my/more_services/API.png')},
    {title: '我的社区', img: require('../assets/my/more_services/community_service.png')},
    {title: '抽奖记录', img: require('../assets/my/more_services/lottery.png')},
    {title: '在线客服', img: require('../assets/my/more_services/online_customer.png')},
    {title: '超级实习生', img: require('../assets/my/more_services/students.png')},
    {title: '', img: ''},
];

function infoBox(title, number) {
    return (<View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={mineStyles.name_font}>{number}</Text>
        <Text style={{marginTop:10 * wuli}}>{title}</Text>
    </View>);
}

function otherGiftBox(title, imgUrl) {
    return (<View style={{justifyContent: 'center'}}>
        <Image source={imgUrl} style={mineStyles.other_gift_icon}/>
        <Text style={mineStyles.other_gift_font}>{title}</Text>
    </View>);
}

function oneBox(title, imgUrl) {
    if (title === '' && imgUrl === '') {
        return (<View style={mineStyles.oneBox_style} />);
    }
    return (<View style={mineStyles.oneBox_style}>
        <Image source={imgUrl} style={mineStyles.oneBox_icon}/>
        <Text style={mineStyles.oneBox_font}>{title}</Text>
    </View>);
}

const My = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <View style={mineStyles.header}>
                <Image source={require('../assets/my/icon_sweep.png')} style={mineStyles.head_icon}/>
                <TouchableOpacity onPress={() => navigation.navigate('SetScreen')}>
                    <Image source={require('../assets/my/icon_setup.png')} style={mineStyles.head_icon}/>
                </TouchableOpacity>
            </View>
            <View style={mineStyles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={mineStyles.head_shot_view}>
                        <View style={mineStyles.center}>
                            <Image source={require('../assets/content/default_headshot.png')} style={mineStyles.headshot}/>
                            <Text style={mineStyles.name_font}>廖飞侠</Text>
                        </View>
                        <Image source={require('../assets/my/icon_right.png')} style={mineStyles.right_icon}/>
                    </View>
                    <View style={mineStyles.my_concern}>
                        {infoBox('关注', '23')}
                        <View style={mineStyles.line}/>
                        {infoBox('粉丝', '6000')}
                        <View style={mineStyles.line}/>
                        {infoBox('访问', '9000')}
                        <View style={mineStyles.line}/>
                        {infoBox('排名', '10.9w')}
                    </View>
                    <View style={mineStyles.csdn_vip_view}>
                        <View style={mineStyles.open_vip_box}>
                            <View style={mineStyles.center}>
                                <Image source={require('../assets/my/csdn_vip/vip.png')}
                                       style={mineStyles.vip_icon}/>
                                <View style={{marginLeft: 10 * wuli}}>
                                    <Text style={mineStyles.title_vip_font}>CSDN会员</Text>
                                    <Text>最低0.8元/天，享免费下载、...</Text>
                                </View>
                            </View>
                            <View style={[mineStyles.center, mineStyles.open_vip_btn]}>
                                <Text style={mineStyles.open_vip_btn_font}>立即开通</Text>
                            </View>
                        </View>
                        <View style={mineStyles.other_gift_box}>
                            {otherGiftBox('抽万元豪礼', require('../assets/my/csdn_vip/gift.png'))}
                            {otherGiftBox('赠1年', require('../assets/my/csdn_vip/icon-give.png'))}
                            {otherGiftBox('会员权益', require('../assets/my/csdn_vip/cloud_download.png'))}
                            {otherGiftBox('疯狂盲盒', require('../assets/my/csdn_vip/box.png'))}
                        </View>
                    </View>
                    <View style={mineStyles.content_box}>
                        <Text style={mineStyles.module_font}>我的学习</Text>
                        <FlatList
                            data={MyStudyData}
                            renderItem={({item}) => oneBox(item.title, item.img)}
                            numColumns={4}
                            columnWrapperStyle={mineStyles.one_column_styles}
                            />
                    </View>
                    <View style={mineStyles.content_box}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={mineStyles.module_font}>创作中心</Text>
                            <Text>未上榜></Text>
                        </View>

                        <FlatList
                            data={MyCreationData}
                            renderItem={({item}) => oneBox(item.title, item.img)}
                            numColumns={4}
                            columnWrapperStyle={mineStyles.one_column_styles}
                        />
                    </View>
                    <View style={mineStyles.content_box}>
                        <Text style={mineStyles.module_font}>更多服务</Text>
                        <FlatList
                            data={MyMoreServiceData}
                            renderItem={({item}) => oneBox(item.title, item.img)}
                            numColumns={4}
                            columnWrapperStyle={mineStyles.one_column_styles}
                        />
                    </View>
                </ScrollView>

            </View>
        </View>
    );
};

export default My;
