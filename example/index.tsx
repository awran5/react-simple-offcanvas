import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { OffcanvasProvider, Trigger, Offcanvas } from '../.'

const App = () => {
  // Callback function that is triggered when the Offcanvas is opened
  const handleOpen = () => console.log('open')
  // Callback function that is triggered when the Offcanvas is closed
  const handleClose = () => console.log('close')

  return (
    <div>
      <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
        <Trigger />
        <Offcanvas />
      </OffcanvasProvider>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
