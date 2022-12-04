import React, { useState } from "react";
import { View, StyleSheet, Text, Platform, TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list"
import DateTimePicker from "@react-native-community/datetimepicker"

export default function TimeDatePicker({ 
    frequency, 
    dayNotification,
    timeNotification,
    setDayNotification,
    setTimeNotification 
}) {
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState("date")
    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState("-")
    const [notificationDate, setNotificationDate] = useState()
    const [notificationTime, setNotificationTime] = useState()

    const onChange = (_, selectDate) => {
        const currentDate = selectDate || date
        setShow(Platform.OS === "ios")
        setDate(currentDate)

        let tempDate = new Date(currentDate)

        const notificationHour = tempDate.getHours().toString().padStart(2, "0")
        const notificationMin = tempDate.getMinutes().toString().padStart(2, "0")

        let dateNotification

        if(frequency === "Weekly") {
            dateNotification = selected
        }

        const timeNotification = `${notificationHour}:${notificationMin}`
        
        setNotificationDate(dateNotification)
        setNotificationTime(timeNotification)

        if(frequency === "Daily") {
            setDayNotification("Daily")
        } else {
            setDayNotification(dateNotification)
        }

        setTimeNotification(timeNotification)
    }
    
    const showMode = (currentMode) => {
        setShow(true)
        setMode(currentMode)
    }

    const data = [
        { key: "Sunday", value: "Sunday"},
        { key: "Monday", value: "Monday"},
        { key: "Tuesday", value: "Tuesday"},
        { key: "Wednesday", value: "Wednesday"},
        { key: "Thursday", value: "Thursday"},
        { key: "Friday", value: "Friday"},
        { key: "Saturday", value: "Saturday"}
    ]

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => showMode("time")}>
                <Text style={styles.buttonText}>Select a time</Text>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                {frequency === "Daily" ? (
                    <Text style={styles.notificationText}>Habit day: Daily</Text>
                ) : null}
                {frequency === "Weekly" ? (
                    <SelectList data={data} search={false} setSelected={setSelected} onSelect={
                        () => {
                            onChange()
                        }}
                        placeholder={selected} boxStyles={styles.boxStyles}
                        inputStyles={styles.inputStyles}
                        dropdownStyles={styles.dropdownStyles}
                        dropdownItemStyles={styles.dropdownItemStyles}
                        dropdownTextStyles={styles.dropdownTextStyles}
                        arrowicon={
                            <Image source={require("../../../assets/icons/arrowDropdown.png")}
                            style={styles.arrow} />
                        }
                    />
                ) : null}
                {frequency === "Weekly" ? (
                    <Text style={styles.notificationText}>Habit day: {notificationDate}</Text>
                ) : null}
                <Text style={styles.notificationText}>Habit hour: {notificationTime}</Text>
            </View>
            {show && (
                <DateTimePicker testID="DateTimePicker" value={date} mode={mode} is24Hour={true}
                    display="default" onChange={onChange}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },

    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },

    textContainer: {
        marginVertical: 20
    },

    notificationText: {
        fontSize: 18,
        color: "white"
    },

    boxStyles: {
        borderWidth: 1,
        borderColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 15
    },

    inputStyle: {
        color: "white"
    },

    dropdownStyles: {
        borderWidth: 0,
        maxHeight: 100
    },


    dropdownItemStyle: {
        borderWidth: 1,
        borderColor: "#BBBB",
        borderRadius: 10,
        marginBottom: 15
    },

    dropdownTextStyle: {
        color: "#BBBBBB"
    },

    arrow: {
        width: 20,
        height:20
    }
})