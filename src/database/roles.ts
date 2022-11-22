//Esquema para Roles
import mongoose from 'mongoose';

const {Schema} = mongoose;

const RoleSchema = new Schema(
    {
        name: {
            type: String,
            reuqired: true,
        },
        permisions: {
            type: Array,
            //enum: ['CREATE', 'EDIT', 'DELETE', 'SEARCH'],
            //default: 'SEARCH',
            },
        isDeleted:{
            type: Boolean,
            default: false,
        }
    },
    {
        collection: 'roles',
        versionKey: false,
    }
);

const Role = mongoose.model('Role', RoleSchema);

export default Role;