import React from "react";
import { TouchableOpacity, View} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import { SPACING } from "../config/theme";
import { DATA } from "../config/travel";
import MarketingSlider from "../Components/MarketingSlider";
import Icon from "../Components/Icon";
import { SharedElement } from "react-navigation-shared-element";


export default function List({ navigation }) {
    return (
    <SafeAreaView style={{flex: 1}}>
        <MarketingSlider />
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20
            }}
        >
        {DATA.map((item) => {
            return (
                
                <TouchableOpacity
                    key={item.id}
                    style={{
                        padding: SPACING
                    }}
                    onPress={() => navigation.push('Detail', {item})}
                >
                    <SharedElement id={`item.${item.id}.icon`}>
                        <Icon uri={item.imageUri} />
                    </SharedElement>   
                    
                </TouchableOpacity>
            )
        })}
        </View>                                 
    </SafeAreaView>
    )
}
