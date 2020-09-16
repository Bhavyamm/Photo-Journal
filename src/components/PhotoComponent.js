import React, { Component } from 'react';
import Album from './Album';
import './Banner.css';

class PhotoComponent extends Component {
    constructor(props){
        super(props);
    }

    render() { 
        //const image = "../images/" + this.props.src;
        const image = `https://picsum.photos/id/${this.props.src}/200`;
        return (
            <div className = "photo-entry-block">
                <a href = {image}>
                    <img className = "photo-img" src = {image} />
                </a>
                {/* <h5>{this.props.caption}</h5>
                <h5>{this.props.location}</h5> */}
            </div>
          );
    }
}
 
export default PhotoComponent;