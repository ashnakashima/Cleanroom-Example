import React from 'react';

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import {useWebSocket} from "../context/WebSocketContext";

function SideBar() {
    const {closeConnection} = useWebSocket();

    return (
        <div style={{display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{color: 'inherit'}}>
                        SCALES
                    </a>
                </CDBSidebarHeader>

                {/*NavLink used for each page within app. Need to change exact link, icon image, and name*/}
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/alarms" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon="exclamation-circle">Alarms</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/stages" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon="user">Stages</CDBSidebarMenuItem>
                        </NavLink>
                        {/*<NavLink to="/analytics" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>*/}
                        {/*    <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>*/}
                        {/*</NavLink>*/}

                        {/*<NavLink to="/hero404" target="_blank" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>*/}
                        {/*    <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>*/}
                        {/*</NavLink>*/}
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{textAlign: 'center'}}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        Can put more information here if needed...
                        <button onClick={closeConnection}>
                            Close Connection
                        </button>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
}

export default SideBar;

