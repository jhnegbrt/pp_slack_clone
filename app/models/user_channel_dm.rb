class UserChannelDm < ApplicationRecord
  belongs_to :channel_dm
  belongs_to :user
end
