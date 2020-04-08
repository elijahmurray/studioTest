class TaskController < ApplicationController

    def get_tasks
        render json: Task.all
    end
    
end
