import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS,  assets } from '../constants'


export const NFTTitle = ({title, subtitle, titleSize, subtitleSize}) => {
    return (
        <View>
          <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: titleSize,
            color: COLORS.primary,
            }}>{title}</Text>
          <Text style={{
            fontFamily: FONTS.regular,
            fontSize: subtitleSize,
            color: COLORS.primary,
            }}>{subtitle}</Text>
        </View>
      )
}

export const EtherPrice = ({price}) => {
  return (
    <View style={{
      flexDirection: "row",
      alignItems: "center",
    }}>
      <Image source={assets.eth}
      resizeMode = "contain"
      style={{
        width: 20,
        height: 20,
        marginRight: 2
      }}/>
      <Text style={{
        fontFamily: FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.primary
      }}>{price}</Text>
    </View>
  )
}

export const ImageCmp = ({imgUrl, index}) => {
  return (
    <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
            width: 48,
            height: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
    />
  )
}

export const People = () => {
    return (
      <View style={{ flexDirection: 'row'}}>
        {[assets.person01, assets.person03, assets.person04].map((imgUrl, index) => (
            <ImageCmp imgUrl={ imgUrl} index={index} key={'People-${index}'}/>
        ))}
      </View>
    )
}

export const EndDate = () => {
    return (
      <View style ={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
    }}>
        <Text style ={{ 
            fontFamily: FONTS.regular,
            fontSize: FONTS.small,
            color: COLORS.primary}}>Ending in
        </Text>
        <Text style ={{ 
            fontFamily: FONTS.semiBold,
            fontSize: FONTS.small,
            color: COLORS.primary}}>12h 30m
        </Text>
      </View>
    )
}

export const SubInfo = () => {
    return (
      <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <People/>
        <EndDate />
        
      </View>
    )
  }

