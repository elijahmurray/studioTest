Rails.application.routes.draw do


  get 'get_tasks' => 'task#get_tasks'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
