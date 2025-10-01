const { connectDB, mongoose } = require('./connect');
const { books } = require('./Model/books');

async function runQueries() {
  try {
    await connectDB();
    console.log("Connected... Running queries...\n");

    // 1. Books in stock and published after 2010
    const inStockRecent = await books.find(
      { In_stock: "In_stock", published_year: { $gt: 2010 } },
      { title: 1, author: 1, price: 1, _id: 0 } 
    );
    console.log("In stock & published after 2010:", inStockRecent);

    // 2. Sorting by price ascending
    const priceAsc = await books.find({}, { title: 1, price: 1 }).sort({ price: 1 });
    console.log("\nBooks sorted by price ascending:", priceAsc);

    // 3. Sorting by price descending
    const priceDesc = await books.find({}, { title: 1, price: 1 }).sort({ price: -1 });
    console.log("\nBooks sorted by price descending:", priceDesc);

    // 4. Pagination (5 per page)
    const page = 2; // change page number here
    const perPage = 5;
    const paginatedBooks = await books.find()
      .skip((page - 1) * perPage)
      .limit(perPage);
    console.log(`\nBooks page ${page}:`, paginatedBooks);

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected.");
  }
}

runQueries();
