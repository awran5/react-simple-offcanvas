import { OffcanvasProvider, Trigger, Offcanvas } from 'react-simple-offcanvas'

let renderComponent = 0

const App = () => {
  // Callback function that is triggered when the Offcanvas is opened
  const handleOpen = () => console.log('open')
  // Callback function that is triggered when the Offcanvas is closed
  const handleClose = () => console.log('close')

  renderComponent += 1

  return (
    <div className='App'>
      <OffcanvasProvider onOpen={handleOpen} onClose={handleClose}>
        <Trigger />
        <Offcanvas position='bottom' allowEsc={false} />
      </OffcanvasProvider>
      <br />
      <hr />
      <div> Render: {renderComponent}</div>
    </div>
  )
}
export default App
