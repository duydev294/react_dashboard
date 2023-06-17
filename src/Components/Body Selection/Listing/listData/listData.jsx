import { useEffect, useState } from "react";
import axios from 'axios';

function Listdata() {
    const [data, setData] = useState([])

  useEffect(() => {
    const DataGrid = async () => {
      try {
        const res = await axios.get(
          'http://sanslab1.ddns.net:5001/api/device/data/sensors'
        )
        console.log(res.data)
        setData(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    DataGrid()
  }, []);
    return(
        <div></div>
    )
}   
export default Listdata;