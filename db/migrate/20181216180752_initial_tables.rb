class InitialTables < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.timestamps
    end

    create_table :subscribers do |t|
      t.belongs_to :possible_date, index: true
      t.string :name
      t.string :mailaddr
      t.string :tel
      t.timestamps
    end

    create_table :possible_dates do |t|
      t.belongs_to :reservation, index: true
      t.datetime :possible_date
      t.timestamps
    end
  end
end
