/**
 * Screen
 * meituandemo
 * Created by peng on 2017/5/23 13:56.
 * @WebStorm
 */
import React from 'react'

import { Dimensions, Platform, PixelRatio } from 'react-native'

export default {
    screenWidth : Dimensions.get('screen').width,
    screenHeght: Dimensions.get('screen').height,
    scale:PixelRatio.getPixelSizeForLayoutSize(),
    statusBarHeight:(platform.OS ==='ios'? 20: 0)
}