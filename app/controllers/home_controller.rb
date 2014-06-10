class HomeController < ApplicationController
  def splash
    @page = 'splash'
  end

  def index
    @page = 'home'
  end

  def about
    @page = 'about'
  end

  def contact
    @page = 'contact'
  end

  def projects
    @page = 'projects'
  end

  def team
    @page = 'team'
  end
end
