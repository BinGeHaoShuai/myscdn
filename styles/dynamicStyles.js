import { StyleSheet} from 'react-native';
import wuli from './wuli';

const dynamicStyles = StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#fff',
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headTab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50 * wuli,
        paddingHorizontal: 15 * wuli,
    },
    headTab_font_box: {
        width: 200,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headTab_font: {
        fontSize: 16,

    },
    more_btn_icon: {
        width: 30,
        height: 30,
    },
    line: {
        width: '100%',
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f4',
    },
    dynamic_column_style: {
        height: 60 * wuli,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    dynamic_box: {
        fontSize: 17 * wuli,
        height: 40 * wuli,
        width: 60 * wuli,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#fafafc',
        marginLeft: 15 * wuli,
    },
    content_box: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headshot_box: {
        width: 50 * wuli,
        height: 50 * wuli,
        borderRadius: 25 * wuli,
    },
    name_font: {
        fontSize: 15 * wuli,
        color: '#000',
        marginLeft: 10 * wuli,
    },
    content_font: {
        fontSize: 18 * wuli,
        color: '#000',
    },
    functionBtn_icon: {
        width: 20 * wuli,
        height: 20 * wuli,
        marginRight: 7 * wuli,
    },
    function_font: {
        fontSize: 14 * wuli,
        color: '#000',
        width: 60 * wuli,
    },
    dynamic_message_box: {
        padding: 15 * wuli,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f4',
    },
    infoView: {
        flexDirection: 'row',
        padding: 10,
        with: '100%',
        height: 100,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#dbdbdb',
    },
    netbar_pic: {
        width: 100,
        height: 70,
    },
    netbar_name: {
        color: '#000',
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10,
    },
    netbar_location: {
        color: '#5e5c5c',
        fontSize: 11,
        width: '100%',
        marginLeft: 10,
        marginBottom: 10,
    },
    netbar_distance: {
        color: '#555454',
        fontSize: 10,
        marginBottom: 10,
        textAlign: 'right',
    },
});

module.exports=dynamicStyles;
