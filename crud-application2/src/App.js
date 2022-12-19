import './App.css';
import Request from './components/Request';
// import FormValidation from './components/FormValidation';
import Validation from './components/Validation';
import FetchGet from "./components/FetchGet";
import PostData from './components/PostData';
import Fetch2 from './components/Fetch2';
import Fetch3 from './components/Fetch3';

function App() {
  return (
    <div className="App">
      <Validation />
      <Request/>
      <FetchGet />
      <PostData />
      <Fetch2/>
      <Fetch3/>
    </div>
  );
}

export default App;
