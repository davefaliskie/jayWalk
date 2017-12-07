class AboutController < ApplicationController
  def show
    render template: "about/index"
  end
end
