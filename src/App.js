import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { changeBackground } from './redux/slice';

function App() {
  const background=useSelector((state)=>state.background.color)
  const dispatch=useDispatch()
 
  return (
    <div style={{height:'100vh',width:'100%',backgroundColor:`${background}`}} className="App">
      <div className="container d-flex justify-content-center gap-3 pt-5">
      <button onClick={()=>dispatch(changeBackground('#DC143C		'))} className='btn btn-dark'>Crimson</button>
      <button  onClick={()=>dispatch(changeBackground('#00BFFF	'))}  className='btn btn-dark'>DeepSkyblue</button>
      <button  onClick={()=>dispatch(changeBackground('#ADFF2F'))}  className='btn btn-dark'>GreenYellow</button>
      </div>

    
    </div>
  );
}

export default App;
