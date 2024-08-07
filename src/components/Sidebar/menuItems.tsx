import { ReactNode } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { MdAccessAlarms, MdAdsClick, MdConnectWithoutContact, MdOutlineEventSeat, MdOutlineManageHistory, MdPreview } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { Badge } from '@mui/material';
import { GrConfigure } from 'react-icons/gr';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { FaRegUser } from 'react-icons/fa';
import { LuMove3D } from 'react-icons/lu';
import "./style.scss"

interface MenuItem {
    name: string;
    path?: string;
    icon?: ReactNode;
    badge?: ReactNode;
    subItems?: MenuItem[];
}

interface MenuSection {
    title: string;
    items: MenuItem[];
}

export const menuItems: MenuSection[] = [
    {
        title: 'ANALYTICS',
        items: [
            { name: 'Dashboard', path: '/pages/dashboard', icon: <IoHomeOutline /> },
            {
                name: 'Yard View',
                path: '/yardview',
                icon: <MdAdsClick />,
                badge: <Badge badgeContent={"NEW"} />,
                subItems: [
                    { name: '2d View', path: '/pages/dashboard/2dview', icon: <MdPreview />, },
                    { name: '3d View', path: '/pages/dashboard/3dview', icon: <LuMove3D />, },

                ],
            },
            {
                name: 'Schedule',
                icon: <RiCalendarScheduleLine />,
                subItems: [
                    { name: 'Page 1', path: '/pages/dashboard/page1', icon: <RiCalendarScheduleLine /> },
                ],
            },
            {
                name: 'Users',
                path: '/pages/dashboard/users',
                icon: <FaRegUser />,
            },
            {
                name: 'Role Management',
                path: '/pages/dashboard/management',
                icon: <MdOutlineManageHistory />,
            },
        ],
    },
    {
        title: 'DATA',
        items: [
            {
                name: 'Reports',
                icon: <GoGraph />,
                subItems: [
                    { name: 'Page 1', path: '/pages/dashboard/page1', icon: <GoGraph /> },
                ],
            },
        ],
    },
    {
        title: 'SUPPORT',
        items: [
            {
                name: 'Alarms',
                path: '/pages/dashboard/alarms',
                icon: <MdAccessAlarms />,
            },
            {
                name: 'Communication Status',
                icon: <MdConnectWithoutContact />,
                path: '/pages/dashboard/status',
            },
            {
                name: 'Events',
                icon: <MdOutlineEventSeat />,
                path: '/pages/dashboard/events',
            },
        ],
    },
    {
        title: 'ADMIN',
        items: [
            {
                name: 'Configuration',
                path: '/pages/dashboard/config',
                icon: <GrConfigure />,
                subItems: [
                    { name: 'Page 1', path: '/pages/dashboard/page1', icon: <GrConfigure /> },
                ],
            },
        ],
    },
];
