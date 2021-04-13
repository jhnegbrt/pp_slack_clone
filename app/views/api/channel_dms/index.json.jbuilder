@channel_dms.each do |channel_dm|
  json.set! channel_dm.id do
    json.partial! 'channel_dm', channel_dm: channel_dm
  end
end