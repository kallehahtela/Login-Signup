import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

import CustomButton from "../components/CustomButton";

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View>
            <Text style={{ textAlign: 'center', marginTop: 100, fontSize: 20}}>Hello</Text>

            <CustomButton label={'TEST TEST'} onPress={() => navigation.navigate('Onboarding')}/>
        </View>
    );
}

export default HomeScreen;