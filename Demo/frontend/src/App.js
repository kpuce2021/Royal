// 1. Install dependencies DONE
// 2. Import dependencies DONE
// 3. Setup webcam and canvas DONE
// 4. Define references to those DONE
// 5. Load posenet DONE
// 6. Detect function DONE
// 7. Drawing utilities from tensorflow DONE
// 8. Draw functions DONE

import "./App.css";
import PoseDetect from '../src/component/PoseDetect'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <PoseDetect />
      </header>
    </div>
  );
}

export default App;
