import {View, Text, Flatlist, StyleSheet} from 'react-native';


function MealsOverviewScreen(props){

    const catId = props.route.params.categoryId ;

    return (
        <View>
            <Text> COKOLWIEK {catId} </Text>
        </View>
    )
}

export default MealsOverviewScreen ;