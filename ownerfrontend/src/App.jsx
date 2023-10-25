import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';



import Routes from './routes/Routes';
function App() {
  return (
    <BrowserRouter>
    
     <Routes/>
    
    <GlobalStyle/>
   </BrowserRouter>
  );
}

export default App;
