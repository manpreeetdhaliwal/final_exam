class BidsController < ApplicationController
    before_action :authenticate_user!
    before_action :bid_params, only: [:create]
    def create
        @auction = Auction.find params[:auction_id]
        @bid = Bid.new bid_params
        @bid.user = current_user
        @bid.auction = @auction
        if @bid.save
            redirect_to auction_path(@auction)
        else
            @bids = @auction.bids.order(price: :DESC)
            render 'auctions/show'    
        end 
    end

    private

    def bid_params
        params.require(:bid).permit(:price, :created_at)
    end
end
