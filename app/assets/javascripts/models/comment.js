var Comment = Backbone.Models.extend({
  defaults: {
    user_id: 1,
    title: "This is what it sounds like",
    content: "When doves cry"
  }

})

newComment: function(defaults) {
  return this.collection.create(defaults);
}
