import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/core'
import squaredata from '../assets/data/squaredata.json';

const PublishDynamicsScreen = () => {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    const publish = (text) => {
        let newdata = {
                name: '廖飞侠',
                content: text,
                commentNum: 0,
                thumbsUpNum: 0,
                img: require('../assets/content/default_headshot.png'),
            };
        if (text === '') {
            alert('内容不能为空！');
        }else{
            navigation.navigate('SquareScreen', newdata);
        }

    }

    return (
        <View style={styles.container}>
            {/*富文本框*/}
            <View>
                <TextInput
                    style={styles.textArea}
                    multiline={true}
                    paddingVertical={0}
                    selectionColor={'#b2b2b2'}
                    textAlignVertical={'top'}
                    placeholderTextColor={'#b2b2b2'}
                    underlineColorAndroid={'transparent'}
                    maxLength={1024}
                    placeholder="有什么新观点？快来说说看~"
                    onChangeText={
                        (text) => {
                            setText(text);
                        }
                    }
                />
                <Text style={styles.text_num}>
                    {text.length}/{1024}
                </Text>
            </View>
            <TouchableOpacity activeOpacity={0.5} onPress={() => publish(text)}>
                <View style={styles.btn}>
                    <Text style={styles.btn_font}>发布</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    textArea: {
        width: '100%',
        height: 200,
        fontSize: 15,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#666666',
        marginBottom: 20,
    },
    text_num: {
        position: 'absolute',
        bottom: 30,
        right: 10,
        fontSize: 14,
    },
    btn: {
        position: 'absolute',
        right: 20,
        width: 50,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#5e5d5d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_font: {
        color: '#fff',
        fontSize: 15,
    },
});

export default PublishDynamicsScreen;
