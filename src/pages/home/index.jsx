import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

import LifeStatus from "../../components/common/lifeStatus";
import StatusBar from "../../components/home/StatusBar";
import CreateHabit from "../../components/home/CreateHabit";
import EditHabit from "../../components/home/EditHabit";
import changeNavigationService from "../../services/changeNavigationService";

export default function Home({ route }) {
    const navigation = useNavigation()

    const [mindHabit, setMindHabit] = useState()
    const [moneyHabit, setMoneyHabit] = useState()
    const [bodyHabit, setBodyHabit] = useState()
    const [moodHabit, setMoodHabit] = useState()

    const [robotDaysLife, setRobotDaysLife] = useState()
    const today = new Date()

    function handleNavExplanation() {
        navigation.navigate("AppExplanation")
    }

    useEffect(() => {
        changeNavigationService.checkShowHome(1)
        .then((showHome) => {
          const formDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
          const checkDays = new Date(formDate) - new Date(showHome.appStartData) + 1;
      
            setRobotDaysLife(checkDays.toString().padStart(2, "0"));
        })
          .catch((err) => console.log(err));
      }, [route.params]);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.dailyChecks}>❤️ {robotDaysLife} {robotDaysLife === "01" ? "day" : "days"} - ✔️ 80 Checks</Text>
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