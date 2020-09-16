import React, { Component } from 'react';
import './Banner.css';

class BannerImage extends Component {
    render() { 

        return (
            <div>
                <img className = "banner" src = "../images/banner.jpg" />
                {/* <img className = "banner" src = {this.props.id} /> */}
            </div>
          );
    }
}
 
export default BannerImage;