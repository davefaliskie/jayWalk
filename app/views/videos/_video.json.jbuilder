json.extract! video, :id, :title, :iframe, :created_at, :updated_at
json.url video_url(video, format: :json)
