class CreateChannelDms < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_dms do |t|

      t.boolean :channel, null: false
      t.boolean :private, null: false
      t.string :title, null: false
      t.integer :creator_id

      t.timestamps
    end

    add_index :channel_dms, :creator_id
  end
end
