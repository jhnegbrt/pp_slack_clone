class UserChannelDm < ApplicationRecord

  belongs_to :user
  belongs_to :channel_dm

end
