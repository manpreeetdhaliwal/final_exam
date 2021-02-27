class Api::V1::AuctionsController < Api::ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :find_auction, only: [:show]

    def new
    end
    def create 
        auction = Auction.new auction_params 
        auction.user = current_user 
        if auction.save 
            render json: { id: auction.id }
        else 
            render(
                json: { errors: auction.errors }, 
                status: 422 # Unprocessable Entity
            )
        end
    end
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

    private

    def find_auction
        @auction = Auction.find params[:id]
    end

    def auction_params
        params.require(:auction).permit(:title, :body, :reserve_price, :end_date)
    end
end
