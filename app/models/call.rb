class Call < ActiveRecord::Base
  attr_accessible :name,:call_time, :body
  validates :name, :call_time, presence: true
end
