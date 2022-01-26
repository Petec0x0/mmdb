import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadAllScreenData } from '../redux/actions';
import { FeaturedMovie as Featured } from '../components/FeaturedMovie';
import { FlatListMovieItem as Item } from '../components/FlatListMovieItem';
import SkeletonComponent from '../components/SkeletonComponent';

const { width, height } = Dimensions.get("window");

const AllHomeScreen = () => {
    const statusState = useSelector(state => state.status.allHomeScreen);
    const stateData = useSelector(state => state.allHomeScreen.data);
    const dispatch  = useDispatch();

    useEffect(() => {
        dispatch(loadAllScreenData());
    }, [])

    const renderItem = ({ item }) => (
        <Item
            id={stateData[item].id} 
            title={stateData[item].original_title} 
            poster={stateData[item].poster_path} 
            rating={stateData[item].rating} 
            liked={stateData[item].liked}
        />
      );
    
    if(statusState == 'loaded'){
        // Get Data if it is ready
        return (
            <View style={styles.container}>
                <FlatList
                    style={{flex: 1}} 
                    data={Object.keys(stateData)}
                    numColumns={2}
                    keyExtractor={(item) => stateData[item].id}
                    renderItem={renderItem}
                    ListHeaderComponent={Featured}
                    extraData={stateData}
                />
            </View>
        )
    }else{
        return  (
            <SkeletonComponent width={width} height={height} />
        )
    }
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
