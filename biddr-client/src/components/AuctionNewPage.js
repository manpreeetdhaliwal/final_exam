import React, { Component } from 'react'
import { Auction } from '../requests';

class AuctionNewPage extends Component {
    createAuction = event => {
        event.preventDefault();
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);
    
        const newAuction = {
            title: fd.get("title"),
            body: fd.get("body"),
            end_date: fd.get("end_date"),
            reserve_price: fd.get("reserve_price")
        };
    
        Auction.create(newAuction).then(data => {
          if (!data.errors) {
            this.props.history.push(`/auctions/${data.id}`);
          }
        });
    
        currentTarget.reset();
      };
render(){
    return(
      <div className="container">
        <p><strong>Add New Auction Item</strong></p>
        <form onSubmit={event => this.createAuction(event)}>
          
          <div>
            <label htmlFor='title'>Title</label>
            <br />
            <input type='text' name='title' id='title' placeholder="Title" required />
          </div>
          <div>
            <label htmlFor='body'>Body</label>
            <br />
            <textarea name='body' id='body' rows='5' placeholder='describe the item' required  />
          </div>
          <div>
            <label htmlFor='end_date'>End Date</label>
            <br />
            <input type='date' name='end_date' id='end_date' required/>
          </div>
          <div>
            <label htmlFor='reserve_price'>Reserve Price</label>
            <br />
            <input type='number' name='reserve_price' id='reserve_price' required/>
          </div>
          <br></br>
          <div>
            <input type='submit' value='Submit' />
          </div>
          
        </form>
        </div>
      )
    }
      
}
export default AuctionNewPage