import React, {useEffect, useContext} from 'react';
import {Context as authContext} from '../Context/authContext';

const ResolveAuthScreen = () => {
    const { tryLocalSignin} = useContext(authContext);

    useEffect( () => {
        tryLocalSignin();
    }, []);

    return null;  
};

export default ResolveAuthScreen;
