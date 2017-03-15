require 'test_helper'

class MoodControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mood_index_url
    assert_response :success
  end

  test "should get show" do
    get mood_show_url
    assert_response :success
  end

end
