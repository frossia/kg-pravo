class CreateReceptions < ActiveRecord::Migration
  def change
    create_table :receptions do |t|
      t.string :name
      t.string :contact
      t.datetime :rtime
      t.text :body

      t.timestamps
    end
  end
end
