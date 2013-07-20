class CreateCalls < ActiveRecord::Migration
  def change
    create_table :calls do |t|
      t.string :name
      t.datetime :call_time
      t.text :body

      t.timestamps
    end
  end
end
