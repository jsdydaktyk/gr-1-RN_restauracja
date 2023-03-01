import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

function MealItem(props){
    
    return (
        <View style={styles.mealItem}>
            <Pressable>
                <View>
                    <Image source={ {uri: props.imageUrl} } 
                           style={styles.image}/>
                    <Text style={styles.title}> {props.title} </Text>

                </View>

                <View style={styles.details}>
                    <Text style={styles.detailItem}> {props.duration} </Text>
                    <Text style={styles.detailItem}> {props.complexity} </Text>
                    <Text style={styles.detailItem}> {props.affordability} </Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 200
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        pading:8
    },
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,

        shadowOffset: {width: 0, height: 2},
        shadowColor: 'black',
        shadowOpacity:0.25,
        shadowRadius: 8
    },
    details:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12
    }
})