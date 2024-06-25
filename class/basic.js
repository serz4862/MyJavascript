// how do you define class in javascript

/** A class has a type class and followed by the className and then a curly-bracket{}
 Once the class is define then we need to create an instances of the class and then we need to call the methods using the dot.

 */

class Library{
    static totalBooks = 0;
    constructor(name, location , dateJoined){
        this.name = name;
        this.location = location;
        this.dateJoined = dateJoined;
        this.books = [];  // Instance property to store books
    }
// Adding books into the self and count the number of books
    addBook(selfNo, bookName){
        const book = {selfNo, bookName} //shorthand property name.
        this.books.push(book);
        Library.totalBooks++;
        console.log(`Self ${selfNo} has ${bookName}`);
    }

// List all the books 
    listBooks(){
        console.log("Books in the library")
        this.books.forEach(book =>{
            console.log(`Shelf  ${book.selfNo} has ${book.bookName}`)
        })
    }
// getters of total books
    get totalBooks(){
        return Library.totalBooks;
    }

    static compareLibraries(lib1, lib2) {
        if (lib1.books.length > lib2.books.length) {
            return `${lib1.name} has more books than ${lib2.name}`;
        } else if (lib1.books.length < lib2.books.length) {
            return `${lib2.name} has more books than ${lib1.name}`;
        } else {
            return `${lib1.name} and ${lib2.name} have the same number of books`;
        }
    }
}

class digitalLibrary extends Library{
    constructor(name,location,dateJoined,url){
        super(name,location,dateJoined); // call the parent class constructor.
        this.url = url;
    }
    accessOnline() {
        console.log(`Access the library online at: ${this.url}`);
    }
}
const centralLibrary = new Library("Central Library", "Downtown", "2024-06-22");
const eastLibrary = new Library("East Library", "Uptown", "2024-06-22");

centralLibrary.addBook(5, "Harry Potter");
centralLibrary.addBook(6, "The Hobbit");
eastLibrary.addBook(7, "1984");

centralLibrary.listBooks();
eastLibrary.listBooks();

console.log(Library.compareLibraries(centralLibrary, eastLibrary));

const digitalLibrary1 = new digitalLibrary("Digital Library", "Online", "2024-06-22", "http://digitallibrary.com");
digitalLibrary1.addBook(8, "Digital Fortress");
digitalLibrary1.listBooks();
digitalLibrary1.accessOnline();

console.log(`Total books in all libraries: ${eastLibrary.totalBooks}`);