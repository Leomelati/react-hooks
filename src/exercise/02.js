// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(key, defaultValue = '') {
  // 🐨 initialize the state to the value from localStorage
  // A ideia de criar uma função serve para melhorias de performance
  const [value, setValue] = React.useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? defaultValue,
  )

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

function Greeting({initialName = ''}) {
  const [value, setValue] = useLocalStorageState('name', initialName)

  function handleChange(event) {
    setValue(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={value} onChange={handleChange} id="name" />
      </form>
      {value ? <strong>Hello {value}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
