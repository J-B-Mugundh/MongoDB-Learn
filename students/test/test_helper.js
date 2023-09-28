const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/students_test", {useNewUrlParser: true});

mongoose.connection
    .once("open", () => console.log("We are connected"))
    .on("error", (error) => {
        console.warn("An error occurred", error)
    } )

beforeEach((done) => {
        mongoose.connection.collections.students.drop();
        done(); // to indicate that cleaning is over and mocha can now continue
})