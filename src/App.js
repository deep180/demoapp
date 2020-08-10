import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Table from './Components/table';

function App() {
   const [posts, setPosts] = useState([]);

   const fetchData = async () => {
      let postsRes = await axios.get('http://localhost:3001/shipments');
      return postsRes.data;
   };

   useEffect(() => {
      fetchData()
         .then((postRes) => {
            setPosts(postRes);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div>
         <Table shipment={posts} />
      </div>
   );
}

export default App;
