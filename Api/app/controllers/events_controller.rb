class EventsController < ApplicationController
    before_action :authorize_request
    before_action :find_event, except: %i[create index destroy]

    # GET /events
    def index
        @events = Event.all();

        @events = @events.map do |event_record|
            event_record.as_json.tap do |event|
                @confirmations = Confirmation.select('users.id, users.name').joins(:user).where(event_id: event_record.id);
                event[:confirmations] = @confirmations;
            end
        end

        render json: { data: @events, message: 'Eventos listados com sucesso', error: false }
    end

    # GET /events/{id}
    def show
        render json: { data: @event, message: "Evento exibido com sucesso", error: false }
    end

    # POST /events
    def create
        @event = Event.new(event_params)
        if @event.save
            render json: { data: @event, message: 'Evento criado com sucesso', error: false }
        else
            render json: { data: @event.errors.full_messages, message: 'Erro ao criar Evento', error: true }
        end
    end

    # PUT /events/{id}
    def update
        if @event.update(event_params)
            render json: { data: @event, message: 'Evento atualizado com sucesso', error: false }
        else
            render json: { data: @event.errors.full_messages, message: 'Erro ao atualizar o evento', error: true }
        end
    end

    # DELETE /events/{id}
    def destroy
        @event = Event.find_by_id!(params[:id])
        @confirmations = Confirmation.where(event_id: @event.id)
        @confirmations.destroy_all
        @event.destroy

        render json: { data: nil, message: 'Evento deletado com sucesso', error: false }
    rescue ActiveRecord::RecordNotFound
        render json: { data: nil, message: "Evento não encontrado", error: true }
    end

    private

    def find_event
        @event = Event.where('events.id', '=', params[:id]).first

        @event = @event.as_json.tap do |event|
            @confirmations = Confirmation.select('users.id, users.name').joins(:user).where(event_id: @event.id);
            event[:confirmations] = @confirmations;
        end
    rescue ActiveRecord::RecordNotFound
        render json: { data: nil, message: "Evento não encontrado", error: true }
    end

    def event_params
        params.permit(
            :name, :location, :description, :date, :banner, :lat, :lng
        )
    end
end
