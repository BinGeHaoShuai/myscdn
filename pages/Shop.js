import React from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';
import shopStyles from '../styles/shopStyles';
import Swiper from 'react-native-swiper';
import wuli from '../styles/wuli';

const SwiperImg = [
    {img: require('../assets/swiperImg/img1.jpg')},
    {img: require('../assets/swiperImg/img2.jpg')},
    {img: require('../assets/swiperImg/img3.jpg')},
    {img: require('../assets/swiperImg/img4.jpg')},
]

function swiperImg(url) {
    return (<View style={shopStyles.slide}>
        <Image source={url}
               style={shopStyles.swiperImg}/>
    </View>);
}

function ImgModule1(text, url = require('../assets/shop_content/selection_of_books.png')) {
    return (<View style={shopStyles.center}>
        <Image source={url} style={shopStyles.shop_center_Icon}/>
        <Text>{text}</Text>
    </View>);
}

function ImgModule2(title, describe, url = require('../assets/shop_content/icon_vip.png')) {
    return (< View style={shopStyles.shopBox}>
        <View>
            <Text style={shopStyles.imgModule2_title_font}>{title}</Text>
            <Text style={shopStyles.imgModule2_describe_font}>{describe}</Text>
        </View>
        <Image source={url} style={shopStyles.shop_center_Icon}/>
    </View>);
}

function title(title, moreBtn = '') {
    return (<View style={shopStyles.title_view}>
        <Text style={shopStyles.title_font}>{title}</Text>
        <Text style={shopStyles.more_font}>{moreBtn}</Text>
    </View>);
}

function marketBox(title, amount, picUrl) {
    return (<View style={shopStyles.marketBox}>
        <Image source={picUrl} style={shopStyles.apiMarket_Icon}/>
        <Text style={shopStyles.title_font}>{title}</Text>
        <Text style={shopStyles.pay_font}>¥{amount}</Text>
    </View>);
}

function recommendBox(title, amount, picUrl) {
    return (<View style={shopStyles.recommendBox_width}>
        <Image source={picUrl} style={shopStyles.apiMarket_Icon}/>
        <Text style={[shopStyles.title_font, {height: 50 * wuli}]}>{title}</Text>
        <Text style={shopStyles.pay_font}>¥{amount}</Text>
    </View>);
}

function courseBox(title, teacher, number, amount, picUrl) {
    return (<View style={shopStyles.courseBox}>
        <Image source={picUrl} style={shopStyles.courseBox_img}/>
        <View style={{flex: 1, marginHorizontal: 10 * wuli}}>
            <Text style={[shopStyles.title_font, {width: 230 * wuli}]}>{title}</Text>
            <Text style={shopStyles.content_font}>讲师·程序员{teacher} 学习·{number}人</Text>
            <Text style={[shopStyles.pay_font, {position: 'absolute', bottom: 5 * wuli}]}>¥{amount}</Text>
        </View>
    </View>);
}

function sourceBox(title, downloadNum, describe, picUrl) {
    return (<View style={{width: '100%', flexDirection: 'row', marginVertical: 5}}>
        <Image source={picUrl} style={{width: 110 * wuli, height: 110 * wuli}}/>
        <View style={{flex: 1, marginHorizontal: 10 * wuli}}>
            <Text style={[shopStyles.title_font, {width: 230 * wuli}]}>{title}</Text>
            <Text style={[shopStyles.content_font, {
                backgroundColor: '#efefef',
                width: 100 * wuli,
                textAlign: 'center',
            }]}>{downloadNum}下载</Text>
            <Text style={shopStyles.content_font}>{describe}</Text>
        </View>
    </View>);
}

