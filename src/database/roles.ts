//Esquema para Roles
import { ERolePermisions } from '../models/IRole';
import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        permisions: {
            type: [String],
            enum: Object.values(ERolePermisions),
            required: true
        },
        isDeleted: {
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