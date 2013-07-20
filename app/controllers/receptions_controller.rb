# coding: utf-8
class ReceptionsController < ApplicationController

  def create
    @reception = Reception.new(params[:reception])
    if @reception.save
      UserMailer.mail_reception(@reception, 'Запись на прием').deliver
      #format.html { redirect_to(:root, :notice => "Ваше сообщение отправлено!") }
      flash[:notice] = 'Ваше сообщение отправлено!'
    else
      flash[:error] = 'Что-то пошло не так. Ваше сообщение не отправлено!'
      #format.html { redirect_to(:root, @) }
    end

    redirect_to root_path
  end

end
