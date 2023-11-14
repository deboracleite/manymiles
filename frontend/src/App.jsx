import { BrowserRouter } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes/Routes';
import Header from './components/header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App;
