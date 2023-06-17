import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import axios from 'axios';

function GridStatus() {
    const [data, setData] = useState([])

  useEffect(() => {
    const DataGrid = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?_limit=10'
        )
        console.log(res.data)
        setData(res.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    DataGrid()
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 10},
    { field: "userId", headerName: "User", width: 20},
    { field: "title", headerName: "Title", width: 250},
    { field: "completed", headerName: "Status", width: 100},
  ];

  const rows =  data.map((row) => ({
        id: row.id,
        userId: row.userId,
        title: row.title,
        completed: row.completed,
  }))
    return(
        <div style={{height: 350, width:450}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={1}
                    pagePer={10}
                />
    </div>
    )
}   
export default GridStatus;