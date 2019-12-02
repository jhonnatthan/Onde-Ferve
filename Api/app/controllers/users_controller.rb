class UsersController < ApplicationController
  before_action :authorize_request, except: :create
  before_action :find_user, except: %i[create index]

  # GET /users
  def index
    @users = User.all
    render json: { data: @users, message: 'Usuário listados com sucesso', error: false }
  end

  # GET /users/{username}
  def show
    render json: { data: @user, message: "Usuário exibido com sucesso", error: false }
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: { data: @user, message: 'Usuário criado com sucesso', error: false }
    else
      render json: { data: @user.errors.full_messages, message: 'Erro ao criar usuário', error: true }
    end
  end

  # PUT /users/{username}
  def update
    if @user.update(user_params)
        render json: { data: @user, message: 'Usuário atualizado com sucesso', error: false }
    else
        render json: { data: @user.errors.full_messages, message: 'Erro ao atualizar o usuário', error: true }
    end
  end

  # DELETE /users/{username}
  def destroy
    @user.destroy
  end

  private

  def find_user
    @user = User.find_by_id!(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { data: nil, message: "Usuário não encontrado", error: true }
  end

  def user_params
    params.permit(
      :name, :username, :email, :password, :password_confirmation, :user
    )
  end
end
