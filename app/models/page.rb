class Page < ActiveRecord::Base
  attr_accessible :title, :body, :menu_title, :show_title
end
