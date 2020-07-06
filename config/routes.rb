Rails.application.routes.draw do
  root 'pages#index'
  get 'projects', to: 'pages#projects'
end
