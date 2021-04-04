class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)
    if @user.nil?
      render json: ["Invalid Login Details!"], status: 404
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render :json ["No one is logged in!"], status: 404
    end

  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
