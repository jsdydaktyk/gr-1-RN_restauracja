import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';

const CategryGridTitle = ({title, color, whenPressExecute}) => {

    return(
        <View style={styles.outerView}>
            <Pressable android_ripple={{color: '#ccc'}}
                       style={ ({pressed}) => [styles.pressableView,
                                               pressed ? styles.pressedButton : null         
                        ]}
                        onPress={whenPressExecute}
            >
                <View style={[styles.innerView, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategryGridTitle ;

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 18,
        backgroundColor: 'white',
        elevation: 6,
        // poniższy zestaw dla iOS, aby był cień
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden': 'visible',
    },
    pressableView:{
        flex: 1
    },
    pressedButton:{
       opacity: 0.5 
    },
    innerView :{
        flex: 1,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
    },
    title :{
        fontWeight: 'bold',
        fontSize: 18
    }

})