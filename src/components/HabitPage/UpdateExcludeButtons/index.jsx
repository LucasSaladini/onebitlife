import React from "react";
import { TouchableOpacity, View, StyleSheet, Alert, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UpdateExcludeButtons({
    habitInput,
    handleUpdate,
    habitArea
}) {
    const navigation = useNavigation()

    function handleDeleteHabit() {
        navigation.navigate("Home", {
            excludeArea: `${habitArea}`
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.updateButton} activeOpacity={0.8}
                onPress={() => {
                    Alert.alert(
                        "Do you really want to update habit?",
                        "Doing so, you can change the habit, frequency and notifications",
                        [
                            {
                                text: "Cancel"
                            },
                            {
                                text: "Update",
                                onPress: handleUpdate
                            }
                        ]
                    )
                }}
            >
                <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trashButton} activeOpacity={0.8}    
                onPress={() => {
                    Alert.alert(
                        "Do you really want to delete the habit?",
                        "Doing so, you will loose all progress or fails of the habit",
                        [
                            {
                                text: "Cancel",
                                onPress: () => {
                                    Alert.alert("Deletion canceled")
                                }
                            },
                            {
                                text: "Delete",
                                onPress: handleDeleteHabit
                            }
                        ]
                    )
                }}
            >
                <Image source={require("../../../assets/icons/trash.png")} style={styles.trashIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 20
    },

    updateButton: {
        borderWidth: 1,
        borderColor: "white",
        width: 150,
        height: 50,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },

    updateButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },

    trashButton: {
        borderWidth: 1,
        borderColor: "#FF0044",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 90
    },

    trashIcon: {
        width: 25,
        height: 25
    }
})