const Shop = () => {
    return (
        <View style={shopStyles.box}>
            <View style={shopStyles.title}>
                <Text style={shopStyles.title_text}>开发者商城</Text>
            </View>
            <View style={shopStyles.shopContent}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={shopStyles.searchView}>
                        <View style={shopStyles.searchBox}>
                            <Image source={require('../assets/icon_search.png')} style={shopStyles.searchIcon}/>
                            <TextInput placeholder={'请输入想找的商品'} style={shopStyles.searchInput}/>
                        </View>
                        <Image source={require('../assets/shop_content/icon_shoppingCart.png')}
                               style={shopStyles.hoppingCartIcon}/>
                    </View>
                    <View style={shopStyles.carouselDiagram}>
                        <Swiper
                            style={shopStyles.wrapper}
                            autoplay
                            autoplayTimeout={3}
                            loop={true}
                            paginationStyle={{
                                bottom: 15,
                                right: 10,
                                left: null
                            }}
                            dot={<View style={{
                                backgroundColor: 'rgba(0,0,0,0.3)',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3,
                            }}/>}
                            activeDotColor={'#fff'}
                        >
                            {SwiperImg.map((item) => swiperImg(item.img))}
                        </Swiper>
                    </View>
                    <View>
                        <View style={shopStyles.paidResourcesView}>
                            {ImgModule1('精选书籍', require('../assets/shop_content/selection_of_books.png'))}
                            {ImgModule1('程序员周边', require('../assets/shop_content/arounds.png'))}
                            {ImgModule1('开发工具', require('../assets/shop_content/develop_tools.png'))}
                            {ImgModule1('下载资源', require('../assets/shop_content/downLoad_resource.png'))}
                        </View>
                        <View style={shopStyles.paidResourcesView}>
                            {ImgModule2('会员特惠', '买一年赠一年', require('../assets/shop_content/icon_vip.png'))}
                            {ImgModule2('Apple 专场', '最高直降2000元', require('../assets/shop_content/icon_sale.png'))}
                        </View>
                    </View>
                    {title('API市场', '更多>')}
                    <View>
                        <View style={[shopStyles.center_space_between, {marginBottom: 10}]}>
                            {marketBox('IT行业文本分词', '0.01', require('../assets/shop_content/APIMarket_img/words_icon.jpg'))}
                            {marketBox('身份证实名认证一分钱体验', '0.01', require('../assets/shop_content/APIMarket_img/identity_icon.jpg'))}
                        </View>
                        <View style={shopStyles.center_space_between}>
                            {marketBox('常用快递1分钱体验', '0.01', require('../assets/shop_content/APIMarket_img/courier_icon.jpg'))}
                            {marketBox('空气质量1分钱体验', '0.01', require('../assets/shop_content/APIMarket_img/air_icon.jpg'))}
                        </View>
                    </View>
                    {title('推荐专栏', '更多>')}
                    <View style={[shopStyles.center_space_between, {backgroundColor: '#fff', padding: 10}]}>
                        {recommendBox('爬虫100案例', '49.9', require('../assets/shop_content/recommend_img/study_img1.png'))}
                        {recommendBox('R语言从入门到机器学习', '89.9', require('../assets/shop_content/recommend_img/study_img2.png'))}
                        {recommendBox('Google Earth Engine', '199.9', require('../assets/shop_content/recommend_img/study_img3.png'))}
                    </View>
                    {title('名师课程', '更多>')}
                    <View style={[shopStyles.center, {backgroundColor: '#fff', padding: 10}]}>
                        {courseBox('MySql数据库', '研修院', '8754', '59', require('../assets/shop_content/course_img/courseImg1.png'))}
                        {courseBox('Python+Django+Vue3全栈开发商城项目', '研修院', '7297', '199', require('../assets/shop_content/course_img/courseImg2.png'))}
                        {courseBox('程序员的MySql数据库速成宝典', '研修院', '20432', '69', require('../assets/shop_content/course_img/courseImg3.png'))}
                        {courseBox('Python数据分析与挖掘从零开始', '研修院', '17533', '68', require('../assets/shop_content/course_img/courseImg4.png'))}
                    </View>
                    {title('资源合集', '更多>')}
                    <View style={[shopStyles.center, {backgroundColor: '#fff', padding: 10}]}>
                        {sourceBox('高质量程序员求职指南', '9327', '小廖出品，必为精品', require('../assets/shop_content/moreSource_img/sourse_img1.png'))}
                        {sourceBox('matlab优质内容专辑', '657736', '小廖出品，必为精品', require('../assets/shop_content/moreSource_img/sourse_img2.png'))}
                        {sourceBox('JAVA', '20432', '小廖出品，必为精品', require('../assets/shop_content/moreSource_img/sourse_img3.png'))}
                        {sourceBox('源码', '17533', '小廖出品，必为精品', require('../assets/shop_content/moreSource_img/sourse_img4.png'))}
                    </View>
                    {title('更多推荐')}
                </ScrollView>
            </View>
        </View>
    );
};

export default Shop;
