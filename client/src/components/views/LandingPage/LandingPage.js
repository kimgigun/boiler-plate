import React, { useEffect } from 'react';
import axios from 'axios';


function LandingPage() {
    
    useEffect(()=>{
        axios.get('/api/hello').then(resopnse => console.log(resopnse.data));
    },[]);

    return (
        <div>
            LandingPage
        </div>
    )
}

export default LandingPage
