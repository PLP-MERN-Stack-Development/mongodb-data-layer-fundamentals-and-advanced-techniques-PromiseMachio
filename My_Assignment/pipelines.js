async function runAggregations() {
  try {
    await connectDB();

    // 1. Average price by genre
    const avgPrice = await books.aggregate([
      {
        $group: {
          _id: "$genre",
          avgPrice: { $avg: { $toDouble: { $replaceAll: { input: "$price", find: "Ksh ", replacement: "" } } } }
        }
      }
    ]);
    console.log("\nAverage price by genre:", avgPrice);

    // 2. Author with the most books
    const topAuthor = await books.aggregate([
      { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
      { $sort: { totalBooks: -1 } },
      { $limit: 1 }
    ]);
    console.log("\nAuthor with most books:", topAuthor);

    // 3. Books grouped by decade
    const byDecade = await books.aggregate([
      {
        $group: {
          _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    console.log("\nBooks grouped by decade:", byDecade);

  } catch (err) {
    console.error("Error in aggregation:", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

runAggregations();
