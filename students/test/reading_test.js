const assert = require("assert");
const Student = require("../src/student");

describe("Read the data", () => {
    let jason, jason2;

    beforeEach((done) => {
        jason = new Student({name: 'Jason'})
        jason.save() // Make sure to await the save operation
        jason2 = new Student({name: 'Jason'})
        jason2.save() // Make sure to await the save operation
        .then(() => done())

        console.log(jason);
        console.log(jason2);
    });

    // it("Find all Jasons", async () => {
    //     const students = await Student.find({name: 'Jason'});
    //     console.log(students);
    //     // Need to check why previous records are not getting deleted when i read
    //     console.log('students[1]._id:', students[1]._id);
    //     console.log('jason._id:', jason._id);
    //     assert(students[1]._id.toString() === jason._id.toString()); // Convert both _id values to strings for comparison
    // });

    it("Find one of the jasons", async () => {
        const students = await Student.findOne({_id: jason._id});
        console.log(students);
        assert(students.name === 'Jason')
    })
});
