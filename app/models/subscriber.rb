class Subscriber < ApplicationRecord
    belongs_to :possible_date
    validates :name, presence: true

    # 一旦 max を 64 文字とする
    # 最長は mysql の index の都合上191文字
    validates :name, length: { maximum: 64 }
    validates :mailaddr, presence: true
    validates :tel, presence: true

end
