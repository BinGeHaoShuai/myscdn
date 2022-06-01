import {StyleSheet} from 'react-native';
import wuli from './wuli';
const hotlistStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    index_box: {
        width: 20 * wuli,
        height: 20 * wuli,
        borderRadius: 10 * wuli,
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
    },
    box_row: {
        flexDirection: 'row',
    },
    ranking: {
        flexDirection: 'row',
        width: '100%',
        height: 50 * wuli,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ranking_author: {
        fontSize: 17 * wuli,
        color: '#8a8a8a',
        lineHeight: 20 * wuli,
    },
    ranking_hot: {
        fontSize: 13 * wuli,
        color: '#8a8a8a',
    },
    item: {
        paddingHorizontal: 20 * wuli,
        backgroundColor: '#fff',
        marginHorizontal: 1 * wuli,
        width: '100%',
    },
    title: {
        flexDirection: 'row',
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    title_v: {
        width: 230 * wuli,
        height: 80 * wuli,
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    title_text: {
        fontSize: 20 * wuli,
        marginRight: 10 * wuli,
        color: '#000',
    },
    content: {
        flexDirection: 'row',
        bottom: 0,
    },
    content_text: {
        fontSize: 15 * wuli,
        color: '#8a8a8a' * wuli,
    },
    content_img: {
        height: 80 * wuli,
        width: 120 * wuli,
    },
    icon_more: {
        width: 30 * wuli,
        height: 30 * wuli,
        marginBottom: 0,
    },
    line: {
        marginTop: 5 * wuli,
        width: '100%',
        alignSelf: 'center',
        height: 1,
        backgroundColor: '#8a8a8a',
    },
    hot_icon: {
        width: 15 * wuli,
        height: 15 * wuli,
    },
});

module.exports = hotlistStyles;
