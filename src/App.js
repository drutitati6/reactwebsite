
import './App.css';
import AxiosComp  from './AxiosComp';
import d1 from './d1.png';
import d2 from './d2.png';
import d3 from './d3.png';
import d4 from './d4.png';
import d5 from './d5.png';
function App() {
  return (
    <>
    <AxiosComp url={d1} n="Darryl Corwin" c="2024-04-01T06:35:24.507Z" id="1"/>
    <AxiosComp url={d2} n="Peter Wilderman" c="2024-04-01T16:39:54.278Z" id="2"/>
    <AxiosComp url={d3} n="Miss Theresa Torphy DDS" c="2024-04-01T13:49:58.811Z" id="3"/>
    <AxiosComp url={d4} n="Sadie Kerluke" c="2024-04-01T17:10:59.308Z" id="4"/>
    <AxiosComp url={d5} n="Harvey Gleason" c="2024-03-31T18:16:35.698Z" id="5"/>
    </>
  );
}

export default App;
