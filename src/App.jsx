import './App.css'
import Button from './shared/button/Button'

function App() {

  const handleClick = () => {
    console.log("button clicked");

  }
  const handleClick_WithApiCall = async () => {
    console.log("Start loading simulation");

    // Simulate a delay (like an API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("End loading simulation");
  }

  const handleClick_WithError = async () => {
    console.log("Start API call");

    try {
      // Simulate API error
      await new Promise((_, reject) => setTimeout(() => reject(new Error("API failed")), 2000));
    } catch (error) {
      console.error("Caught API error:", error);
      // You can show toast/alert here if needed
    }

    console.log("End API call");
  }
  return (
    <>
      <div>hi</div>
      <div style={{
        // width:"150px"
        }}>

      <Button 
      // label='-9709/ hfo wei. fewf we fwf efw ihewhfwie hfhf eiufh lweiufh iwhfiehuf weiuhfiwue. hf'
      label='fhe7987000 l k'
       variant='primary'
       onClick={handleClick_WithError}
       width='50px'
       />
      </div>
      {/* <Button /> */}
    </>
  )
}

export default App
