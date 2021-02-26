Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :auctions do
    resources :bids, shallow: true, only: :create
  end
  namespace :api, defaults: { format: :json } do 
    namespace :v1 do 
      resources :auctions
    end
  end

end
