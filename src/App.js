import {BrowserRouter,Router,Routes} from 'react-router-dom';
import { UserDetails } from './UserDetails';
import Create from './Create';


function App() {
  return (
    <>
    <BrowserRouter>
    <Router>
      <Routes path='/userdetails' component={<UserDetails/>}/>
    </Router>

    
    </BrowserRouter>
    
    <Create/>
    </>
    
  );
}

export default App;
