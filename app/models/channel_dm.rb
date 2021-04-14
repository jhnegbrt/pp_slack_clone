class ChannelDm < ApplicationRecord

  belongs_to(
    :creator,
    class_name: "User",
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many :messages

  has_many :user_channel_dms
  has_many :users, through => :user_channel_dms
  
end
