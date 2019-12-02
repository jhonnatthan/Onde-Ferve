Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :users, param: :_username
  resources :events, param: :_id
  post "/auth/login", to: "authentication#login"
  get "/*a", to: "application#not_found"
end
