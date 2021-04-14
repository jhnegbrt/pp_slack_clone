class Message < ApplicationRecord
  validates :content, presence: true

  belongs_to(
    :sender,
    class_name: "User",
    foreign_key: :sender_id,
    primary_key: :id
  )

  belongs_to(
    :channel_dm,
    class_name: "ChannelDm",
    foreign_key: :channel_dms_id,
    primary_key: :id
  ) 

end


