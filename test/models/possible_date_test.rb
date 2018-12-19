require 'test_helper'

class PossibleDateTest < ActiveSupport::TestCase

  test "候補日自体が存在し、予約がないときは true を返す" do
    assert PossibleDate.vacants(PossibleDate.find_by(possible_date: "2018-10-25 11:00").id)
  end

  test "そもそも候補日自体が存在しないときは false を返す" do
    assert_not PossibleDate.vacants("2001-01-01 00:00")
  end

  test "候補日自体は存在するが先約があるときは false を返す" do
    assert_not PossibleDate.vacants(PossibleDate.find_by(possible_date: "2018-10-25 10:00").id)
  end

end
