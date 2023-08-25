import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
  const [users, setUsers] = useState([]);
  const [isDataTaken, setisDataTaken] = useState(false);
  const [myBtnClick, setisBtnClick] = useState(false);
  const fetchdata = async () => {
    setisBtnClick(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
    setInterval(() => {
      setisDataTaken(true);
    }, 1550);
  };
  return ( 
   <div className='bigcontainer'> 
    <div>
        <button type="button"  onClick={fetchdata} className="btns">Get Users</button>
    </div>
      {myBtnClick ? (
        isDataTaken ? (       
          <div className='us'>
              {users.map(({ id, first_name, last_name, avatar, email }) => {
              return (
                <div className="container">
                <div className='fordis'>
                <img  height={250} src={avatar} className='ig'></img>
                    <h3 className='fn'>
                      {first_name} {last_name}
                    </h3>
                </div>
                </div>
              )
            })}  
          </div>
        ) : (
          <div className='dull'> <h3>Loading Users...</h3></div>
        )
      ) : (
        <> </>
      )}
    </div>
  );
}
export default App;
