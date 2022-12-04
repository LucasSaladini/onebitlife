import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Text, StyleSheet, handleSetShowHome, handleNavHome } from "react-native"
import { ScrollView } from "react-native-gesture-handler"


import DefaultButton from "../../components/common/defaultButton"
import ExplanationCard from "../../components/explanation/explanationCard"
import explanationCard from "../../components/explanation/explanationCard"
import changeNavigationService from "../../services/changeNavigationService"

export default function AppExplanation() {
    const navigation = useNavigation()
    const [showHome, setShowHome] = useState("false")
    const startDate = new Date()
    const appStartData = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`

    function handleNavHome() {
        navigation.navigate("Home")
    }

    function handleSetShowHome() {
        if (showHome !== "true") {
            changeNavigationService.setShowHome({ showHome: "true", appStartData })
                .then(() => console.log(`Success! ${showHome} ${appStartData}`))
                .catch((err) => console.log(err))
            setShowHome("true")
            handleNavHome()
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.title}>First, let me {"\n"} explain something...</Text>
                    <ExplanationCard />
                    <Text style={styles.descriptionCTA}>Ready to level up on life?</Text>
                    <Text style={styles.description}>On next screen you will choose {"\n"}
                        your four habits individually.
                    </Text>
                    <DefaultButton buttonText={"Continue"} handlePress={handleSetShowHome}
                        width={250} height={50} />
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

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginVertical: 40
    },

    descriptionCTA: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 10
    },

    description: {
        color: "white",
        textAlign: "center",
        marginBottom: 30,
    }
})