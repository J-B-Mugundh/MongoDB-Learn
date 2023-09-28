const assert = require("assert");
const Student = require("../src/student");

describe("Read the data", (done) => {
    let jason;

    beforeEach((done) => {
        jason = new Student({name: 'Jason'});
        jason.save()
        .then(() => done())
    })

    it("Find all Jasons", async () => {
        const students = await Student.find({name: 'Jason'})
        console.log(students);
        // assert(students[0]._id === jason._id) - This wont work, becoz it is enclosed with ObjectId. So, unless we convert it to string, it wont work
        assert(students[0]._id.toString() === jason._id.toString()) // We need to convert id to string in order to work
    })
})