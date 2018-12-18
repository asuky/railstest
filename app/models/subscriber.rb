class Subscriber < ApplicationRecord
    belongs_to :possible_date
    validates :name, presence: true
    # varcher(255) と utf8mb4 なので、 255/4 の 64文字が限界
    validates :name, length: { maximum: 64 }

    validates :mailaddr, presence: true

    validates :tel, presence: true
end
