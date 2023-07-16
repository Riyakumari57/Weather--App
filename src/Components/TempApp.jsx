import React, { useEffect, useState , useRef} from 'react'

function TempApp() {
    const [city , setCity] = useState(null);
    const [search , setSearch] = useState(null);
    const inputRef = useRef(null);
     
  

    useEffect(()=>{
          
        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b28f76e2bb19a708450e0ca7e524e24a`
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            setCity(result.main);
        }
           fetchApi();
    },[search])
  
  
    const handleClick = () => {
      setSearch(inputRef.current.value);
    };


  
  
    return (
    <div>
         <div className="box">
            <div className="inputData">
              <input type="text" ref={inputRef}
                className="inputField"
                value={search}
                // onKeyDown={handleKeyDown}
                />
                <i className="searchButton fa-solid fa-magnifying-glass" onClick={handleClick}></i>
            </div>

           {!city ? (
            <p className='ErrorMessage'>No Data Found</p>
           )
        :( 
            <div>
            
            <div className="info">
            <h1 className="location">
               <i className="fa-sharp fa-solid fa-location-dot"></i> {search}
            </h1>

            <h1 className="temp">
                {city.temp}° Cel
            </h1>

            <h3 className="tempmin_max">
              Min:{city.temp_min}° Cel | Max:{city.temp_max}° Cel
            </h3>
       </div>
       </div>

        )}

         <div className="wave -one"></div>
         <div className="wave -two"></div>
         <div className="wave -three"></div>
         
         </div>

         
    </div>
  )
}

export default TempApp