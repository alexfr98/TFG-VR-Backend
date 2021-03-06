const mongoose = require("mongoose");
const dataLevelSchema = new mongoose.Schema({
  chefLevel: {type: Number},
  waiterLevel: {type: Number},
  waiterExp: {type: Number},
  chefExp: {type: Number},
  totalExp: { type: Number },
  allOrdersChef: { type: Number },
  basicOrdersChef: { type: Number },
  conditionalOrdersChef: { type: Number },
  conditionalIfOrdersChef: { type: Number },
  conditionalIfElseOrdersChef: { type: Number },
  iterativeOrdersChef: { type: Number },
  allOrdersWaiter:{type: Number},
  basicOrdersWaiter: { type: Number },
  conditionalOrdersWaiter: { type: Number },
  conditionalIfOrdersWaiter: { type: Number },
  conditionalIfElseOrdersWaiter: { type: Number },
  iterativeOrdersWaiter: { type: Number },
});

const achievementsSchema = new mongoose.Schema({
  firstOrderChef: { type: Boolean, default: false },
  tenOrdersChef: { type: Boolean, default: false },
  twentyfiveOrdersChef: { type: Boolean, default: false },
  fiftyOrdersChef: { type: Boolean, default: false },
  hundredOrdersChef: { type: Boolean, default: false },

  firstBasicOrderChef: { type: Boolean, default: false },
  tenBasicOrderChef: { type: Boolean, default: false },
  twentyfiveBasicOrdersChef: { type: Boolean, default: false },
  fiftyBasicOrdersChef: { type: Boolean, default: false },

  firstConditionalOrderChef: { type: Boolean, default: false },
  tenConditionalOrdersChef: { type: Boolean, default: false }, 
  twentyfiveConditionalOrderChef: { type: Boolean, default: false },
  fiftyConditionalOrdersChef: { type: Boolean, default: false },

  firstConditionalIfOrderChef: { type: Boolean, default: false },
  tenConditionalIfOrdersChef: { type: Boolean, default: false }, 
  thirtyConditionalIfOrdersChef: { type: Boolean, default: false },

  firstConditionalIfElseOrderChef: { type: Boolean, default: false },
  tenConditionalIfElseOrdersChef: { type: Boolean, default: false },
  thirtyConditionalIfElseOrdersChef: { type: Boolean, default: false },

  firstIterativeOrderChef: { type: Boolean, default: false },
  tenIterativeOrdersChef: { type: Boolean, default: false },
  thirtyIterativeOrdersChef: { type: Boolean, default: false },

  firstOrderWaiter: { type: Boolean, default: false },
  tenOrdersWaiter: { type: Boolean, default: false },
  twentyfiveOrdersWaiter: { type: Boolean, default: false },
  fiftyOrdersWaiter: { type: Boolean, default: false },
  hundredOrdersWaiter: { type: Boolean, default: false },

  firstBasicOrderWaiter: { type: Boolean, default: false },
  tenBasicOrdersWaiter: { type: Boolean, default: false },
  twentyfiveBasicOrdersWaiter: { type: Boolean, default: false },
  fiftyBasicOrdersWaiter: { type: Boolean, default: false },

  firstConditionalOrderWaiter: { type: Boolean, default: false },
  tenConditionalOrdersWaiter: { type: Boolean, default: false }, 
  twentyfiveConditionalOrdersWaiter: { type: Boolean, default: false },
  fiftyConditionalOrdersWaiter: { type: Boolean, default: false },

  firstConditionalIfOrderWaiter: { type: Boolean, default: false },
  tenConditionalIfOrdersWaiter: { type: Boolean, default: false },
  thirtyConditionalIfOrdersWaiter: { type: Boolean, default: false },
  
  firstConditionalIfElseOrderWaiter: { type: Boolean, default: false },
  tenConditionalIfElseOrdersWaiter: { type: Boolean, default: false },
  thirtyConditionalIfElseOrdersWaiter: { type: Boolean, default: false },

  firstIterativeOrderWaiter: { type: Boolean, default: false },
  tenIterativeOrdersWaiter: { type: Boolean, default: false },
  thirtyIterativeOrdersWaiter: { type: Boolean, default: false },
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  password: { type: String, required: true },
  currentDay: { type: Number, default: 1 },
  dataLevel: { type: dataLevelSchema },
  achievements: { type: achievementsSchema },
  tutorialChefCompleted: { type: Boolean, default: false },
  tutorialWaiterCompleted: {type: Boolean, default: false},
  volume: {type: String, default: "1.0"},
  dataCollection: {type: String, default: "Data collection starts: "},
});

mongoose.model("User", UserSchema);
