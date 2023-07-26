import React from "react";
import Calendar from 'react-calendar';
import { Menu, Header } from "semantic-ui-react";

export default function ActivityFilters() {
    return (
        <>
        <Menu verticle size='large' style={{width: '100%', marginTop: 25}}>
            <Header icon='filter' attached color='teal' content='Filters' />
            <Menu.Item content='All Activities' />
            <Menu.Item content='Im going' />
            <Menu.Item content='Im hosting' />
        </Menu>
        <Calendar></Calendar>
        </>
    )
}