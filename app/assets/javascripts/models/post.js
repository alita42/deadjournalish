var Post = Backbone.Model.extend({
  defaults: {
    user_id: 1
    title: "This is a prefab post."
    content: "Lavender lipstick is ROCKIN."
  }
})

newPost: function(defaults){
  return this.collection.create(defaults);
}
