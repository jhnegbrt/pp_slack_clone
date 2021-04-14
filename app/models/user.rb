class User < ApplicationRecord

  has_many(
    :messages,
    class_name: "Message",
    foreign_key: :sender_id,
    primary_key: :id
  ) 

  has_many(
    :created_threads,
    class_name: "ChannelDm",
    foreign_key: :creator_id,
    primary_key: :id
  )

  has_many(
    :user_channel_dms,
    class_name: "UserChannelDm",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many :channel_dms, through: :user_channel_dms, source: :channel_dm

  validates :password_digest, presence: true
  validates :username, presence: true, uniqueness: true
  validates :session_token, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end