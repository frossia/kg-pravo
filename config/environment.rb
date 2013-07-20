#encoding: utf-8

# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
KgPravo::Application.initialize!

ActionMailer::Base.delivery_method = :smtp

Time::DATE_FORMATS[:ru_datetime] = "%Y.%m.%d в %k:%M:%S"