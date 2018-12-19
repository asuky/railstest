class SubscribersController < ApplicationController

    def create
        # POST された ID が空きかどうか調べる
        if PossibleDate.vacants(params[:subscriber][:possible_date_id]) then
            # 空きなら予約登録をする
            if (Subscriber.create(subscriber_params)) then
                # 成功したら 201
                head :created
            else
                # 失敗したら 500
                head :internal_server_error
            end
        else
            # 空きではないなら 403 を返す
            head :forbidden
        end
    end

    private 
        def subscriber_params
            params.require(:subscriber).permit(:possible_date_id, :name, :mailaddr, :tel)
        end
end
