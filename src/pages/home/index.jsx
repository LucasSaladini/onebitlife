import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import LifeStatus from "../../components/common/lifeStatus";
import StatusBar from "../../components/home/StatusBar";
import CreateHabit from "../../components/home/CreateHabit";

export default function Home() {
    const navigation = useNavigation()

    const [mindHabit, setMindHabit] = useState()
    const [moneyHabit, setMoneyHabit] = useState()
    const [bodyHabit, setBodyHabit] = useState()
    const [moodHabit, setMoodHabit] = useState()

    function handleNavExplanation() {
        navigation.navigate("AppExplanation")
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}>❤️ 20 dias - ✔️ 80 checks</Text>
                    <LifeStatus />
                    <StatusBar />
                    <CreateHabit habitArea={"Mind"} borderColor={"#90B7F3"}/>
                </View>
                <Text style={styles.explanationText} onPress={() => {handleNavExplanation()}}>
                    See explanation again
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)"
    },

    dailyChecks: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        marginTop: 40
    },

    explanationText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 25
    }
})