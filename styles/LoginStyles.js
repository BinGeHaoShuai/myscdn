import {StyleSheet} from 'react-native';
import wuli from './wuli';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 30 * wuli,
    },
    inputBox: {
        width: '100%',
        height: 60 * wuli,
        fontSize: 18 * wuli,
    },
    bottomLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#9e9e9e',
        marginBottom: 20 * wuli,
    },
    bg: {
        flex: 1,
    },
    goRegister: {
        color: '#fff',
        fontSize: 15 * wuli,
        textDecorationLine: 'underline',
        textAlign: 'right',
    },
    btn: {
        marginTop: 50 * wuli,
        width: '100%',
        height: 50 * wuli,
        borderRadius: 25 * wuli,
        backgroundColor: '#9ec4cb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    login_font: {
        color: '#000',
        fontSize: 20 * wuli,
        fontWeight: 'bold',
    },
});

module.exports = styles;
