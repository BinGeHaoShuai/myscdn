import {StyleSheet} from 'react-native';
import wuli from './wuli';
const styles = StyleSheet.create({
    contentBox: {
        flex: 1,
    },
    space_between: {
        flexDirection: 'row',
        paddingHorizontal: 15 * wuli,
        width: '100%',
        height: 60 * wuli,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    font: {
        fontSize: 18 * wuli,
        color: '#000',
    },
    right_icon: {
        width: 20 * wuli,
        height: 20 * wuli,
    },
});

module.exports = styles;
