class Event < ApplicationRecord
  attr_accessor :confirmations
  validates :name, presence: true
  validates :location, presence: true
  validates :description, presence: true
  validates :date, presence: true
  validates :lat, presence: true
  validates :lng, presence: true
  has_many :confirmation
end
