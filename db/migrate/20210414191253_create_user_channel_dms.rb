class CreateUserChannelDms < ActiveRecord::Migration[5.2]
  def change
    create_table :user_channel_dms do |t|
      t.references :channel_dm, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
