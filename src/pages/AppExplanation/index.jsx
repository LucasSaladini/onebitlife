import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, handleSetShowHome, handleNavHome } from "react-native"
import { ScrollView } from "react-native-gesture-handler"


import DefaultButton from "../../components/common/defaultButton"
import ExplanationCard from "../../components/explanation/explanationCard"
import explanationCard from "../../components/explanation/explanationCard"

export default function AppExplanation() {
    const navigation = useNavigation()

    function handleNavHome() {
        navigation.navigate("Home")
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
                    <DefaultButton buttonText={"Continue"} handlePress={handleNavHome}
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