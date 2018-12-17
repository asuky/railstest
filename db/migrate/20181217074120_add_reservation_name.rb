class AddReservationName < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :name, :string
    add_column :reservations, :description, :text, :limit => 4294967295
  end
end
