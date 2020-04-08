class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :desc
      t.string :time
      t.boolean :completed
     end
  end
end
