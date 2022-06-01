import {StyleSheet} from 'react-native';
import wuli from './wuli';

const styles = StyleSheet.create({
    headStyle: {
        flex: 1,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:20 * wuli,
        paddingHorizontal: 15 * wuli,
        backgroundColor: "#fff",
    },
    inputBox: {
        height: 40 * wuli,
        width: 250 * wuli,
        padding: 0,
        margin: 0,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#9e9e9e',
        borderRadius: 4 * wuli,
    },
    bottomImg: {
        height: 30 * wuli,
        width: 30 * wuli,
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e6e6e6'},
    img1_style: {
        width: 40 * wuli,
        height: 40 * wuli,
    },
    img2_style: {
        width: 30 * wuli,
        height: 30 * wuli,
    },
    search_icon: {
        width: 20 * wuli,
        height: 20 * wuli,
        marginLeft: 5 * wuli,
    },
    top_tab_font: {
        fontSize: 16 * wuli,
        fontWeight: 'bold',
    },
});

module.exports = styles;
