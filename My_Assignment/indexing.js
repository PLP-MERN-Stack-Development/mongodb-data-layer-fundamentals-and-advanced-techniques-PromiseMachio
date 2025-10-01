const {connectDB, mongoose} = require('./connect');
const { books } = require('./Model/books')

async function runIndexes() {
  try {
    await connectDB();

    // 1. Index on title
    await books.collection.createIndex({ title: 1 });
    console.log("Index created on title.");

    // 2. Compound index on author + published_year
    await books.collection.createIndex({ author: 1, published_year: -1 });
    console.log("Compound index created on author + published_year.");

    // 3. Explain query with index
    const explainResult = await books.find({ title: "Trust" }).explain("executionStats");
    console.log("\nExplain stats for title search:", explainResult.executionStats);

  } catch (err) {
    console.error("Index error:", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

runIndexes();
