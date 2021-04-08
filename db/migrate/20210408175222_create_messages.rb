class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|

      t.string :content, null: false
      t.integer :parent_comment_id
      t.integer :sender_id, null: false
      t.integer :channel_dms_id
      
      t.timestamps

    end
  end
end
