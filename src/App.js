import React from "react"
import { View, Text } from "react-native"


import Primeiro from './components/Primeiro'
import X, {Comp1, Comp2} from './components/Multi'
export default () => (
    <View>
        <X />
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Primeiro></Primeiro>
    </View>
)
