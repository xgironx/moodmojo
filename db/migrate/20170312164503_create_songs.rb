class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :uri
      t.references :mood
      t.timestamps
    end
  end
end
