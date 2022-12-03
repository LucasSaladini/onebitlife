import React from "react";
import {View, ScrollView, Text, Image, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

import DefaultButton from "../../components/common/defaultButton";
import LifeStatus from "../../components/common/lifeStatus";

export default function Start() {
    const navigation = useNavigation()

    const handleNavAppExplanation = () => {
        navigation.navigate("AppExplanation")
    }


    return (
        <View style={styles.container}>
            <ScrollView showVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../../assets/icons/logo3.png")} style={styles.logo}/>
                    <LifeStatus />
                    <Text style={styles.description}>
                        Changing your life {"\n"} with a game, always searching {"\n"}{" "}
                        for the best level.
                    </Text>
                    <DefaultButton buttonText={"Continue"} handlePress={handleNavAppExplanation}
                        width={250}
                        height={50} />
                    
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)"
    },

    logo: {
        width: 300,
        height: 60,
        marginTop: 60,
        marginBottom: 20
    },

    description: {
        color: "#FFFFFF",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 60
    }
})