import React from 'react'

function Home() {
   const logoutHandler = ():void=>{
    localStorage.clear();
}
  return (<>
    <div>Home Page</div>
    <button onClick={logoutHandler}>Home Page</button>
    </>
  )
}

export default Home