import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';
const App = ()=>{
  // const [data,setData] = useState(null);
  // const onClick = async()=>{
  //   try{
  //     const respone = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=f464059e71d34b509815cb7cdd3bacc3',);
  //     setData(respone.data);
  //   }catch(e){
  //     console.log(e);
  //   }
  // }

  // return(
  //   <div>
  //     <div>
  //       <button onClick={onClick}>불러오기</button>

  //     </div>
  //     {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
  //   </div>
  // )

  return <NewsList/>;
}


export default App;
