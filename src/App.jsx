import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {




	const [password, setPassWord] = useState("");
	const [title, setTitle] = useState("");
	const [datas,setDatas] = useState([])



  
//addData
  const addPassword = () =>{
    axios.post("http://localhost:3001/addPassword", {
			password: password,
			title: title,
		});

    setPassWord('')
    setTitle('')

  }
   




  useEffect(() =>{
	axios.get('http://localhost:3001/showPasswords').then((response) =>{
		setDatas(response.data)
		
	})
  },[])


  
 


	return (
		<div className="App">
			<div className="AddingPassword">
				<input
					type="text"
					placeholder="ex.password"
					value={password}
					onChange={(e) => setPassWord(e.target.value)}
				/>
				<input
					type="text"
					placeholder="ex. facebook"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<button onClick={addPassword}>Add Password</button>


				<button >Get Password</button>

			
       

    


			</div>
			<div className='passwordList'>
				{
					datas.map((data)=>{
						return <h1>{data.title}</h1>
					})
				}

			</div>
		</div>
	);
}

export default App;
