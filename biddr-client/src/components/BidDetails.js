const BidDetails = ({ price, created_at}) => {
    return (
      <div>
        <p>{price}</p>
       
        <p>
          <strong>On</strong> {new Date(created_at).toLocaleString()}
        </p>
       
      </div>
    )
  }
  
  export default BidDetails