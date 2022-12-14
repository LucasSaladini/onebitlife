import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import LifeStatus from "../../components/common/lifeStatus";
import StatusBar from "../../components/home/StatusBar";
import CreateHabit from "../../components/home/CreateHabit";
import EditHabit from "../../components/home/EditHabit";

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
                    {mindHabit ? (
                        <EditHabit habit={mindHabit ?.habitName} 
                            frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`} 
                            habitArea={mindHabit?.habitArea} checkColor="#90B7F3" />
                    ) : (
                        <CreateHabit habitArea="Mind" borderColor="#90B7F3" />
                    )}
                    {moneyHabit ? (
                        <EditHabit habit={moneyHabit ?.habitName} 
                            frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`} 
                            habitArea={moneyHabit?.habitArea} checkColor="#85BB65" />
                    ) : (
                        <CreateHabit habitArea="Money" borderColor="#85BB65" />
                    )}
                    {bodyHabit ? (
                        <EditHabit habit={bodyHabit ?.habitName} 
                            frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`} 
                            habitArea={bodyHabit?.habitArea} checkColor="#FF0044" />
                    ) : (
                        <CreateHabit habitArea="Body" borderColor="#FF0044" />
                    )}
                    {moodHabit ? (
                        <EditHabit habit={moodHabit ?.habitName} 
                            frequency={`${moodHabit?.habitTime} - ${moodHabit?.habitFrequency}`} 
                            habitArea={moodHabit?.habitArea} checkColor="#FE7F23" />
                    ) : (
                        <CreateHabit habitArea="Mood" borderColor="#FE7F23" />
                    )}
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