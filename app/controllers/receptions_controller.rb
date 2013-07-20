# coding: utf-8
class ReceptionsController < ApplicationController

  def new

  end

  def create
    @reception = Reception.new(params[:reception])
    if @reception.save
      UserMailer.mail_reception(@reception).deliver
      #format.html { redirect_to(:root, :notice => "Ваше сообщение отправлено!") }
    else
      #format.html { redirect_to(:root, @) }
    end

    redirect_to root_path
  end

end
