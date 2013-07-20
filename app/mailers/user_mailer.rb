# coding: utf-8
class UserMailer < ActionMailer::Base
  default from: "info@kg-pravo.ru"

  def mail_reception(reception)
    @mail_r = reception
    mail(to: 'frossiacsb@gmail.com',
         subject: 'Запись на прием') do |format|
      format.html { render 'user_mailer/reception_mail_template' }
    end
  end

end
