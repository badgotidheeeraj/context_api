// // Login.js
// import React, { useContext } from 'react';
// import UserContext from './UserContext';

// const Login = () => 
//     {
//     const { setUser } = useContext(UserContext);
//     const [userName,setUsername]=React.useState()
//     const [password,setPassword]=React.useState()

//     const handleLogin = (e) => {
//         e.preventDefault()
//         setUser({ name: 'John Doe' });
//     };

//     return (
//     <div>
//         <input type="text" placeholder="userNmae" value={userName} onchange={(e) => { setUsername(e.target.value) }}>
//         <input type="text" placeholder="" value={password} onchange={(e) => { setPassword(e.target.value) }}>
//         <button onClick={handleLogin}>Login</button>
                
//     </div>
// );
// };
//                 export default Login;



                import React, { useContext } from 'react';
import UserContext from './UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [userName, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ name: userName ,password:password});
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
