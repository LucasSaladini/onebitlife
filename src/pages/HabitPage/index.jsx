import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef, setHabitInput } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native"
import TimeDatePicker from "../../components/HabitPage/DateTimePicker";
import Notification from "../../components/HabitPage/Notification";
import SelectFrequency from "../../components/HabitPage/SelectFrequency";
import SelectHabit from "../../components/HabitPage/SelectHabit";
import UpdateExcludeButtons from "../../components/HabitPage/UpdateExcludeButtons";
import DefaultButton from "../../components/common/defaultButton";

export default function HabitPage({ route }) {
    const navigation = useNavigation()
    const [habitInput, setHabitInput] = useState()
    const [frequencyInput, setFrequencyInput] = useState()
    const [notificationToggle, setNotificationToggle] = useState()
    const [dayNotification, setDayNotification] =  useState()
    const [timeNotification, setTimeNotification] = useState()

    const { create, habit } = route.params

    function handleCreateHabit() {
        if (habitInput === undefined || frequencyInput === undefined) {
            Alert.alert("You need to select a habit and a frequency to proceed")
        } else if (
            notificationToggle === true && 
            frequencyInput === "Daily" && 
            timeNotification === undefined) {
                Alert.alert("You need to select a notification time")
        } else if (
            notificationToggle === true &&
            frequencyInput === "Daily" &&
            dayNotification === undefined &&
            timeNotification === undefined
        ) {
            Alert.alert("You need to select a frequency and notification time")
        } else {
            navigation.navigate("Home", {
                createHabit: `Created in ${habit?.habitArea}`
            })
        }
    }

    function handleUpdateHabit() {
        if (notificationToggle === true && !dayNotification && !timeNotification) {
            Alert.alert("You need to select a frequency and notification time")
        } else {
            navigation.navigate("Home", {
                updateHabit: `Updated in ${habit?.habitArea}`
            })
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity style={styles.backPageBtn} onPress={() => navigation.goBack()}>
                        <Image source={require("../../assets/icons/arrowBack.png")} 
                            style={styles.arrowBack}/>
                    </TouchableOpacity>
                    <View style={styles.mainContent}>
                        <Text style={styles.title}>Habit {"\n"} configuration</Text>
                        <Text style={styles.inputText}>Area</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.area}>{habit?.habitArea}</Text>
                        </View>
                        <Text style={styles.inputText}>Habit</Text>
                        <SelectHabit habit={habit} habitInput={setHabitInput} />
                        <Text style={styles.inputText}>Frequency</Text>
                        <SelectFrequency habitFrequency={habit?.habitFrequency}
                            frequencyInput={setFrequencyInput}
                        />
                        {frequencyInput === "Monthly" ? null : (
                            <Notification
                                notificationToggle={notificationToggle}
                                setNotificationToggle={setNotificationToggle}
                            />
                        )}
                        {notificationToggle ? (
                            frequencyInput === 'Monthly' ? null : (
                                <TimeDatePicker
                                    frequency={frequencyInput}
                                    dayNotification={dayNotification}
                                    timeNotification={timeNotification}
                                    setDayNotification={setDayNotification}
                                    setTimeNotification={setTimeNotification}
                                />
                            )
                        ) : null}
                        {create === false ? (
                            <UpdateExcludeButtons handleUpdate={handleUpdateHabit}
                                habitArea={habitArea} habitInput={habitInput}
                            />
                        ) : (
                            <View style={styles.configButton}>
                                <DefaultButton buttonText={"Create"} handlePress={handleCreateHabit}
                                    width={250} height={50}
                                />
                            </View>
                        )}
                    </View>
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

    backPageBtn: {
        width: 40,
        height: 40,
        margin: 25
    },

    arrowBack: {
        width: 40,
        height: 40
    },

    mainContent: {
        width: 250,
        alignSelf: "center"
    },

    title: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 30
    },

    inputText: {
        color: "white",
        fontSize: 16,
        marginTop: 35,
        marginBottom: 10,
        marginLeft: 5
    },

    inputContainer: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    area: {
        color: "#BBBBBB",
        fontSize: 15
    }
})