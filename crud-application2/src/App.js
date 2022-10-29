import './App.css';
import Request from './components/Request';
// import FormValidation from './components/FormValidation';
import Validation from './components/Validation';
import FetchGet from "./components/FetchGet";
import PostData from './components/PostData';

function App() {
  return (
    <div className="App">
      {/* <FormValidation/> */}
      {/* <Request/> */}
      <PostData/>
      <FetchGet/>
    </div>
  );
}

export default App;
