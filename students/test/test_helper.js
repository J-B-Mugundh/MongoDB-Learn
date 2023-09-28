const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/students_test", {useNewUrlParser: true});

mongoose.connection
    .once("open", () => {
        console.log("We are connected")
    })
    .on("error", (error) => {
        console.warn("An error occurred", error)
    } )

beforeEach((done) => {
        mongoose.connection.collections.students.drop((err) => {
          if (err) {
            console.warn("An error occurred while dropping the collection", err);
          }
        done(); // Call 'done' after the drop operation is complete
    });
});
      