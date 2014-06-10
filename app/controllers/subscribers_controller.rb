class SubscribersController < ApplicationController
	def index
		@subscribers = Subscriber.all
	end

	def new

	end

	def create
		@subscriber = Subscriber.new(params[:subscriber_params])
  		@subscriber.save
  		redirect_to "/home/index"
	end

	def show
		@subscriber = Subscriber.find(params[:id])
	end

	private
	  def subscriber_params
	    params.require(:subscriber).permit(:email)
	  end
end
