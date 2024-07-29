import React from 'react';
import './SideBar.css';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function SideBar({instrumentName }) {


    return (
        <div style={{display: 'flex', overflow: 'scroll initial', height:"100vh"}}>
            <CDBSidebar textColor="#fff" backgroundColor="#333" breakpoint={1} >
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{color: 'inherit'}}>
                        {instrumentName}
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon={'th-large'}>
                                Home
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/vacuum-gauge" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon={'bell'}>
                                VacGauge
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/geist-monitors" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon={'chalkboard'}>
                                Geist Monitors
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/lesker-box" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon={'thermometer'}>
                                Lesker Box
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
}

export default SideBar;


