require('dotenv').config();

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Database connected!")).catch(err => console.log(err));;

const { Schema } = mongoose;

const fieldsSchema = new Schema({
    fieldName: {type: String, required: true, unique: true},
    fieldType: {type: String, enum: ['string', 'int', 'date'], required: true},
    fieldDefault: {type: Schema.Types.Mixed},
    fieldParent: {type: String},
    fieldMockType: {type: String, enum: ['firstName', 'lastName', 'email', 'phoneNumber']}
})

const layoutSchema = new Schema({
    name: { type: String, required: true },
    fields: [fieldsSchema]
});

module.exports =  mongoose.model('Layout', layoutSchema);