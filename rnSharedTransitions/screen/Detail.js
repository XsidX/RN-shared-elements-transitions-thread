import React from 'react'
import { TouchableOpacity,
    SafeAreaView, 
    StyleSheet, 
    View, 
    FlatList, 
    ScrollView, 
    Text } from "react-native"
import { ICON_SIZE, SPACING, width } from "../config/theme"
import { DATA } from "../config/travel"
import Icon from '../Components/Icon'
import BackIcon from '../Components/BackIcon'
import { SharedElement } from "react-navigation-shared-element";

const Detail = ({ navigation }) => {
    const items = DATA[0]
    const ref = React.useRef()
    const selectItemIndex = DATA.findIndex((i) => i.id ===items.id)

    return (
    <SafeAreaView style={{ flex: 1 }}>
        <BackIcon onPress={() => navigation.goBack()} />
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'nowrap',
                marginVertical: 20, 
            }}
        >
        {DATA.map((item) =>(
            <TouchableOpacity style={{ padding: SPACING }} key={item.id}>
                <SharedElement id={`item.${item.id}.icon`}>
                    <Icon uri={item.imageUri} />
                </SharedElement> 
                
            </TouchableOpacity>
        ))}

        </View>
        <FlatList
            ref={ref}
            data={DATA}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            initialScrollIndex={selectItemIndex}
            nestedScrollEnabled
            getItemLayout={(data, index) => ({
                length: width,
                offset: width * index,
                index
            })}
            showHorizontalScrollIndicator={false}
            renderItem={({item}) => {
                return (
                    <ScrollView
                        style={{
                            width: width - SPACING * 2,
                            margin: SPACING,
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            borderRadius: 16
                        }}
                    >
                        <View style={{ padding: SPACING }}>
                            <Text>
                                {Array(50).fill(`${item.title} inner text \n`)}
                            </Text>
                        </View>
                    </ScrollView>
                )
            }}
        
        />
    </SafeAreaView>
    )
}

Detail.sharedElements = (route, otherRoute, showing) => {
     //const { item } = route.params
     return DATA.map(item => `item.${item.id}.icon`)
  }

export default Detail

const styles = StyleSheet.create({
    imageContainer: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2,
        backgroundColor: '#add',
        alignItems: 'center',
        justifyContent: 'center'
    }
})