Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :messages, except: [:new, :edit]
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :channel_dms, except: [:new, :edit]

  end

  root to: "static_pages#root"
  mount ActionCable.server, at: '/cable'
end
