class Reception < ActiveRecord::Base
  attr_accessible :name, :contact, :rtime, :body
  validates :name, :contact, :rtime, presence: true
end
