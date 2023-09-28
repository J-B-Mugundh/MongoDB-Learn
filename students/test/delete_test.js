const assert = require("assert");
const Student = require("../src/student");

describe("Delete the records", () => {
    let jason, rosa;

    beforeEach((done) => {
        jason = new Student({name: 'Jason'})
        rosa = new Student({name: 'Rosa'})
        rosa.save()
        jason.save() // Make sure to await the save operation
        .then(() => done())

    });

    it('Delete by id', done => {
        Student.findByIdAndDelete(jason._id)
        .then(() => Student.findOne({name: 'Jason'}))
        .then((student) => {
            assert(student === null)
            done(); // Call 'done()' to complete the test
        })
    })
    

    it('Delete by name', done => {
        Student.findByIdAndDelete(jason._id)
        .then(() => Student.findOne({_id: jason._id}))
        .then((student) => {
            assert(student === null)
            done();
        })
    })

    it('Delete Jason', done => {
        Student.deleteOne({id: jason._id})
        .then(() => Student.findOne({name: 'Jason'}))
        .then((student) => {
            assert(student == null)
            done(); // Call 'done()' to complete the test
        })
    })
    
})