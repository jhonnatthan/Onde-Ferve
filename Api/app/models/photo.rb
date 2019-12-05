class Photo < ApplicationRecord
  belongs_to :event
  validates :url, presence: true
end
