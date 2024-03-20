import React from 'react';
import {Routes, Route} from  "react-router-dom";
import MyApp from './../Pages/MyApp';
import Page2 from './../Pages/Page2'

function Router(){

    return(

        <Routes>
            <Route  path="/" element={<MyApp />}/>
            <Route  path="/Page2/:id" element={<Page2 />}/>
        </Routes>

    );

}

export default Router;