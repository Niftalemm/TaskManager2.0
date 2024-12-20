import mongoose from "mongoose";

const productSchema = new mongoose.Schema({ // create a new schema
    name:{
        type: String,
        required: true
    },
    price:
    {
        type: Number,
        required: true
    },
    Image:{
        type: String,
        required: true
    },
},{
    timestamps: true // this will automatically add the createdAt and updatedAt fields
});

const Product = mongoose.model('Product', productSchema);


export default Product; // export the model to use it in other files