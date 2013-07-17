class AddColumnToPage < ActiveRecord::Migration
  def change
    add_column :pages, :menu_title, :string
    add_column :pages, :show_title, :boolean , default: true
  end
end
