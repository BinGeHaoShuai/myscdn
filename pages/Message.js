import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import messageStyle from '../styles/messageStyles';
import wuli from '../styles/wuli';
function headerBox(title, imgUrl) {
    return (<View style={{justifyContent: 'center'}}>
        <Image source={imgUrl} style={messageStyle.center_icon_style}/>
        <Text style={{fontSize: 17 * wuli}}>{title}</Text>
    </View>);
}

function messageBox(author, content, time, headShotImg) {
    return (<View style={messageStyle.message_box}>
        <Image source={headShotImg} style={{width: 60 * wuli, height: 60 * wuli, borderRadius: 30 * wuli}}/>
        <View style={messageStyle.author_info_box}>
            <View style={messageStyle.author_nameAndTime}>
                <Text style={messageStyle.author_name_font}>{author}</Text>
                <Text style={messageStyle.author_time_font}>{time}</Text>
            </View>
            <Text style={messageStyle.author_content}>{content}</Text>
        </View>

    </View>);
}

const Message = () => {
    return (
        <View style={messageStyle.box}>
            <View style={messageStyle.header}>
                <Image source={require('../assets/message_content/set_message_icon.png')} style={messageStyle.header_icon}/>
                <View style={{flexDirection: 'row',alignItems: 'center'}} >
                    <Text style={messageStyle.header_font}>消息</Text>
                    <Image source={require('../assets/message_content/clear_message_icon.png')} style={messageStyle.clear_message_icon}/>
                </View>
                <Image source={require('../assets/message_content/concern_icon.png')} style={messageStyle.header_icon}/>
            </View>
            <ScrollView>
                <View style={messageStyle.center_view}>
                    {headerBox('评论和@', require('../assets/message_content/comment_icon.png'))}
                    {headerBox('赞和收藏', require('../assets/message_content/thumbsUp_icon.png'))}
                    {headerBox('新增粉丝', require('../assets/message_content/people_icon.png'))}
                </View>
                <View>
                    {messageBox('廖飞', 'What is your name?', '2020-02-02', require('../assets/content/default_headshot.png'))}
                    {messageBox('黄飞鸿', 'I want to 啸', '4天前', require('../assets/content/default_headshot.png'))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Message;
