import React,  { useState } from 'react';

import logo from '../assets/logo.svg';
import './Login.css';

import api from '../services/api';

function Login({ history }){

    const [ username, setUsername ] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
    
        const response = await api.post('devs',  {
            username
        });

        const { _id } = response.data;

        //() => Action.component()
        history.push(`/devs/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} atl="TinderDev"/>
                <input 
                    placeholder='Digite seu usuário no github'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button 
                    type='submit'
                > Enviar
                </button>               
            </form>            
        </div>
        
    );
}
export default Login;

//43:05