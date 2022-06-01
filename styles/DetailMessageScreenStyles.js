import {StyleSheet} from 'react-native';
import wuli from './wuli';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15 * wuli,
    },
    textTitle: {
        color: '#000',
        fontSize: 25 * wuli,
        marginVertical: 12 * wuli,
    },
    headshot: {
        width: 50 * wuli,
        height: 50 * wuli,
        borderRadius: 25 * wuli,
    },
    space_between: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    author_box: {
        marginLeft: 10 * wuli,
    },
    author_name: {
        fontSize: 15 * wuli,
        fontWeight: 'bold',
        color: '#000',
    },
    content_type: {
        fontSize: 12 * wuli,
        color: '#ca5b40',
        backgroundColor: '#ffe9e7',
        marginTop: 5 * wuli,
        width: 30 * wuli,
        textAlign: 'center',
    },
    concernBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70 * wuli,
        height: 30 * wuli,
        borderRadius: 15 * wuli,
        borderColor: '#d5d4da',
        borderWidth: 1,
    },
    concernBtn_font: {
        fontSize: 18 * wuli,
        color: '#000',
    },
    content_box: {
        flex: 1,
        marginTop: 15 * wuli,
    },
    content_font: {
        color: '#000',
        fontSize: 16 * wuli,
    }
});

module.exports = styles;
