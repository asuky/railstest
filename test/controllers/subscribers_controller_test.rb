require 'test_helper'

class SubscribersControllerTest < ActionDispatch::IntegrationTest
  
  test "正常なリクエスト" do
    post subscribers_url, params: { subscriber: { possible_date_id: possible_dates(:possible_date_data2).id ,name: "テスト", mailaddr: "test@test", tel: "0120-444-444" } }
    assert_response :success
  end
end
