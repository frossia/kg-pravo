# coding: utf-8
class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :set_locale, :menu

  private

  def set_locale
    I18n.locale = params[:locale] if params[:locale]
  end

  def menu
    @contact = Page.where(:menu_title => 'Контакты').first
    @pages_all = Page.all
  end

end
