import React from 'react'

const Crud = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const
  return (
  <>
  <h1>Crud Operation</h1>
  <form>
    <div>
        <input type = "text" placeholder='Enter your name' onChange={(e)=> setName(e.target.value)}/>
    </div>
  </form>
  </>
  )
}

export default Crud