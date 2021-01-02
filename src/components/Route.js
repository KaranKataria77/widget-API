import {useEffect, useState} from 'react';

const Router = ({path, children}) => {
    const [currentpath, setCurrentpath] = useState(window.location.pathname)
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentpath(window.location.pathname)
        };
        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };
    }, [])

    return window.location.pathname === path ?
    children :
    null; 
}

export default Router;