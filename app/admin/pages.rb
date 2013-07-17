# coding: utf-8
ActiveAdmin.register Page do

  index do
    column :id
    column :title
    column :show_title

    default_actions
  end

  form(:html => { :multipart => true }) do |f|

    f.inputs do
      f.input :title, :label => 'Заголовок'
      f.input :menu_title, :label => 'Название в меню'
      f.input :show_title, :label => 'Показать в меню'
      f.input :body, :as => :ckeditor
    end

    f.actions

  end

  
end
