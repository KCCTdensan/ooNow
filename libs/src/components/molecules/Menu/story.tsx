import Menu from ".";
import React from "react";

export default {
    title: "Molecules/Menu",
    component: Menu,
}

export const Menus = () => {
    return (
    <Menu title="parentMenu">
        <Menu title="child1"/>
        <Menu title="child2"/>
    </Menu>
    )
}