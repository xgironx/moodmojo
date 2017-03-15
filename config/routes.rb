Rails.application.routes.draw do

  root :to => 'moods#index'

  get "/songs/get_song" => 'songs#get_song'

  get "/moods/get_moods" => 'moods#get_moods'

  get "/moods/save_mood" => 'moods#save_mood'

  get "/songs/get_all_songs" => 'songs#get_all_songs'

  resources :moods, :only =>[:index, :show] do
    resources :songs, :only =>[:index, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
