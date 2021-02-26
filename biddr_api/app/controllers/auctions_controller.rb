class AuctionsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :show]
    before_action :auction_params, only: [:create]
    before_action :find_auction, only: [:show]
    def index
        @auctions = Auction.all.order(created_at: :DESC)
        respond_to do |format|
            format.html { render :index }
            format.json { render json: @auctions }
        end
    end
    def show
        # @auction = Auction.find params[:id]
        @bid = Bid.new
        @bids = @auction.bids.order(price: :DESC)
    end
    def new
        @auction = Auction.new
    end
    def create
        @auction =Auction.new auction_params
        @auction.user = current_user
        if @auction.save
            flash[:notice] = 'Auction Created Successfully'
            redirect_to auction_path(@auction)
        else
            render :new
        end
    end
    private
    def auction_params
        params.require(:auction).permit(:title, :body, :end_date, :reserve_price)
    end
    def find_auction
        @auction=Auction.find params[:id]
    end


end
