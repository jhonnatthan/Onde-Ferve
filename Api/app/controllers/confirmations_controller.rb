class ConfirmationsController < ApplicationController
    before_action :authorize_request
    before_action :find_event, only: %i[create]
    before_action :find_confirmation, only: %i[show destroy]

    # POST /confirmations
    def create
        @confirmation = Confirmation.where(event_id: @event.id).where(user_id: @current_user.id).first
        unless @confirmation
            @confirmation = Confirmation.new(event_id: @event.id, user_id: @current_user.id)
            if @confirmation.save
                render json: { data: @confirmation, message: 'Presença confirmada com sucesso', error: false }
            else
                render json: { data: @confirmation.errors.full_messages, message: 'Erro ao confirmar presença', error: true }
            end
        else
            render json: { data: @confirmation, message: 'Você já confirmou presença neste evento', error: true }
        end
    end
    
    # GET /confirmations/{event_id}
    def show
        render json: { data: @confirmation, message: 'Presença exibida com sucesso', error: false }
    end

    # DELETE /confirmations/{id}
    def destroy
        @tmpConfirmation = @confirmation;
        if @confirmation.destroy
            render json: { data: @tmpConfirmation, message: 'Presença removida com sucesso', error: false }
        else
            render json: { data: @confirmation.errors.full_messages, message: 'Falha ao remover presença', error: true }
        end
    end

    private

    def find_confirmation
        @confirmation = Confirmation.where(event_id: params[:event_id]).where(user_id: @current_user.id).first
    rescue ActiveRecord::RecordNotFound
        render json: { data: nil, message: "Presença não confirmada", error: true }
    end

    def find_event
        @event = Event.find_by_id!(params[:event_id])
    rescue ActiveRecord::RecordNotFound
        render json: { data: nil, message: "Evento não encontrado", error: true }
    end

end
