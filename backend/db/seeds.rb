# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require 'pry'
#

task1 = Task.create!(:desc => "1st desc", :time => "7:00 am" , :completed => false)
task2 = Task.create!(:desc => "2nd desc", :time => "9:30 am" , :completed => false)
task3 = Task.create!(:desc => "3rd desc", :time => "11:00 am" , :completed => false)
