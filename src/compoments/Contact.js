import React from 'react';
import './contact.css';

function Contact(props) {
    return (
        <div className='Contact'>
            <img className='avatar' src={props.avatar} />

            <div className='name'>
                {props.name}

                <div className='status'>

                    <div className='status-text'>
                        <div className={props.online ? 'status-online' : 'status-offline'}>
                         
                     </div>
                        {props.online ? 'online' : 'offline'}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
