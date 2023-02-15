import { View, Text, FlatList} from 'react-native';
import { CATEGORIES } from "../data/dummy-data"
import CategryGridTitle from '../components/CategoryGridTitle';

const renderCategoryItem = (itemData) => {
    return <CategryGridTitle title={itemData.item.title} 
                             color={itemData.item.color} />
}

function CategoriesScreen(){

    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id }
            renderItem={renderCategoryItem}
            numColumns={2}

        />
    );
}

export default CategoriesScreen;