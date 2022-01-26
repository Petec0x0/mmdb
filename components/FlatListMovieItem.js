import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { MaterialIcons  } from '@expo/vector-icons'; 

export const FlatListMovieItem = ({ id, title, poster, rating, liked }) => {
    const dispatch = useDispatch();
    // function for dispatching an action to like a movie
    const _likeMe = (id) => {
        return 0
    }

    // -----Do the ratings
    // // Check if the rating is whole number or float
    // const isRatingWhole = (rating % 1) === 0;
    // get the number of stars to display based on the rating
    let nStars = rating / 2;
    // Remove floating point from nStars if it exists
    nStars = ~~nStars;
    // Convert the number of stars to iterable
    const starArr = [...Array(nStars).keys()];
    // // If the rating has a floating point, add half star
    // const halfStar = (isRatingWhole && (starArr < 5)) ? [...Array(1).keys()] : [];
    // Pad the remaining rating space to make it 5
    const nPaddedStar = [...Array(5 - nStars).keys()];


    return (
        <View style={{width: '50%', padding: 10}}>
            <Image
                style={{height: 150, borderRadius: 8}}
                source={{
                    uri: `https://image.tmdb.org/t/p/w500/${poster}`,
                    }}
                defaultSource={require('../assets/default_thumbnail.png')}
            />
            <TouchableOpacity 
                style={{position:"absolute", right: 15, top: 15}} 
                onPress={_likeMe(id)}
            >
                <MaterialIcons 
                    name="favorite" 
                    size={28} 
                    color={liked ? "red" : '#fff'} 
                />
            </TouchableOpacity>
            <Text style={{color: "#fff", fontWeight: 'bold', fontSize: 15}}>{title}</Text>
            <View style={{flexDirection: 'row'}}>
                {
                    // Normal star rating
                    starArr.map((star) => (
                        <MaterialIcons key={star} name="star" size={15} color="#6b059e" />
                    ))
                }
                {
                    // // Half star rating added to the main star if the rating has a floating point 
                    // halfStar.map((star) => (
                    //     <MaterialIcons key={star} name="star-half" size={15} color="#6b059e" />
                    // ))
                }
                {
                    // padded empty star rating
                    nPaddedStar.map((star) => (
                        <MaterialIcons key={star} name="star-outline" size={15} color="#6b059e" />
                    ))
                }
            </View>
        </View>
    )
}
