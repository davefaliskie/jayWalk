class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :title
      t.text :iframe
      t.string :type

      t.timestamps
    end
  end
end
