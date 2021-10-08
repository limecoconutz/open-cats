module Api
  module V1
    class CatsController < ApplicationController

      def index
        cats = Cat.all
        render json: CatSerializer.new(cats, options).serialized_json
      end

      def show
        cat = Cat.find_by(slug: params[:slug])
        render json: CatSerializer.new(cat, options).serialized_json
      end

      def create
        cat = Cat.new(cat_params)
        if cat.save
          render json: CatSerializer.new(cat, options).serialized_json
        else
          render json: {error: cat.errors.messages}, status: 422
        end
      end

      def update
        cat = Cat.find_by(slug: params[:slug])
        if cat.update(cat_params)
          render json: CatSerializer.new(cat, options).serialized_json        
        else
          render json: {error: cat.errors.messages}, status: 422
        end
      end

      def destroy
        cat = Cat.find_by(slug: params[:slug])
        if cat.destroy
          head :no_content
        else
          render json: {errors: cat.errors.messages}, status: 422
        end
      end

      private

      def cat_params
        params.require(:cat).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end

    end
  end
end
