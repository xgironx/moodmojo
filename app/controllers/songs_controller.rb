class SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def show
  end

  def get_song
    @response = Spotify.new(params[:artist], params[:track])
    respond_to do |format|
      format.json { render json: @response }
      format.html { render :show}
    end
  end

  def get_all_songs
    @songs = Song.where(mood_id: params[:id])
    respond_to do |format|
      format.json { render json: @songs }
      format.html { render :show}
    end
  end

  def delete
  end
end
