Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'mains#index'
  resource :reservations
  resource :possible_dates
  resource :subscribers
end
