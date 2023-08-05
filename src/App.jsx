import React, { useState } from 'react'
import './input.css'

function App(){

	const [inputValue, setInputValue] = useState('')

	const handleSubmit = (e) =>{
		e.preventDefault()
		console.log(inputValue)
		setInputValue('')

	}

	const handleChange  = (e) =>{

		setInputValue(e.target.value)
	}

	return(
		<div className='w-11/12  md:w-5/6 lg:w-3/4  h-screen m-auto'>
			<header className='my-9 flex justify-center'>
				<form onSubmit={handleSubmit} className='w-9/12 flex '>
					<input 
						type="text"
						className='w-full rounded-l px-2 text-xl font-semibold outline-none' 
						placeholder='Create a TODO'
						onChange={handleChange}
						value={inputValue}
					/>
					<button className='p-3 bg-red-500 rounded-r text-white font-semibold' type="submit">Add</button>

				</form>
				<div className='flex gap-1 items-center relative left-4'>
					<div className='h-5 w-1 bg-red-700 stick'></div>
					<div className='h-5 w-1 bg-red-700 stick'></div>
					<div className='h-5 w-1 bg-red-700 stick'></div>
				</div>
			</header>
		</div>
	)
}



export default App