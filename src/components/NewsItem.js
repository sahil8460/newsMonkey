import React, { Component, Consumer } from 'react'
import { ThemeContext } from './Navbar';


export default class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source,themecolor} = this.props;
    let dateGMT = new Date(date).toGMTString();
    let color="white ";
    return (
      <>
      
        <div className='d-flex justify-content-center my-3'>
        
          <div className="card" style={{width: "18rem",border:`2px solid ${themecolor}`,color:`${color}`}}>
          <span className="position-absolute translate-middle badge badge-pill" style={{left:"75%",zIndex:'1',backgroundColor:`${themecolor}`,color:`${color}`}}>{source}</span>
            <img className="card-img-top img-thumbnail" style={{borderBottom:`2px solid ${themecolor}`}} src={!imgUrl?"https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg":imgUrl} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-dark">{title}...</h5>
              <p className="card-text text-dark">{description}</p>
              <p className='card-text text-muted'>Author @ {(author)?author:"John Doe"}<br/>Published @ {dateGMT}</p>
              <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm" style={{backgroundColor:`${themecolor}`,color:`${color}`}}>Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}
