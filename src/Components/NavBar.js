import React, { useState } from 'react'
import styled from 'styled-components';
import MovieList from './MovieList';



let SearchBar = styled.div`
background-color:#cadfd8;
padding:0.3rem 0;
ul li {
    list-style-type: none;
  }
  ul{
    display:grid;
    grid-template-columns: auto auto;
  }
  .input-box {
    border-radius: 20px;
    margin-right:4px;
    outline:none;
    height:1.8rem;
    border:none;
    padding: 0 0.5rem;
  }
  .btn-search{
    border:none;
    padding: 0.4rem 1rem;
    font-weight:bold;
    border-radius:20px;
    background:#7e84cd;
    color: white;

  }
  .Logo{
    font-weight:bold;
    color:#35c798;
    font-size:1.5rem;
  }
  @media (max-width:680px){
    .input-box {
      display:none;
      }
      .btn-search{
        display:none;
      
      }
  }
  @media(max-width: 788px){
    display:grid;
    grid-template-columns: auto auto;
    justify-content:center;
}
`;


export default function NavBar() {
    const [movie, setMovie] = useState("");
    let MovieName = (e) => {
        setMovie(e.target.value)
        e.preventDefault();
        console.log(e.target.value);

    };
   
    let SearchMovies = (e) => {
        if (movie !== '') {
       

            console.log(movie);
        } else {
            console.log("enter in movie name")
        }

    };
    // const axios = require("axios");


    return (
        <>
        <div>
            <SearchBar>
                <ul>
                    <li className='Logo'>Flex Shows</li>
                    <li>
                        <input placeholder='Enter your choice..' className="input-box" type="text" value={movie} onChange={MovieName} />
                        <button className='btn-search' onClick={SearchMovies}>Search</button>
                    </li>


                </ul>
            </SearchBar>
        </div>
        </>
    )
}
