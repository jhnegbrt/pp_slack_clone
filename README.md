# Welcome to Sleuth

[Live Link](https://sleuth-jwe.herokuapp.com/#/)

Sleuth is a web-app clone of the popular messaging app Slack, highlighting web-sockets technology and the ability to send and receive messages in real-time. This application was build for educational purposes as a part of App Academy's Software Engineering bootcamp. Please read on for details on features, code-snippets, and pictures of Sleuth live in action!

## Table of contents:
 1. [Features](#features)
    - [User-authentication](#user-auth)
    - [Channel browsing](#channel-browsing)
    - [Live Messaging](#live-messaging)
    - [Live Thread Creation](#live-thread-creation)
    - [Workspace Search](#workspace-search)
 2. [Tech Stack](#tech-stack])
    - [Backend](#backend)
    - [Frontend](#frontend)
 3. [Known Bugs](#known-bugs)
 4. [Upcoming Features](#upcoming-features)

# Features

## User Auth

Sleuth uses a back-end user authentication model. Each user entry in the database holds a session_token which is used to set and match a randomly generated key stored inside the browsers session storage.

```ruby
# app/controllers/application_controller.rb

  # set the browsers session storage to log in user
  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end

# app/models/user.rb

  # create a secure key as the session_token
  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
```
 
To Log in and Sign up users, Sleuth uses a combination of backend and frontend error handling. Specifically, client side error handling is used to confirm requirements such as matching passwords, while the backend handles username uniqueness.

Errors rendered from the backend:

```ruby
# app/controllers/api/users_controller.rb
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

```
![backend_errors](app/assets/images/user_auth_errors_1.PNG)

Errors rendered from the frontend:

```javascript

// frontend/components/session_form/session_form.jsx

  handleSubmit(e){
    e.preventDefault();
    if (this.props.formType === "signup" && this.passwordsMatch() === false){
      this.setState({
        errors: ["Passwords must match!"]
      })
    } else {
      const user = {password: this.state.password, username: this.state.username}
      this.props.processForm(user);
    }
  }

 
```
![frontend_errors](app/assets/images/user_auth_errors_2.PNG)

## Channel Browsing

## Live Messaging

## Live Thread Creation

## Workspace Search

Users are able to use the search function to find Public Channels (which they do not already belong to), other users, and active [threads](#note-on-threads)*

# Tech Stack

## Backend

## Frontend

# Known Bugs

# Upcoming Features

### *note on threads*
In reviewing this code base you will see the terms `thread`, `channel`/`publicChannel`, `directMessage` and `channel_dm` in numerous places and seemingly used interchangeably. But, it is important to disambiguate each of these terms. `channel_dm` refers to the backend storage of any frontend `thread`. `channel` refers to any publicly available "chat room" whereas `directMessage` refers to any "chat room" between a specified group of users that cannot be found or joined by others. There are instances where the distinction between `publicChannel` and `directMessage` is meaninginless, and in these cases `thread` is used. e.g. `ThreadIndex`. To further clarify, an initial design decision was made such that although there is a distinction between `directMessages` and `channels` on the front end, they are stored within the same `channel_dm` table in the backend.
