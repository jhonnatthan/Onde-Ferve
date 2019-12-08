class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.string :description
      t.datetime :date
      t.string :banner
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
