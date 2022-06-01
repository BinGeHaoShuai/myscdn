import {Dimensions} from 'react-native';

let {width, height, scale} = Dimensions.get('window');
const Width = 1080;
const DpWidth = 412;
const wuli = scale * width / Width * width/DpWidth;

module.exports = wuli;
