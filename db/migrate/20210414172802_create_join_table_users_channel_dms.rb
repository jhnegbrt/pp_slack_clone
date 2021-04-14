class CreateJoinTableUsersChannelDms < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :channel_dms do |t|
      t.index [:user_id, :channel_dm_id]
      t.index [:channel_dm_id, :user_id]
    end
  end
end
