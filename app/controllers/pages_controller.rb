class PagesController < ApplicationController
  def index
  end

  def projects
    @projects = Project.all

    render json: {data: @projects}
  end
end
