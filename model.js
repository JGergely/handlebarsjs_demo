var data = {
   "hotels" : [{
      "name" : "New York City Hotel",
      "description" : "Our hotel is great",
      "phone" : "+1-212-555-1234",
      "price" : 200,
      "discount" : 20,
      "amenities" : true,
      "image" : "hotel2.jpg"
   }, {
      "name" : "Manhattan Awesome Hotel",
      "description" : "Our hotel has a great view to the Central Park",
      "phone" : "+1-212-555-1234",
      "price" : 100,
      "amenities" : true,
      "image" : "hotel1.jpg"
   }, {
      "name" : "Brooklyn Hotel",
      "description" : "Our hotel has a great view to Manhattan",
      "phone" : "+1-212-555-1234",
      "price" : 300,
      "discount" : 10,
      "amenities" : true,
      "image" : "hotel3.jpg"
   }, {
      "name" : "Queens Hotel",
      "description" : "Our hotel has a great view",
      "phone" : "+1-212-555-1234",
      "price" : 400,
      "amenities" : false,
      "image" : "hotel4.jpg"
}]};

Handlebars.registerHelper('discountedPrice', function(hotel){
    return hotel.price * (100 - hotel.discount)/100;
});