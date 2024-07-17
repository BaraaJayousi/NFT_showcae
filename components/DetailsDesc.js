import { View, Text } from 'react-native'
import React from 'react'
import {useState} from 'react'

import { EtherPrice, NFTTitle } from './SubInfo'
import{ COLORS, SIZES, FONTS} from '../constants'


const DetailsDesc = ({data}) => {
    const [text, setText] = useState(data.description.slice(0,100));
    const [readMore, setReadMore] = useState(false);
  return (
    <>
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <NFTTitle
                title={data.name}
                subtitle={data.creator}
                titleSize={SIZES.extraLarge}
                subtitleSize = {SIZES.font}
            />

            <EtherPrice price={data.price}/>
        </View>

        <View style = {{marginVertical: SIZES.extraLarge * 1.5}}>
            <Text style={{
                fontSize: SIZES.font,
                fontFamily: FONTS.bold,
                color: COLORS.primary
            }}>Describtion</Text>

            <View style={{marginTop: SIZES.base}}>
            <Text style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.regular,
                color: COLORS.secondary,
                lineHeight: SIZES.large
            }}>{text}
            {!readMore && '...'}
            <Text style={{ontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
                }}
                onPress={()=> {
                    if(!readMore){
                        setText(data.description);
                        setReadMore(true);
                    }else{
                        setText(data.description.slice(0,100));
                        setReadMore(false);
                    }
                }}
                > {readMore? 'Show less' : ' Read More'}

            </Text>
            </Text>
            
            </View>

        </View>
    </>
  )
}

export default DetailsDesc