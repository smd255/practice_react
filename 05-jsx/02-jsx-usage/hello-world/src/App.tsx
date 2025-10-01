// import { useState } from 'react'

function App() {
  
  const list = ["Patty","Rolley","Bobby"]

  // JSX内での繰り返し処理
  return (
    <ul>
      {list.map((name)=>(
        <li>Hello,{name}</li>
      ))}
    </ul>
  );
}

export default App
