import React, { Component } from 'react';
import { Auction } from '../requests';
import { Link } from 'react-router-dom';


class AuctionIndexPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        auctions: []
      }
      console.log('Component initialized')
    // this.createAuction = this.createAuction.bind(this);
    }
  
    componentDidMount() {
      Auction.index()
        .then((auctions) => {
            console.log(auctions)
          this.setState((state) => {
            return {
              auctions: auctions
            }
          })
        })
    }

   

    render() {
        console.log('Auction Index Page Rendered')
        return(
          <main className="container">
          
           <p><strong>Auctions Index page</strong></p>
            {this.state.auctions.map(a=> {
              return(
                <div key={a.id}>
                  <Link to={`/auctions/${a.id}`}>
                    <h1>{a.id} - {a.title}</h1>
                  </Link>
                  <p>{a.created_at.toLocaleString()}</p>
                 
                </div>
              )
            })}
          </main>
        )
      }
    }
    
    export default AuctionIndexPage