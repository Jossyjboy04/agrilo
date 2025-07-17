import React from 'react';
import Map from '../components/map';
import Form from '../components/form';
import Info from '../components/info';
function Contact(){
    return (
        <>
        
       <Map />
             <div className="hidden md:gap-[30px] p-4 md:flex md:justify-center">

       <Info />
       <Form />
       </div>
        </>
    )
}
export default Contact