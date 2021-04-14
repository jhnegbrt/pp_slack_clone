class Message < ApplicationRecord
  validates :content, presence: true

  belongs_to(
    :sender,
    class_name: "User",
    foreign_key: :sender_id,
    primary_key: :id
  )

  belongs_to: channel_dm

end
