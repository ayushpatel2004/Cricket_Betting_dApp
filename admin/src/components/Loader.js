import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";


function Loader() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
    },5000)
  },[])

  return (
    <div>
        {
            loading ?
            <CircleLoader color={'#D0021B'} loading={loading} size={50}/>
            :
            <div>
                <h1>Hello, This is Loading</h1>
            </div>
        }   
    </div>
  );
}

export default Loader;