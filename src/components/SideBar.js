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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faColumns, faExclamationCircle, faUser} from "@fortawesome/free-solid-svg-icons";

function SideBar({instrumentName }) {


    return (
        <div style={{display: 'flex', overflow: 'scroll initial', height:"100vh"}}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{color: 'inherit'}}>
                        {instrumentName}
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon={'columns'}>
                                Home
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/examplepage" className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                            <CDBSidebarMenuItem icon={'plus-circle'}>
                                Example Page
                            </CDBSidebarMenuItem>
                        </NavLink>

                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
}

export default SideBar;


