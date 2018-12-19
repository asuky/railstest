class AddNotNull < ActiveRecord::Migration[5.2]
  def up
      change_column :subscribers, :name, :string, null: false, default: ""
      change_column :subscribers, :mailaddr, :string, null: false, default: ""
      change_column :subscribers, :tel, :string, null: false, default: ""
  end

  def down
    change_column :subscribers, :name, :string, null: true
    change_column :subscribers, :mailaddr, :string, null: true
    change_column :subscribers, :tel, :string, null: true
  end
end

