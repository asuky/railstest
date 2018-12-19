# coding: utf-8
require 'test_helper'
require 'gimei'
require 'faker'

class SubscriberTest < ActiveSupport::TestCase

  test "すべて正常のときは通す" do
    gimei = Gimei.name
    subscriber = Subscriber.new(
      possible_date_id: 1,
      name: gimei.kanji,
      mailaddr: Faker::Internet.email,
      tel: "123-4567-8910"
    )
    assert subscriber.save, "すべて正常なケースなので通るはず"
  end

  test "名前が空文字のときは弾く" do
    subscriber = Subscriber.new(
      possible_date_id: 1,
      name: "",
      mailaddr: Faker::Internet.email,
      tel: "123-4567-8910"
    )
    assert_not subscriber.save, "name が空文字なので弾かれるはず"
  end


  test "名前が64文字ちょうどのときは通す" do
    subscriber = Subscriber.new(
      possible_date_id: 1,
      name: "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをんがぎぐげござじずぜぞだぢづでどば",
      mailaddr: Faker::Internet.email,
      tel: "123-4567-8910"
    )
    assert subscriber.save, "name が64文字なので通るはず"
  end

  test "nameが65文字以上のときは弾く" do
    subscriber = Subscriber.new(
      possible_date_id: 1,
      name: "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをんがぎぐげござじずぜぞだぢづでどばび",
      mailaddr: Faker::Internet.email,
      tel: "123-4567-8910"
    )
    assert_not subscriber.save, "name が65文字なので弾かれるはず"
  end

  test "メールアドレスが空のときは弾く" do
    gimei = Gimei.name
    subscriber = Subscriber.new(
      possible_date_id: 1,
      name: gimei.kanji,
      mailaddr: "",
      tel: "123-4567-8910"
    )
    assert_not subscriber.save, "メールアドレスが空のため弾かれるはず"
  end

  # メールアドレスの正しい正規表現は諸説あるが、
  # 少なくとも全角文字を許容するような環境は無いはず
  test "メールアドレスに全角文字が入っている場合は弾く" do
    gimei = Gimei.name
    subscriber = Subscriber.new(
      possible_date_id: 1,
      name: gimei.kanji,
      mailaddr: "日本語@ｇｍａｉｌ．ｃｏm",
      tel: "123-4567-8910"
    )
    assert_not subscriber.save, "メールアドレスに全角文字が含まれるので弾かれるはず"
  end

  test "電話番号が空のときは弾く" do
    gimei = Gimei.name
    subscriber = Subscriber.new(
      possible_date_id: 1,
      name: gimei.kanji,
      mailaddr: Faker::Internet.email,
      tel: ""
    )
    assert_not subscriber.save, "電話番号が空のため弾かれるはず"
  end

  test "電話番号に数字でもハイフンでもない文字が入っている場合は弾く" do
    gimei = Gimei.name
    subscriber = Subscriber.new(
      possible_date_id: 1,
      name: gimei.kanji,
      mailaddr: Faker::Internet.email,
      tel: "0l2O-8B8-9Z23"
    )
    assert_not subscriber.save, "電話番号に数字ハイフン以外が含まれるので弾かれるはず"
  end

end
