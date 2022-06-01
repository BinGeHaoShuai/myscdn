import {StyleSheet} from 'react-native';
import wuli from './wuli';

const studyStyles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 20 * wuli,
        backgroundColor: '#fff',
        marginBottom: 10 * wuli,
    },
    onRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    vip_title: {
        color: '#4c3202',
        fontSize: 22 * wuli,
        marginBottom: 5 * wuli,
    },
    vip_get_font: {
        fontSize: 12 * wuli,
    },
    open_vip_btn: {
        width: 80 * wuli,
        height: 30 * wuli,
        borderRadius: 15 * wuli,
        backgroundColor: '#e3bf81',
        justifyContent: 'center',
        alignItems: 'center',
    },
    open_vip_font: {
        fontSize: 13 * wuli,
        color: '#4c3202',
    },
    vip_content_box: {
        width: '100%',
        height: 30 * wuli,
        borderRadius: 15 * wuli,
        backgroundColor: '#e8f5f5',
        marginTop: 15 * wuli,
        paddingHorizontal: 15 * wuli,
    },
    column_box: {
        padding: 15 * wuli,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
    },
    column_font: {
        fontSize: 17 * wuli,
        color: '#2d2d2d',
        marginRight: 30 * wuli,
    },
    study_box: {
        width: '100%',
        borderRadius: 5 * wuli,
        paddingBottom: 5 * wuli,
        borderWidth: 1,
        borderColor: '#bababa',
    },
    study_oneColumn: {
        width: '100%',
        padding: 15 * wuli,
        borderBottomWidth: 1,
        borderBottomColor: '#bababa',
    },
    study_column_title: {
        fontSize: 17 * wuli,
        fontWeight: 'bold',
        color: '#000',
    },
    study_column_option: {
        fontSize: 14 * wuli,
        color: '#000',
    },
});

module.exports = studyStyles;
