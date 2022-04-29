import Footer from './Footer.js';
import Header from './Header.js';
import Person from './Person.js';
import QRcode from './QRcode.js';
import VaccineList from './VaccineList.js';

function Main() {
    return (
      <div className="App">
       <Header/>
       <Person/>
       <QRcode/>
       <VaccineList/>
       <Footer/>
      </div>
    );
  }
  
  export default Main;
  