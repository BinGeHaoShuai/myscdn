import {StyleSheet, Dimensions} from 'react-native';
import wuli from './wuli';

const messageStyles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        height: 80 * wuli,
        paddingHorizontal: 15 * wuli,
        borderBottomWidth: 1 / 2,
        borderColor: '#b7b5b5',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header_font: {
        fontSize: 20 * wuli,
        marginRight: 10 * wuli,
    },
    header_icon: {
        width: 30 * wuli,
        height: 30 * wuli,
    },
    clear_message_icon: {
        width: 20 * wuli,
        height: 20 * wuli,
    },
    center_view: {
        padding: 20 * wuli,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    center_icon_style: {
        width: 40 * wuli,
        height: 40 * wuli,
        alignSelf: 'center',
        marginBottom: 5 * wuli,
    },
    message_box: {
        marginLeft: 10 * wuli,
        paddingRight: 10 * wuli,
        flexDirection: 'row',
        width: '100%',
        height: 100 * wuli,
        borderBottomWidth: 1,
        borderBottomColor: '#b7b5b5',
        alignItems: 'center',
    },
    author_nameAndTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    author_content: {
        width: '80%',
        fontSize: 15 * wuli,
    },
    author_info_box: {
        flex: 1,
        paddingHorizontal: 20 * wuli,
        height: 70 * wuli,
        justifyContent: 'space-between',
    },
    author_name_font: {
        fontSize: 20 * wuli,
        fontWeight: 'bold',
        color: '#000',
    },
    author_time_font: {
        color: '#b7b5b5',
    },
});

module.exports = messageStyles;
