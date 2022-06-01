import {StyleSheet} from 'react-native';
import wuli from './wuli';
const mineStyle = StyleSheet.create({
    center: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 60 * wuli,
        padding: 15 * wuli,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    head_icon: {
        height: 30 * wuli,
        width: 30 * wuli,
    },
    right_icon: {
        width: 20 * wuli,
        height: 20 * wuli,
    },
    headshot: {
        height: 60 * wuli,
        width: 60 * wuli,
        borderRadius: 30 * wuli,
    },
    name_font: {
        fontSize: 20 * wuli,
        color: '#000',
        fontWeight: 'bold',
        marginHorizontal: 10 * wuli,
    },
    head_shot_view: {
        width: '100%',
        height: 100 * wuli,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        padding: 15 * wuli,
    },
    my_concern: {
        width: '100%',
        height: 100 * wuli,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20 * wuli,
    },
    csdn_vip_view: {
        width: '100%',
        height: 200 * wuli,
        borderRadius: 5 * wuli,
    },
    content_box: {
        width: '100%',
        borderRadius: 5 * wuli,
        padding: 10 * wuli,
        marginVertical: 5 * wuli,
        alignContent: 'space-between',
        backgroundColor: '#fff',
    },
    title_font: {
        fontSize: 15 * wuli,
        fontWeight: 'bold',
        color: '#000',
    },
    line: {
        borderRightWidth: 1,
        borderRightColor: '#efefef',
        width: 1,
        height: '70%',
    },
    open_vip_box: {
        backgroundColor: '#606770',
        padding: 10 * wuli,
        borderTopRightRadius: 5 * wuli,
        borderTopLeftRadius: 5 * wuli,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    vip_icon: {
        width: 36 * wuli,
        height: 30 * wuli,
    },
    title_vip_font: {
        marginBottom: 10 * wuli,
        fontSize: 17 * wuli,
        fontWeight: 'bold',
        color: '#deb16d',
    },
    open_vip_btn: {
        width: 100 * wuli,
        height: 50 * wuli,
        borderRadius: 25 * wuli,
        backgroundColor: '#eac287',
    },
    open_vip_btn_font: {
        fontSize: 18 * wuli,
        fontWeight: 'bold',
        color: '#7c5417',
    },
    other_gift_box: {
        backgroundColor: '#c2c8ce',
        padding: 15 * wuli,
        borderBottomRightRadius: 5 * wuli,
        borderBottomLeftRadius: 5 * wuli,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    other_gift_icon: {
        width: 35 * wuli,
        height: 35 * wuli,
        alignSelf: 'center',
        marginBottom: 10 * wuli,
    },
    other_gift_font: {fontSize: 15 * wuli, color: '#000', alignSelf: 'center'},
    oneBox_style: {
        justifyContent: 'center',
        marginBottom: 10 * wuli,
        width: 70 * wuli,
        height: 70 * wuli,
    },
    oneBox_icon: {
        width: 28 * wuli,
        height: 28 * wuli,
        alignSelf: 'center',
        marginBottom: 10 * wuli,
    },
    oneBox_font: {
        fontSize: 13 * wuli,
        color: '#000',
        alignSelf: 'center'
    },
    module_font: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 18 * wuli,
        marginBottom: 10 * wuli,
    },
    one_column_styles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

module.exports = mineStyle;
