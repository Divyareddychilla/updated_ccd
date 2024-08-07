import { useState, useEffect } from 'react';
import { Breadcrumbs } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import './style.scss';

export default () => {
    const [path, setPath] = useState<string[]>([]);
    const [pathLinks, setPathLinks] = useState<JSX.Element[]>([]);
    const location = useLocation();

    useEffect(() => {
        // This code will run every time the URL path changes
        setPath(location.pathname.slice(1).split('/'));
    }, [location.pathname]);
    useEffect(() => {
        setPathLinks(path.map((item, index) => {
            const linkPath = `/${path.slice(0, index + 1).join('/')}`;
            const last = index === path.length - 1;
            return last ? (
                <h1 className='page-history-title' key={linkPath}>{item.charAt(0).toUpperCase() + item.slice(1)}</h1>
            ) : (
                <Link key={linkPath} to={linkPath}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
            );
        }))
    }, [path]);

    return (
        <div>
            <Breadcrumbs aria-label="breadcrumb" className='page-history'>
                {path.length > 1 && pathLinks.slice(0, pathLinks.length - 1)}
            </Breadcrumbs>
            {pathLinks[pathLinks.length - 1]}
        </div>

    );
}