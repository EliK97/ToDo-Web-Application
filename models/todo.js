const todoSchema = new Schema({
    
    nowShowing: { type: Boolean, default: false },
    
    todoList: [todoListSchema]
  }, {
    timestamps: true
  });
  


const todoListSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    completed: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    }
  }, {
    timestamps: true
  });

