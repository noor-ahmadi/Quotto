import React from "react";
import "./Box.css";
import Dropdown from "./Dropdown";

function Box () {
    return (
        <section className="mid">
            <h2>How are you feeling today?</h2>
            <Dropdown />
        </section>
    )
}
export default Box;