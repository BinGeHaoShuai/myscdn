import {PermissionsAndroid} from 'react-native';

export function getPositionInit() {

    // //如果使用高德定位，则设置高德key与需要逆地理编码的属性；如果不使用高德定位则注释掉下面代码
    // await init({
    //     ios: '[你的高德ios key]',
    //     android: "[你的高德android key]"// 传入AMAP_KEY
    // });
    // // android 需要逆地理编码
    // setNeedAddress(true);
    // // ios 需要逆地理编码
    // setLocatingWithReGeocode(true);

    if (Platform.OS === "android") {
        //获取gps位置是否打开
        return LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message: "<h2>开启位置服务</h2>开启位置服务，获取精准定位<br/>",
            ok: "去开启",
            cancel: "取消",
            enableHighAccuracy: true,
            showDialog: true,
            openLocationServices: true,
            preventOutSideTouch: false,
            preventBackClick: false,
            providerListener: true
        }).then(async function (success) {
            console.log("获取gps成功", success);

            const permissions = [
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
            ];
            const granteds = await PermissionsAndroid.requestMultiple(permissions);
            console.log("granteds====", granteds);
            if (granteds['android.permission.ACCESS_FINE_LOCATION'] === 'granted' && granteds['android.permission.ACCESS_COARSE_LOCATION'] === 'granted') {
                return true;
            } else {
                Modal.alert("请开启定位权限", "请开启获取手机位置服务，否则系统部分功能将无法使用", [
                    {
                        text: "开启", onPress: () => {
                            console.log("点击开启按钮");
                            if (
                                granteds['android.permission.ACCESS_FINE_LOCATION'] === 'never_ask_again' && granteds['android.permission.ACCESS_COARSE_LOCATION'] === 'never_ask_again'
                            ) {
                                Alert.alert("警告", "您将应用获取手机定位的权限设为拒绝且不再询问，功能无法使用!" +
                                    "想要重新打开权限，请到手机-设置-权限管理中允许[你的应用名称]app对该权限的获取");
                                return false;
                            } else {
                                //短时间第二次可以唤醒再次请求权限框，但是选项会从拒绝变为拒绝且不再询，如果选择该项则无法再唤起请求权限框
                                getPositionInit();
                            }
                        }
                    },
                    {
                        text: "拒绝授权", onPress: () => {
                            return false;
                        }
                    }
                ])
            }
        })
    }
}
