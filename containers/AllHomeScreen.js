import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FeaturedMovie as Featured } from '../components/FeaturedMovie';
import { FlatListMovieItem as Item } from '../components/FlatListMovieItem';

const fetchMovies = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=70744832195ce0e5cdef664f92eba840&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=2&with_watch_monetization_types=flatrate'
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

const AllHomeScreen = () => {

    const [DATA, setDATA] = useState([]);
    useEffect(async () => {
        const fetchedData = await fetchMovies();
        console.log(fetchedData);
        setDATA([...fetchedData]);
    }, [])

    const renderItem = ({ item }) => (
        <Item title={item.original_title} poster={item.poster_path} />
      );

    return (
        <View style={styles.container}>
            <FlatList
                style={{flex: 1}} 
                data={DATA}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ListHeaderComponent={Featured}
                extraData={DATA}
            />
        </View>
    )
}

export default AllHomeScreen

// style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#13002c',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    }
});
