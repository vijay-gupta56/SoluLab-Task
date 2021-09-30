const username = process.env.DB_USER;
const password = process.env.DB_PASS;

module.exports = {
  url:
    "mongodb+srv://" +
    username +
    ":" +
    password +
    "@cluster0.yaips.mongodb.net/solulab-task-db?retryWrites=true&w=majority",
};
