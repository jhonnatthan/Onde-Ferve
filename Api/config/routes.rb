Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/", to: "application#welcome"
  resources :users, param: :id
  resources :events, param: :id
  post "/auth/login", to: "authentication#login"
  get "/*a", to: "application#not_found"
end
