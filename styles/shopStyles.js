import {StyleSheet} from 'react-native';
import wuli from './wuli';

const shopStyles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#f1f1f7',
    },
    title: {
        height: 80 * wuli,
        width: '100%',
        backgroundColor: '#fff',
        color: '#000',
        justifyContent: 'center',
    },
    title_text: {
        fontSize: 25 * wuli,
        textAlign: 'center',
    },
    shopContent: {
        paddingHorizontal: 20 * wuli,
        flex: 1,
        backgroundColor: '#fafafc',
    },
    searchView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80 * wuli,
        width: '100%',
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3 * wuli,
        backgroundColor: '#dedee3',
    },
    searchIcon: {
        width: 20 * wuli,
        height: 20 * wuli,
        marginHorizontal: 5 * wuli,
    },
    searchInput: {
        padding: 0,
        width: 300 * wuli,
        height: 40 * wuli,
    },
    hoppingCartIcon: {
        width: 30 * wuli,
        height: 30 * wuli,
    },
    carouselDiagram: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        backgroundColor: 'red',
    },
    paidResourcesView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 100 * wuli,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    center_space_between: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        width: '100%',
    },
    shop_center_Icon: {
        width: 50 * wuli,
        height: 50 * wuli,
    },
    shopBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10 * wuli,
        justifyContent: 'space-between',
        width: 175 * wuli,
        height: 80 * wuli,
        backgroundColor: '#fff',
    },
    title_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5 * wuli,
    },
    title_font: {
        fontSize: 15 * wuli,
        fontWeight: 'bold',
    },
    more_font: {
        fontSize: 13 * wuli,
    },
    content_font: {
        marginTop: 10 * wuli,
        fontSize: 15 * wuli,
        color: '#b7b5b5',
    },
    apiMarket_Icon: {
        alignSelf: 'center',
        width: 110 * wuli,
        height: 110 * wuli,
    },
    marketBox: {
        backgroundColor: '#fff',
        padding: 10 * wuli,
        width: 180 * wuli,
    },
    pay_font: {
        fontSize: 15 * wuli,
        color: 'red',
        textAlign: 'left',
    },
    wrapper: {},
    slide: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    swiperImg: {
        width: '100%',
        height: '100%',
    },
    recommendBox_width: {
        width: 110 * wuli,
    },
    imgModule2_title_font: {
        fontSize: 17 * wuli, fontWeight: 'bold',
    },
    imgModule2_describe_font: {
        fontSize: 14 * wuli,
    },
    courseBox: {width: '100%',
        flexDirection: 'row',
        marginVertical: 5 * wuli,
    },
    courseBox_img: {
        width: 110 * wuli,
        height: 110 * wuli,
    },

});

module.exports=shopStyles;
