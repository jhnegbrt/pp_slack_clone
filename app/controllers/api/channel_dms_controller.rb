class Api::ChannelDmsController < ApplicationController

  def index
    @channel_dms = ChannelDm.all
  end

  def show
    @channel_dm = ChannelDm.find(params[:id])
  end

  def create
    
    @channel_dm = ChannelDm.new(channel_dm_params)

    if @channel_dm.save
      render 'api/channel_dms/show'
    else
      render json: @channel_dm.errors.full_messages, status: 422
    end

  end

  def channel_dm_params
    params.require(:channel_dm).permit(:creator_id, :title, :channel, :private)
  end

end