import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadTvScreenData } from '../redux/actions';
import { FlatListMovieItem as Item } from '../components/FlatListMovieItem';
import SkeletonComponent from '../components/SkeletonComponent';

const { width, height } = Dimensions.get("window");


const TvScreen = () => {
    const statusState = useSelector(state => state.status.tvHomeScreen);
    const stateData = useSelector(state => {
        let selected = {};
        const _data = state.allHomeScreen.data;
        const _dataKeys =  Object.keys(_data);
        _dataKeys.map(key => {
            if(_data[key].media_type == 'tv'){
                selected[key] = _data[key];
            }
        })
        return selected;
    });
    const dispatch  = useDispatch();

    useEffect(() => {
        dispatch(loadTvScreenData());
    }, [])

    const renderItem = ({ item }) => (
        <Item
            id={stateData[item].id} 
            title={stateData[item].original_title} 
            poster={stateData[item].poster_path} 
            rating={stateData[item].rating} 
            liked={stateData[item].liked}
            screenName="allHomeScreen"
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
                    //ListHeaderComponent={Featured}
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

export default TvScreen

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