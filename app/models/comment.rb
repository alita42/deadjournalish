class Comment < ActiveRecord::Base
  belongs_to :Post
  belongs_to :user
  
end
