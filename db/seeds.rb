# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create([
  { 
    name: "Powkins",
    image_url: "https://images.unsplash.com/photo-1549545931-59bf067af9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
  }, 
  { 
    name: "Meouzikins",
    image_url: "https://images.unsplash.com/photo-1618924217601-502b99239681?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
  },
  { 
    name: "Purrifer",
    image_url: "https://images.unsplash.com/photo-1616186504179-1210a7666202?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" 
  }, 
  { 
    name: "Moustachioo",
    image_url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" 
  }, 
  { 
    name: "Cattifer",
    image_url: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80" 
  }, 
  { 
    name: "Tailwind",
    image_url: "https://images.unsplash.com/photo-1529933037705-0d537317ae7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80" 
  }
]);

cat = Cat.first;
cat.reviews.createcat.reviews.create([
  {
    title: 'cool cat',
    description:'I had fun with this cool, crazy cat',
    score: 5
  },
  {
    title: 'Evil',
    description:'Maaan, this cat is evil. Knocked down all my random glasses I had laying around',
    score: 1
  }
  ]);