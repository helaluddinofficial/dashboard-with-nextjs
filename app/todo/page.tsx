import React from 'react'

const ToDoPage = () => {
	const initialstate=
	// reducer-3
	const reducer = (state = initialstate, action) => {
		switch (action.type) {
			case "Add_Todo":
				return {
					...state,
					todos:[...state.todos,action.payload]
				}
			case "Remove_Todo":
				return {
					...state,
					todos:state.todos.filter((todo)=>todo.id!==action.payload)
				}
			case "Completed_Todo":
				return {
					...state,
					todos: state.todos.map((todo) => {
						if (todo.id === action.payload) {
							return {
								...todo,
								completed: !todo.completed
							}
						} else {
							return todo
						}
					})

		}
		default :
		return state
		}
	}
	return (
    <div>
      <h2>Todopage</h2>
    </div>
  );
}

export default ToDoPage
