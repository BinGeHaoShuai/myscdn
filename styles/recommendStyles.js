import {StyleSheet} from 'react-native';
import wuli from './wuli';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#fff',
        padding: 10 * wuli,
        marginBottom: 1,
        marginHorizontal: 1,
        width: '100%',
    },
    title: {
        flexDirection: 'row',
        marginBottom: 15 * wuli,
    },
    title_v: {
        width:230 * wuli,
        padding: 10 * wuli,
    },
    title_text: {
        fontSize: 20 * wuli,
        marginRight:10 * wuli,
        fontWeight: 'bold',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    content_text: {
        marginLeft: 10 * wuli,
        fontSize: 15 * wuli,
        color: '#8a8a8a',
    },
    content_img: {
        height: 100 * wuli,
        width:150 * wuli,
    },
    icon_more: {
        width: 30 * wuli,
        height: 30 * wuli,
        marginBottom:0,
    }
});

module.exports = styles;
