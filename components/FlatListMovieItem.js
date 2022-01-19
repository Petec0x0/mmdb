import React from 'react';
import { Image, View, Text } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons'; 

export const FlatListMovieItem = ({ title, poster }) => {
    return (
        <View style={{width: '50%', padding: 10}}>
            <Image
                style={{height: 150, borderRadius: 8}}
                source={{
                    uri: `https://image.tmdb.org/t/p/w500/${poster}`,
                    }}
                defaultSource={require('../assets/default_thumbnail.png')}
            />
            <MaterialIcons name="favorite" size={28} color="red" style={{position:"absolute", right: 15, top: 15}} />
            <Text style={{color: "#fff", fontWeight: 'bold', fontSize: 15}}>{title}</Text>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="star" size={15} color="#6b059e" />
                <MaterialIcons name="star" size={15} color="#6b059e" />
                <MaterialIcons name="star" size={15} color="#6b059e" />
                <MaterialIcons name="star" size={15} color="#6b059e" />
                <MaterialIcons name="star-half" size={15} color="#6b059e" />
            </View>
        </View>
    )
}
