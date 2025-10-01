const {connectDB, mongoose} = require('./connect');
const { book, books } = require('./Model/books');

async function main() {
    try{
        console.log("Connecting to MongoDB...");
        await connectDB();

        console.log("Deleting data ");
        await books.deleteMany({});

        console.log('Inserting data...');

        await books.insertMany([
            {
                title: 'Trust',
                author: 'Hernan Diaz',
                genre: 'Fiction',
                price: 'Ksh 1500',
                In_stock: "In_stock",
                published_year: 2022,
                pages: '402 pages',
                publisher: 'Riverhead Books',

            },

            {
                title: 'North Woods',
                author: 'Daniel Mason',
                genre: 'Reality',
                price: 'Ksh 1670',
                In_stock: "In_stock",
                published_year: 2023,
                pages: '372 pages',
                publisher: 'Random House',

            },

            {
                title: 'Playground',
                author: 'Richard Powers',
                genre: 'Fiction',
                price: 'Ksh 2000',
                In_stock: "In_stock",
                published_year: 2024,
                pages: '500 pages',
                publisher:'W. W. Norton & Company' ,

            },

            {
                title: 'Creation Lake',
                author: 'Rachel Kushner',
                genre: 'Inspirational',
                price: 'Ksh 1800',
                In_stock:"Out_of_stock" ,
                published_year: 2020,
                pages: '419 pages',
                publisher: 'Scribner',

            },

            {
                title: 'Held',
                author: 'Anne Micheals',
                genre: 'Inspirational',
                price: 'Ksh 1200',
                In_stock: "In_stock",
                published_year: 2020,
                pages: '250 pages',
                publisher: ' McClelland & Stewart',

            },

            {
                title: 'Wild House' ,
                author: 'Colin Barrett',
                genre: 'Fiction',
                price: 'Ksh 1020',
                In_stock: "In_stock",
                published_year: 2024,
                pages: '272 pages',
                publisher: 'Grove Press',


            },
            {
                title: 'Headshot',
                author: 'Rita Bullwinkel',
                genre: 'Reality',
                price: 'Ksh 800',
                In_stock: "In_stock",
                published_year: 2024,
                pages: '274 pages',
                publisher: 'Viking',

            },
            {
                title: 'Stone yard devotional',
                author: 'Charlotte Wood',
                genre: 'Inspirational',
                price: 'Ksh 1600',
                In_stock: "Out_of_stock",
                published_year: 2023,
                pages: '300 pages',
                publisher: 'Allen & Unwin',

            },
            {
                title: 'Loved one',
                author: 'Aisha Muharrar',
                genre: 'Romance',
                price: 'Ksh 1100',
                In_stock: "In_stock",
                published_year: 2024,
                pages: '402 pages',
                publisher: 'Vikings',

            },

            {
                title: 'Heart the lover',
                author: 'Lily King',
                genre: 'Romance',
                price: 'Ksh 1500',
                In_stock: "In_stock",
                published_year: 2024,
                pages: '232 pages',
                publisher:  'Grove Press',

            },
            {
                title: 'Life, and Death, and Giants',
                author: 'Ron Rindo',
                genre: 'Inspirational',
                price: 'Ksh 1100',
                In_stock: "In_stock",
                published_year: 2023,
                pages: '200 pages',
                publisher: "St. Martin's Press",

            },

            {
                title: 'The Girl in the Green Dress',
                author: 'Mariah Fredericks',
                genre: 'Fiction',
                price: 'Ksh 1330',
                In_stock: "Out_of_stock",
                published_year: 2020,
                pages: '330 pages',
                publisher: 'Minotaur Books',

            },


            {
                title: 'The Last Assignment',
                author: 'Erika Robuck',
                genre: 'Reality',
                price: 'Ksh 1800',
                In_stock: "In_stock",
                published_year: 2020,
                pages: '340 pages',
                publisher: 'Sourcebooks Landmark',

            }


        ]);
        console.log("Data updated successfully!!")

    }catch (err){
        console.error('Error occured',err.message);
    }finally{
        await mongoose.disconnect();
        console.log('Disconnect from MongoDB')
    }
    
}

main();