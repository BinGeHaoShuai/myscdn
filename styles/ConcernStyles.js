import {StyleSheet} from 'react-native';
import wuli from './wuli';

const styles = StyleSheet.create({
    box: {
        flex: 1,
    },
    topInfoBox: {
        width: '100%',
        height: 40 * wuli,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20 * wuli,
    },
    head_img: {
        height: 60 * wuli,
        width: 60 * wuli,
        borderRadius: 30 * wuli,
    },
    container_info: {
        marginLeft: 10 * wuli,
    },
    name_font: {
        color: '#000',
        fontSize: 18 * wuli,
        marginBottom: 10 * wuli,
    },
    fanBox: {
        paddingVertical: 3 * wuli,
        width: 60 * wuli,
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
    },
    fanFont: {
        fontSize: 10 * wuli,
        color: '#000',
    },
    concern_btn: {
        position: 'absolute',
        right: 15 * wuli,
        width: 70 * wuli,
        height: 30 * wuli,
        borderRadius: 15 * wuli,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    concern_btn_font: {
        color: '#000',
        fontSize: 13 * wuli,
    }

});

module.exports = styles;
