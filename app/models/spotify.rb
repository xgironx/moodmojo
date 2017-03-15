class Spotify

  attr_accessor :uri, :artist, :track

  # need to add artist and track params
  def initialize(artist, track)
    @artist = artist
    @track = track

    url =("https://api.spotify.com/v1/search?q=" + track + "&type=track")

    response = HTTParty.get(url).parsed_response

    @uri = response['tracks']['items'][0]['uri']


    # ['artists']['items'][0]['uri']
  end

end
