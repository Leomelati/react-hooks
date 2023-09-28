// useRef and useEffect: DOM interaction
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'
// eslint-disable-next-line no-unused-vars

function Tilt({children}) {
  // 🐨 create a ref here with React.useRef()
  const ref = React.useRef()

  // 🐨 add a `React.useEffect` callback here and use VanillaTilt to make your
  // div look fancy.
  React.useEffect(() => {
    const tiltNode = ref.current
    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })

    return function cleanup() {
      tiltNode.vanillaTilt.destroy()
    }
  }, [])

  // 🐨 add the `ref` prop to the `tilt-root` div here:
  return (
    <div ref={ref} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function App() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}

export default App
