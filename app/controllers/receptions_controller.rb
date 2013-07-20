class ReceptionsController < ApplicationController

  def new

  end

  def create
    @reception = Reception.new(params[:reception])
    @reception.save
    UserMailer.mail_reception(@reception).deliver
    redirect_to root_path
  end

end
