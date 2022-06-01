import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import dynamicStyles from '../../styles/dynamicStyles';

const Data = [
    {
        name: '黄飞鸿',
        content: '你知道我有多牛B吗',
        commentNum: 666,
        thumbsUpNum: 12,
        img: require('../../assets/content/default_headshot.png'),
    },
    {
        name: '廖飞',
        content: '我想啸啊',
        commentNum: 111,
        thumbsUpNum: 30,
        img: require('../../assets/content/default_headshot.png'),
    },
    {
        name: '马飞飞',
        content: '我敢吃**',
        commentNum: 156,
        thumbsUpNum: 30,
        img: require('../../assets/content/default_headshot.png'),
    },
    {
        name: '卢本飞',
        content: '伞兵一号廖飞，请求奖励',
        commentNum: 3215,
        thumbsUpNum: 36,
        img: require('../../assets/content/default_headshot.png'),
    },
    {
        name: '渣渣灰',
        content: '佛山渣渣鸿请求赐教',
        commentNum: 325,
        thumbsUpNum: 124,
        img: require('../../assets/content/default_headshot.png'),
    },
];

function messageBox(name, content, commentNum, thumbsUpNum, headImg) {
    return (<View style={dynamicStyles.dynamic_message_box}>
        <View style={dynamicStyles.column}>
            <Image source={headImg} style={dynamicStyles.headshot_box}/>
            <Text style={dynamicStyles.name_font}>{name}</Text>
        </View>
        <View style={{marginVertical: 10}}>
            <Text
                style={dynamicStyles.content_font}
                numberOfLines={4}
                ellipsizeMode="tail"
            >
                {content}
            </Text>
        </View>
        <View style={dynamicStyles.column}>
            <Image source={require('../../assets/message_content/forward_icon.png')}
                   style={dynamicStyles.functionBtn_icon}/>
            <Text style={dynamicStyles.function_font}>转发</Text>
            <Image source={require('../../assets/message_content/comment_icon.png')}
                   style={dynamicStyles.functionBtn_icon}/>
            <Text style={dynamicStyles.function_font}>{commentNum}</Text>
            <Image source={require('../../assets/message_content/thumbsUp_icon.png')}
                   style={dynamicStyles.functionBtn_icon}/>
            <Text style={dynamicStyles.function_font}>{thumbsUpNum}</Text>
        </View>
    </View>);
}

const SquareScreen = (props) => {
    const {params} = props.route;
    const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {

        if (firstRender) {
            setFirstRender(false);
        } else {
            Data.unshift(params);
            console.log(params);
            console.log(Data);
        }
    }, [params]);

    return (
        <>
            <View style={dynamicStyles.dynamic_column_style}>
                <Text style={[dynamicStyles.dynamic_box, {color: '#000'}]}>热门</Text>
                <Text style={dynamicStyles.dynamic_box}>最新</Text>
                <Text style={dynamicStyles.dynamic_box}>投票</Text>
            </View>
            <View style={dynamicStyles.content_box}>
                <FlatList
                    data={Data}
                    renderItem={({item}) => messageBox(item.name, item.content, item.commentNum, item.thumbsUpNum, item.img)}
                    numColumns={1}
                    refreshing={true}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    );
};

export default SquareScreen;
