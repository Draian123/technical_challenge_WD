import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import SinglePhone from './SinglePhone';
import { Link } from 'react-router-dom';


export default function Phones() {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true);


    async function fetchData() {
        try {
          const response = await axios.get(`http://localhost:5005/phones`);
          console.log(response)
          setPhones(response.data);
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
        fetchData();
    }, []);

  if(loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </Box>
    )
  }  

  return (
    <div>
        <div>
        {phones.map((phone) => (
            <div key={phone.id} className="onePhoneLink">
                <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
            </div>
        ))}
        </div>
    </div>
  )
}
