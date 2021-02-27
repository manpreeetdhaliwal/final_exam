class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :reserve_price, :end_date, :created_at, :updated_at
end
