import {View, Text, Pressable} from 'react-native';

const CategryGridTitle = ({title}) => {

    return(
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategryGridTitle ;