import {StyleSheet} from 'react-native';
import wuli from './wuli';

const rankingStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 60 * wuli,
    },
    leftTabs: {
        width: '25%',
        height: '100%',
    },
    contentOfTabs: {
        width: '75%',
        height: '100%',
        backgroundColor: '#fff',
        paddingHorizontal:15 * wuli,
    },
    tabBox: {
        height: 50 * wuli,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 15 * wuli,
    },
    tab_module: {
        fontSize: 13 * wuli,
    },
    tabFont: {
        fontSize: 15 * wuli,
        color: '#000',
    },
    questionBox: {
        width: '100%',
        paddingVertical: 15 * wuli,
        borderBottomWidth: 1,
        borderColor: '#c9c9c9'
    },
    rankingId: {
        color: '#000',
        marginTop: 15 * wuli,
        marginRight: 10 * wuli,
    },
    question_title: {
        color: '#000',
        fontSize: 16 * wuli,
        marginBottom: 10 * wuli,
        width: 250 * wuli,
    },
});

module.exports = rankingStyles;
