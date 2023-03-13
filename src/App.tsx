import Router from "./routes/routes";
import GlobalStyle from "./styles/globalStyle";
import ModalCart from './components/ModalCart/index';

const App = () => (
  <div>
    <GlobalStyle />
    <ModalCart/>
    <Router />
  </div>
);

export default App;
