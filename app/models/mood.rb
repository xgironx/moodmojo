class Mood < ApplicationRecord
  has_many :songs, dependent: :destroy
end
