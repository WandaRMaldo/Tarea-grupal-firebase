import React from 'react';
import {authentication} from '../firebase';

const Home = () => {
    return ( 
        <div>
            <h1>Home</h1>
            <button onClick={() => authentication.signOut()}>Sign Out</button>
        </div>
     );
}
 
export default Home;