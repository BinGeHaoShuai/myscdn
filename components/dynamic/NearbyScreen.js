import React, {useState,useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import dynamicStyles from '../../styles/dynamicStyles';
import axios from 'axios';
import keys from '../../assets/data/keys';
import Loading from '../../components/common/Loading';
import useSyncCallback from '../common/UseSyncCallback';


const notFoundImg = '../../assets/dynamic/notFound.png';
//http://restapi.amap.com/v3/place/around?key=2f67f0b08800f83887d92a815010d67b&
// location=106.789999,29.710938&keywords=%E7%BD%91%E5%90%A7&types=&radius=10000&offset=20&page=1&extensions=all
const InformationBox = (item) => {
    return (
        <View style={dynamicStyles.infoView} key={item.id}>
            <Image
                source={item.photos.length > 0 ? {uri: item.photos[0].url} : require(notFoundImg)}
                style={dynamicStyles.netbar_pic}/>
            <View style={dynamicStyles.content_box}>
                <Text style={dynamicStyles.netbar_name}>{item.name}</Text>
                <Text style={dynamicStyles.netbar_location}
                      numberOfLines={1}
                      ellipsizeMode="tail"
                >
                    {item.address}
                </Text>
                <Text style={dynamicStyles.netbar_distance}>距离{item.distance}米</Text>
            </View>
        </View>
    );
};

const NearbyScreen = () => {
    const [pois, setPois] = useState([]);
    const [loading, setLoading] = useState(false);

    const Location = () => {
        Geolocation.getCurrentPosition((pos) => {
                const coods = pos.coords;
                console.log(coods.longitude + ', ' + coods.latitude);
                axios.get('http://restapi.amap.com/v3/place/around', {
                    params: {
                        key: keys.GaoDeKey,
                        location: coods.longitude + ',' + coods.latitude,
                        keywords: '网吧',
                        radius: 10000,
                        offset: 20,
                        page: 1,
                        extensions: 'all',
                    },
                }).then((resp) => {
                    setPois(resp.data.pois);
                });
            }, error => {
                alert('获取位置失败：' + error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 5000,
            },
        );
    };

    useEffect(() => {
        changeLoadingState();
        setTimeout(() => {
            Location();
            changeLoadingState();
        }, 1000);
    }, []);

    const changeLoadingState = useSyncCallback(() => {
        setLoading(!loading);
    });

    return (
        <View style={dynamicStyles.content_box}>
            <ScrollView>
            <Text>   附近网咖</Text>
                {loading ? <Loading /> : <View />}
            {pois.map((item) => InformationBox(item))}
            </ScrollView>
        </View>
    );
};

export default NearbyScreen;
