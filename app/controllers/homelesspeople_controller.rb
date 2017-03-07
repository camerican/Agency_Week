class HomelesspeopleController < ApplicationController
  def create
    @homeless = Homelesspeople.create(
      user_id: 1,
      lat: params[:x],
      long: params[:y]
    ).to_json
  end
end
