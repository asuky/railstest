# coding: utf-8
require 'faker'

Faker::Config.locale = :ja

Reservation.seed do |s|
    s.id = 1
    s.name = "あいかわ美容院"
    s.description = Faker::Commerce.product_name
    s.created_at = Faker::Date.backward(21)
    s.updated_at = Faker::Date.backward(3)
end

Reservation.seed do |s|
    s.id = 2
    s.name = "うえだ歯科"
    s.description = Faker::Commerce.product_name
    s.created_at = Faker::Date.backward(21)
    s.updated_at = Faker::Date.backward(3)
end

Reservation.seed do |s|
    s.id = 3
    s.name = "おかざわマッサージ"
    s.description = Faker::Commerce.product_name
    s.created_at = Faker::Date.backward(21)
    s.updated_at = Faker::Date.backward(3)
end

5.times {
    PossibleDate.seed do |s|
        s.reservation = Reservation.find_by(name: "あいかわ美容院")
        s.possible_date = Faker::Date.forward(10)
        s.created_at = Faker::Date.backward(10)
        s.updated_at = Time.zone.now
    end
}

5.times {
    PossibleDate.seed do |s|
        s.reservation = Reservation.find_by(name: "うえだ歯科")
        s.possible_date = Faker::Date.forward(10)
        s.created_at = Faker::Date.backward(10)
        s.updated_at = Time.zone.now
    end
}

5.times {
    PossibleDate.seed do |s|
        s.reservation = Reservation.find_by(name: "おかざわマッサージ")
        s.possible_date = Faker::Date.forward(10)
        s.created_at = Faker::Date.backward(10)
        s.updated_at = Time.zone.now
    end
}