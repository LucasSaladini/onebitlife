import { useState } from "react";
import changeNavigationService from "../services/changeNavigationService";
import AllPages from "./AllPages";
import HomePage from "./HomePage";

export default function Routes() {
    const [showHome, setShowHome] = useState("false")
    changeNavigationService.checkShowHome(1)
        .then((showHome) => {
            setShowHome(showHome.showHome)
        })
        .catch((err) => console.log(err))

    return <>{showHome === "true" ? <HomePage/> : <AllPages/>}</>;
}