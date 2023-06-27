import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    tag: {
        type: String,
        required: [true, 'Type is required']
    },
    size: {
        width: {
            type: Number,
            required: [true, 'Width is required']
        },
        height: {
            type: Number,
            required: [true, 'Height is required']
        },
        depth: {
            type: Number,
            required: [true, 'Depth is required']
        }
    },
    color: {
        type: String,
    }
    ,
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    discount: {
        type: Number,
    },
    image: {
        source: {
            type: String
        },
        alt: {
            type: String
        }
    }
});

export default models.Product || model('Product', productSchema);