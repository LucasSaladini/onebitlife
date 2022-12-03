import React from "react"
import { View, Text, Image, StyleSheet } from "react-native"

export default function ExplanationCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>With this app you will consolidate {"\n"} 
                four habits of fundamentals areas:
            </Text>
            <View style={styles.explanationContainer}>
                <Image source={require("../../../assets/icons/educationIcon.png")} style={styles.icon} />
                <Text style={styles.description}>
                    <Text style={styles.mind}>Mind: </Text> Habits to improve your intelligence/wisdom.
                </Text>
            </View>
            <View style={styles.explanationContainer}>
                <Image source={require("../../../assets/icons/moneyIcon.png")} style={styles.icon} />
                <Text style={styles.description}>
                    <Text style={styles.money}>Money: </Text> Habits to improve {"\n"}your financial control.
                </Text>
            </View>
            <View style={styles.explanationContainer}>
                <Image source={require("../../../assets/icons/bodyIcon.png")} style={styles.icon} />
                <Text style={styles.description}>
                    <Text style={styles.body}>Body: </Text> Habits to improve your {"\n"}
                        healthy and keep you strong.
                </Text>
            </View>
            <View style={styles.explanationContainer}>
                <Image source={require("../../../assets/icons/funIcon.png")} style={styles.icon} />
                <Text style={styles.description}>
                    <Text style={styles.mood}>Mood: </Text> Habits to control your stress {"\n"} and
                        improve your happiness.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#151515",
        width: 350,
        borderRadius: 25,
        padding: 30
    },

    title: {
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontSize: 16
    },

    explanationContainer: {
        flexDirection: "row",
        marginTop: 30,
    },

    icon: {
        width: 40,
        height: 40,
        marginRight: 5
    },

    mind: {
        color: "#90B7F3",
        fontWeight: "bold"
    },

    money: {
        color: "#85BB65",
        fontWeight: "bold"
    },

    body: {
        color: "#FF0044",
        fontWeight: "bold"
    },

    mood: {
        color: "#FE7F23",
        fontWeight: "bold"
    },

    description: {
        color: "white"
    }
})