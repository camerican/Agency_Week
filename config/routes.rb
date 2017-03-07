Rails.application.routes.draw do
  devise_for :users
  devise_for :models
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  get '/map' => 'homelesspeople#index'
  post '/map' => 'homelesspeople#create'
  get '/users' => 'users#index'
  get '/users/:id' => 'users#show'
  get '/contact' => 'static#index'
end
