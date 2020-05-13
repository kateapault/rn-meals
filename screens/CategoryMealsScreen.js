import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data'


const CategoryMealsScreen = props => {
    const categoryID = props.navigation.getParam('categoryID');

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID)
    return(
        <View style={styles.screen}>
            <Text> The Category Meals Screen! </Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meal Detail" onPress={()=>{
                props.navigation.navigate({routeName: 'MealDetail'})
            }}/>
            <Button title="Manual Go Back" onPress={()=>{
                props.navigation.pop();
            }}/>
        </View>
    );
};

CategoryMealsScreen.navigationOptions = navigationData => {
    const categoryID = navigationData.navigation.getParam('categoryID')

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID)

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CategoryMealsScreen