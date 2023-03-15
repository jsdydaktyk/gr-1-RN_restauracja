import {View, Text, FlatList, StyleSheet} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen(props){

    const catId = props.route.params.categoryId ;
    const displayMeals = MEALS.filter( (mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })
   

    function renderMealItem(itemData){
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability,
            duration: itemData.item.duration

        }


        return <MealItem {...mealItemProps} />
    }

    return (
        <View>
            <FlatList data={displayMeals}
                      keyExtractor={(item)=> item.id}
                      renderItem={renderMealItem}
                      />
        </View>
    )
}

export default MealsOverviewScreen ;