import React from 'react'
import Lap from './Lap'
import Button from './button'


const App = () => {
    const users = ['aman','mayank ', 'manish ', 'deepak'];
  return (
    <div>
        {users.map((name, index) => (
          <Button key={index} name={name} />
        ))}
    </div>
  )
}

export default App



