import React, { useState, useEffect } from "react";
import { AiFillForward, AiFillBackward } from "react-icons/ai";
import axios from "axios";

import Movie from "./Movie";

const List = ({ fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(fetchURL + page)
    axios.get(fetchURL + page)
    .then((response) => {
        setMovies(response.data.results);
      })
    .catch((error) => {
      console.log(error);
    });
  }, [page, fetchURL]);


  return (
    <div className="h-70vh">
      <div className="flex justify-center w-7/10 mt-5">
        <div className='grid grid-cols-3 gap-y-8 gap-x-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {movies.map((item) => {
            return (
              <Movie key={item.id} item={item} ></Movie>
            );
          })}
        </div>      
      </div>
      <div className="flex items-center justify-center mt-10">
          
          {page <= 2 ? (
            <div></div>
          ) : (
          <button className="text-xl hover:bg-[#FFFDE3] hover:text-[#141515] text-[#FFFDE3] py-2 px-4 mb-5 mr-2 ml-2" onClick={() => setPage(page - 2)} disabled={page<2 ? true: false}>
            <AiFillBackward />
          </button>
          )}
          {page === 1 ? (
            <div></div>
          ) : (
          <button className="text-xl hover:bg-[#FFFDE3] hover:text-[#141515] text-[#FFFDE3] py-2 px-4 mb-5 ml-2 mr-2" onClick={() => setPage(page - 1)} disabled={page<2 ? true: false}>
            {page-1}
          </button>
          )}
          <button className="text-xl hover:bg-[#FFFDE3] hover:text-[#141515] text-[#FFFDE3] py-2 px-4 mb-5 mr-2 ml-2" disabled={true}>
            {page}
          </button>
          {page < 15 ? (
            <button className="text-xl hover:bg-[#FFFDE3] hover:text-[#141515] text-[#FFFDE3] py-2 px-4 mb-5 ml-2 mr-2" onClick={() => setPage(page + 1)} disabled={page>15 ? true: false}>
              {page+1}
            </button>
            ) : (
            <div></div>
          )}
          {page < 14 ? (
            <button className="text-xl hover:bg-[#FFFDE3] hover:text-[#141515] text-[#FFFDE3] py-2 px-4 mb-5 ml-2 mr-2" onClick={() => setPage(page + 2)} disabled={page>15 ? true: false}>
              <AiFillForward /> 
            </button>
          ) : (
            <div></div>
          )}
      </div>    
    </div>
  );
};

export default List;




