import React, { Component } from 'react'
import AuctionDetails from './AuctionDetails';
// import BidList from './BidList';
import { Auction } from '../requests';

class AuctionShowPage extends Component {
    constructor(props) {
      super(props); // if you're using a class component and you want to access `this` then you have to call super(props)
      // if you're using a class component you must call super(props) in the constructor
      this.state = {
        auction: {}
      }
      // this.deleteAnswer = this.deleteAnswer.bind(this)
    }
  
    componentDidMount() {
      Auction.show(this.props.match.params.id)
        .then(auction => {
          console.log(auction);
          this.setState((state) => {
            return {
              auction: auction
            }
          })
        })
    }
  
    
  
    render() {
      console.log('Auction Show Page Rendered')
      const { title, body, end_date, reserve_price, created_at, updated_at, bids } = this.state.auction;
      return(
        <main>
          <AuctionDetails
            title={title}
            body={body}
            end_date={end_date}
            reserve_price={reserve_price}
            created_at={new Date(created_at)}
            updated_at={new Date(updated_at)}
          />
          {/* <strong><p>Previous bids</p></strong>
          <BidList
            bids={bids}
            />  */}
          {/* <Link question={this.state.question} to={`/questions/${this.state.question.id}/edit`}>Edit</Link>
          <AnswerList
            answers={answers}
            deleteAnswer={this.deleteAnswer}
          /> */}
        </main>
      )
    }
  }
  
  export default AuctionShowPage