import React, { useState } from 'react'

const TodoInput = () => {
	const [text, setText] = useState('')

	
	return (
    <div>
      <form action="">
				<input
					
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
				/>
				<button type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoInput
