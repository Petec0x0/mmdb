import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export const FeaturedMovie = () => {
    return (
        <View style={{flex: 2}}>
            <Text style={{textAlign: 'left', color: '#fff', fontWeight: 'bold', fontSize: 15, marginBottom: 2}}>Featured</Text>
            <Image
                style={{height: 350, borderRadius: 8}}
                accessibilityLabel="Featured Image"
                source={{
                uri: 'https://image.tmdb.org/t/p/w500/yn9DrhUBPrUTFEUHtdXSxgWcFTA.jpg',
                }}
            />
            <View style={styles.featuredTextWrap}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>River Dance</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>IMDb</Text>
                    <Text style={{color: '#fff', fontWeight: '100', fontSize: 10, margin: 4}}>8.2/10 . 2022 . 13+</Text>
                </View>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>Action/Adventure</Text>
            </View>
        </View>
    )
}


// styles
const styles = StyleSheet.create({
    featuredTextWrap: {
        flex: 1, 
        padding: 5, 
        backgroundColor: '#0a0017', 
        borderBottomEndRadius: 10, 
        borderBottomStartRadius: 10,
       
    }
});