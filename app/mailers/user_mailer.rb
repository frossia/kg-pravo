# coding: utf-8
class UserMailer < ActionMailer::Base
  default from: "info@kg-pravo.ru"
  @@mailto = 'frossiacsb@gmail.com'

  def mail_reception(reception, subject)
    @mail_r = reception
    mail(to: @@mailto,
         subject: subject) do |format|
      format.html { render 'user_mailer/reception_mail_template' }
    end
  end

  def mail_call(call, subject)
    @mail_call = call
    mail(to: @@mailto,
         subject: subject) do |format|
      format.html { render 'user_mailer/call_mail_template' }
    end
  end

end
