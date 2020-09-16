import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron, Button, Carousel} from 'react-bootstrap';
import './JumbotronComponent.css';

class JumbotronComponent extends Component {
    state = {  }
    render() { 
        return (
            // <Jumbotron>
            //     <h1>Welcome to my Photo Journal</h1>
            //     <p>
            //         A small glimpse in a world of beautiful images!!
            //     </p>
            //     <p>
            //         <Button variant="primary">Learn more</Button>
            //     </p>
            // </Jumbotron>
            <Carousel>
                <Carousel.Item>
                    <img
                    className = "Carousel-img"
                    //className="d-block w-100"
                    src="https://images.unsplash.com/photo-1600052434976-f98531a56f2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Welcome to my Photo Journal</h3>
                    <p>A small glimpse in a world of beautiful images!!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className = "Carousel-img"
                    //className="d-block w-100"
                    src="https://images.unsplash.com/photo-1596014533171-10494225d4dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className = "Carousel-img"
                    //className="d-block w-100"
                    src="https://images.unsplash.com/photo-1569317421382-98b18dc531a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
          );
    }
}
 
export default JumbotronComponent;