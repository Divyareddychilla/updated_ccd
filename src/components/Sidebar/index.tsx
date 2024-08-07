import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';
import { LuLogOut } from 'react-icons/lu';
import logo from "../../assets/image/Eagle Yard New Logo 1.png";
import collapsedlogo from "../../assets/image/machine_logo.png"
import './style.scss';
import { menuItems } from './menuItems';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { MdOutlineSettings } from 'react-icons/md';
const Sidebarr: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="sidebardata">
            <Sidebar collapsed={collapsed} className="bg-gray-800 text-white sidebar">
                <div className="header">
                    {collapsed ? (
                        <img src={collapsedlogo} alt="Lotus" className="logo_collapsed" />
                    ) : (
                        <img src={logo} alt="Lotus" className="logo" />
                    )}

                    {collapsed ? (

                        <ArrowForwardIosIcon
                            fontSize='medium'
                            className=" hamburger-icon-back "
                            onClick={() => setCollapsed(!collapsed)}
                        />

                    ) : (

                        <ArrowBackIosNewIcon
                            fontSize='medium'
                            className="hamburger-icon "
                            onClick={() => setCollapsed(!collapsed)}
                        />

                    )}


                </div>
                <Menu

                    menuItemStyles={{
                        button: ({ active, disabled }) => {
                            if (disabled) {
                                return {
                                    color: '#52504F',
                                };
                            }
                            if (active && !collapsed) {
                                return {
                                    backgroundColor: '#E55E1A',
                                    color: 'white',
                                    width: '97%',
                                    borderRadius: '0px 10px 10px 0px',
                                };
                            }
                            if (active && collapsed) {
                                return {
                                    color: '#E55E1A',
                                };
                            }
                            return {
                                color: '#52504F',
                            };
                        },
                        icon: ({ active }) => {
                            if (active && collapsed) {
                                return {
                                    backgroundColor: '#E55E1A',
                                    borderRadius: '50%',
                                    color: 'white',
                                };
                            }
                            return {};
                        },
                        label: ({ active }) => {
                            if (active && collapsed) {
                                return {
                                    color: '#E55E1A',
                                };
                            }
                            return {};
                        },
                    }}
                >
                    {menuItems.map((section, index) => (
                        <React.Fragment key={index}>
                            <div className={`menu-title ${collapsed ? 'menu-title-collapsed' : 'menu-title'}`}>
                                {section.title}
                            </div>
                            {section.items.map((item, i) => (
                                item.subItems ? (
                                    <SubMenu
                                        key={i}
                                        label={
                                            <div >
                                                <span>{item.name}</span>
                                                {item.badge && <span style={{ marginLeft: '60px' }}>{item.badge}</span>}
                                            </div>
                                        }
                                        title={item.name}
                                        icon={item.icon}
                                    >
                                        {item.subItems.map((subItem, j) => (
                                            subItem.path ? (
                                                <MenuItem
                                                    key={j}
                                                    active={isActive(subItem.path)}
                                                    component={<Link to={subItem.path} />}
                                                    icon={subItem.icon}
                                                >

                                                    {subItem.name}

                                                </MenuItem>
                                            ) : (
                                                <MenuItem
                                                    key={j}
                                                >
                                                    {subItem.name}
                                                </MenuItem>
                                            )
                                        ))}
                                    </SubMenu>
                                ) : (
                                    item.path ? (
                                        <MenuItem
                                            key={i}
                                            active={isActive(item.path)}
                                            icon={item.icon}
                                            component={<Link to={item.path} />}
                                            title={item.name}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    ) : (
                                        <MenuItem
                                            key={i}
                                            icon={item.icon}
                                            title={item.name}
                                        >
                                            {item.name}
                                        </MenuItem>
                                    )
                                )
                            ))}
                        </React.Fragment>
                    ))}
                    <br />
                    <MenuItem
                        active={isActive('/settings')}
                        icon={<MdOutlineSettings />}
                        component={<Link to="/settings" />}
                        title="Settings"
                    >
                        Settings
                    </MenuItem>
                    <MenuItem


                        icon={<LuLogOut className='logout' />}
                        title='Logout'

                    >
                        <span className='logout'>Logout</span>
                    </MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
};

export default Sidebarr;
