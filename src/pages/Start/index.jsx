import React from "react";
import {View, ScrollView, Text, Image} from "react-native";

export default function Start() {
    return (
        <View>
            <ScrollView showVerticalScrollIndicator={false}>
                <View>
                    <Image source={require("../../assets/icons/logo3.png")}/>
                    <Text>
                        Changing your life {"/n"} with a game, always searching {"/n"}
                        for the best level.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}