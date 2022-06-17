import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  
    return (
      <div className="App" style={{flexDirection:'column'}}>
        <Header title="Call a Friend" subtitle='your friendly contact app' />
        <Contact name={contacts[0].name} phoneNumber={contacts[0].phone} email={contacts[0].email} image={contacts[0].photo} />
        <Contact name={contacts[1].name} phoneNumber={contacts[1].phone} email={contacts[1].email} image={contacts[1].photo} />
        <Contact name={contacts[2].name} phoneNumber={contacts[2].phone} email={contacts[2].email} image={contacts[2].photo} />
        <Contact name={contacts[3].name} phoneNumber={contacts[3].phone} email={contacts[3].email} image={contacts[3].photo} />
        <Contact name={contacts[4].name} phoneNumber={contacts[4].phone} email={contacts[4].email} image={contacts[4].photo} />
        <Contact name={contacts[5].name} phoneNumber={contacts[5].phone} email={contacts[5].email} image={contacts[5].photo} />
      </div>
  );
  
    
  
  
}

export default App;
