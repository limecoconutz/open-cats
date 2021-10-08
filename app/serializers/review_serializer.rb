class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :cat_id
end
