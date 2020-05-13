import React from 'react'
import { 
    View, 
    Text, 
    FlatList, 
    StyleSheet, 
    TouchableOpacity, 
    Platform
} from 'react-native';
import Colors from '../constants/Colors'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
                    title={itemData.item.title} 
                    onSelect={()=>{
                        props.navigation.navigate({
                            routeName:'CategoryMeals', 
                            params:{
                                categoryID: itemData.item.id
                            }
                        })
                    }}
                    color={itemData.item.color}  
        />
    }

    return(
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}

        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CategoriesScreen