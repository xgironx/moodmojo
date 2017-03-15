class MoodsController < ApplicationController

  def index
    @moods = Mood.all
  end

  def get_moods
    @moods = Mood.all
    respond_to do |format|
      format.json { render json: @moods }
      format.html { render :show}
    end
  end

  def save_mood

    @song = Song.create!(uri: "#{params[:uri]}", mood_id: params[:id])    
  end


end
