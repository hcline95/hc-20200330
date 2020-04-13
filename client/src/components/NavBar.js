import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import * as actions from '../actions';
import styled from "styled-components";
import { Link } from "react-router-dom";

//controls the search bar
function NavBar(props) {

  //shows all movies when logo is clickd
  const logoClick = () =>{props.fetchAllMovies()}

      return (
        <NavContainer>
            <button id="logo" onClick={logoClick}>
                <Link to="/">
                    <h1>Movie Database</h1>
                </Link>
            </button>
        </NavContainer>
      )
    }

    export default connect(
        null,
        actions
      )(NavBar);


      const NavContainer = styled.div`
      position: fixed;
      z-index: 999;
      background: hsl(0, 0%, 13%);
      color: whitesmoke;
      margin-top: 0;
      width: 100%;
      height: auto;
      padding: 1.5em;
      #logo {
        position: relative;
        float: left;
        width: 200px;
        height: auto;
        background-color:hsl(0, 0%, 13%);
        border: none;
        outline:none;
      }
      #bar{
          width:300px;
      }
      a {
        color: #fff;
      }
    `;

