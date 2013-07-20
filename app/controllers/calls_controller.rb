# coding: utf-8
class CallsController < ApplicationController

  def create
    @call = Call.new(params[:call])
    if @call.save
      UserMailer.mail_call(@call, 'Просьба перезвонить').deliver
      flash[:notice] = 'Ваше сообщение отправлено!'
    else
      flash[:error] = 'Что-то пошло не так. Ваше сообщение не отправлено!'
    end

    redirect_to root_path
  end

end
