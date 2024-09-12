import db from "../db.js"

import Student from "./student_model.js";

const Schema = db.Schema;

const lockerSchema = new Schema ({
    height: {
        type: Number,
        required: true,
        min: 0,
    },
    width: {
        type: Number,
        required: true,
        min: 0,
    },
    length: {
        type: Number,
        required: true,
        min: 0,
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student"
    }
})

const Locker = db.model("Locker", lockerSchema);

const student = new Student({
    name: "Pedro",
    birthDate: "2000/10/10",
    zipCode: "88888888",
    email: "pedro@email.com"
})

student.save()

console.log(student);



const wardrobe = new Locker({
    height: 0.5,
    width: 0.3,
    length: 0.3,
    student: student._id
});

wardrobe.save();

console.log(wardrobe);

const find = async () => {
    return Locker.findById(wardrobe._id).populate("student");
}

const findWardrobe = await find();

console.log(findWardrobe);

export default Locker;