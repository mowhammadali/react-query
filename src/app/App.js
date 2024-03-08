import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 } from 'uuid';

const App = () => {
    const [name , setName] = useState('');
    const [refresh , setRefresh] = useState(false);
    const [users , setUsers] = useState([]);

    const sendNameToServer = () => {
        if (name) {
            axios.post('http://localhost:3001/users' , {id: v4() , name: name})
                .then(res => {
                    console.log(res);
                    setRefresh(prev => !prev);
                })
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
    } , [refresh])

    return (
        <div style={{padding: '20px'}}>
            <div>
                <input value={name} type='text' onChange={e => setName(e.target.value)}/>
                <br />
                <br />
                <button onClick={sendNameToServer}>Add Name</button>
            </div>
            <div style={{marginTop: '30px'}}>
                {users.map((user , index) => <h3 key={index}>{user.name}</h3>)}
            </div>
        </div>
    )
}

export default App;