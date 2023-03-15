import { View, Text, Image, StyleSheet} from 'react-native' ;
import { MEALS } from '../data/dummy-data'

const MealsDetailScreen = (props) => {

    const id = props.route.params.mealId ;
    const selectedMeal = MEALS.find( (meal) => meal.id === id)
    

    return <View>
        <View>
            <Image source={ {uri:selectedMeal.imageUrl} } 
               style={styles.img} />
            <Text> {selectedMeal.title}</Text>
            <Text>{selectedMeal.duration}</Text>
            <Text>{selectedMeal.complexity}</Text>
            <Text>{selectedMeal.affordability}</Text>
            </View>
            <View> 
                <Text>{selectedMeal.ingredients}</Text>
                <Text>{selectedMeal.steps}</Text>
            </View>

    </View>



}

export default MealsDetailScreen;

const styles = StyleSheet.create({
    img: {
        width: '100%',
        heigh: 200
    }
})