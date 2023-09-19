import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
// import NavOffcanvas from "./components/NavOffcanvas"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header></Header>
      {/* <NavOffcanvas></NavOffcanvas> */}
      <Main></Main>
      <Footer />
    </>
  );
}

export default App
