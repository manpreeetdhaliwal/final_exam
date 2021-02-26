class Api::V1::AuctionsController < ApplicationController
    def index
        auctions = Auction.order(created_at: :DESC)
        # render json: auctions
        render json: auctions, each_serializer: AuctionCollectionSerializer 

    end
    def show 
        @auction = Auction.find params[:id]
        render(
            json: @auction
        )
    end
end
