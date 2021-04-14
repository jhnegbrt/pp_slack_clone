class ChannelDm < ApplicationRecord

  belongs_to(
    :creator,
    class_name: "User",
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many(
    :messages,
    class_name: "Message",
    foreign_key: :channel_dms_id,
    primary_key: :id
  ) 

  has_many(
    :user_channel_dms,
    class_name: "UserChannelDm",
    foreign_key: :channel_dm_id,
    primary_key: :id
  )
  has_many :users, through: :user_channel_dms, source: :user
  
end
