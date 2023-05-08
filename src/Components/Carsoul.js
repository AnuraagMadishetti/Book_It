import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards'
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Component } from 'react';
import React from "react";

function Carsoul() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          id='image1'
          className="d-block w-100"
          src="1.jpeg"
          alt="First slide"
        />
        
        <Carousel.Caption>
          
        <button
              className="btn btn-info"
              size="large"
              variant="contained"
              color="info"
              type="submit"
              component={Link}
              to={'/bookSDetails'}
            >
              Explore
            </button>
         
        

        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item>
        <img id="image2"
          className="d-block w-100"
          src="2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="image3"
          className="d-block w-100"
          src="3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carsoul;