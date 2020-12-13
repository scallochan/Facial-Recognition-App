import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/rank/rank";
import Particles from 'react-particles-js';
import './App.css';

const  particleOptions = {
  particles: {
   number: {
     value: 100,
     density: {
       enable: true,
       value_area: 800     
    }
   }
  }         	
} 



function App() {
  return (
    <div className="App">
      <Particles className="particles"
        params={particleOptions} 
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
