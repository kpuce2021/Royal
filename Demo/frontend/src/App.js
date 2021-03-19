import "./App.css";
import PoseDetect from '../src/component/PoseDetect'
import ImageDetect from '../src/component/ImageDetect'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <PoseDetect /> */}
        <ImageDetect />
      </header>
    </div>
  );
}

export default App;
