class Auction < ApplicationRecord
    #Associations
    belongs_to :user
    has_many :bids, dependent: :destroy
    #validations
    validates :title, presence: true
    validates :body, presence: true, length: {minimum: 5}
    validates :end_date, presence: true
    validates :reserve_price, numericality: {greater_than: 0}
end
