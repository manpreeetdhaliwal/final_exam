import React, { Component } from 'react'
import { Bid } from '../requests';

class BidNewForm extends Component {
    createBid = event => {
        event.preventDefault();
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);
    
        const newBid = {
            price: fd.get("price"),
            created_at: fd.get("created_at"),
            
        };
    
        Bid.create(newBid).then(data => {
          if (!data.errors) {
            this.props.history.push(`/bids/${data.id}/`);
          }
        });
    
        currentTarget.reset();
      };
render(){
    return(
      <div>
        <form onSubmit={event => this.createBid(event)}>
          <div>
            <label htmlFor='price'>Price: </label>
            <input type='number' name='price' id='price' placeholder="price" required />
              <input type='submit' value='Bid' />
          </div> 
        </form>
        </div>
      )
    }
      
}
export default BidNewForm