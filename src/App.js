import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Addtask from './Component/Addtask/Addtask';
import ListTask from './Component/ListTask/ListTask';


function App() {
  
  return (
    <div className="App">
      <Addtask/>
      <ListTask/>
    </div>
  );
}
   
   

export default App;
