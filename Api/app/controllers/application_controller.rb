class ApplicationController < ActionController::API
  def welcome
    render json: { data: nil, message: 'Bem vindo a API do Onde Ferve', error: false }
  end

  def not_found
    render json: { data: nil, messsage: 'Rota não encontrada', error: true }
  end

  def authorize_request
    header = request.headers["Authorization"]
    header = header.split(" ").last if header
    begin
      @decoded = JsonWebToken.decode(header)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
