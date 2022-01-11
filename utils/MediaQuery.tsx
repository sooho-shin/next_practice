import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { breakpoints } from '../context/breakpoint';

const Mobile: React.FC = ({ children }) => {
    const isMobile = useMediaQuery({
        query:`(max-width: ${breakpoints.sm}px )`,
    });
    return <React.Fragment>{isMobile && children}</React.Fragment>
}

const Tablet: React.FC = ({ children }) => {
    const isMobile = useMediaQuery({
        query:`(max-width: ${breakpoints.md}px )`,
    });
    return <React.Fragment>{isMobile && children}</React.Fragment>
}

export { Mobile,Tablet }