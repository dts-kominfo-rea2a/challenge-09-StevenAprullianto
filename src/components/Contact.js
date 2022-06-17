// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({name, phoneNumber, email, image}) => {
    return (
        <div style={{display:'flex', flexDirection:'row', backgroundColor:'#f4deb3', borderRadius:'10px', width:'30%', height:'auto', margin:'0 auto', marginBottom:'20px'}}>
            <div style={{width:'50%',  display:'flex', verticalAlign:'middle', alignItems:'center', justifyContent:'center'}}>
                <img src={image} alt="kitten" style={{borderRadius:'50%', width:'40%'}} />
            </div>
            <div style={{width:'50%', margin:'0 auto'}}>
                <h4>{name}</h4>
                <p>{phoneNumber}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact;