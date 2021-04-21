import "./style.css";
import NavbarComponent from "./navbar-component";
import BannerComponent from "./banner";

const App = () => {
  return (
    <div className="App">
      <header>
        <NavbarComponent />
        <BannerComponent />
      </header>
    </div>
  );
};

export default App;
