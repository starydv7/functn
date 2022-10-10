import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
// import Header from './components/Header';

function App() {
  return (
    <div className="App">
     {/* <Header />  */}
      <AddContact />
      <br></br>
      <hr></hr>
      <br></br>
      <ContactList/>
    </div>
  );
}

export default App;
