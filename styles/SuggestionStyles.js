import {StyleSheet} from 'react-native';
import wuli from './wuli';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 60 * wuli,
    },
    topImg: {
        width: '100%',
        height: 110 * wuli,
        margin: 15 * wuli,
    },
    tabs_box: {
        flexDirection: 'row',
        width: '100%',
        padding: 15 * wuli,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#c9c9c9'
    },
    tabs_font: {
        fontSize: 13 * wuli,
        marginRight: 20 * wuli,
    },
    content: {
        paddingHorizontal: 15 * wuli,
    },
    questionBox: {
        width: '100%',
        paddingVertical: 15 * wuli,
        borderBottomWidth: 1,
        borderColor: '#c9c9c9'
    },
    question_title: {
        color: '#000',
        fontSize: 16 * wuli,
        marginBottom: 10 * wuli,
    },
    question_type_box: {
        padding: 3 * wuli,
        marginRight: 20 * wuli,
        borderRadius: 3 * wuli,
        backgroundColor: '#e2ecfd',
    },
    question_type: {
        color: '#32356a',
        fontSize: 13 * wuli,
    }
});

module.exports = styles;
