// Lets see what the brain retained from the types typesscript lesson

type Library ={
  name: string;
  address: string;
  numberOfBooks: number;
  type: TypeOfLibrary
  books: Book[];
  genres: string[];
  members: MemberType[];
}

type Book = {
  title: string;
  page: number;
  isbn: string
}

type TypeOfLibrary = 'Public' | 'Private' | 'School' | 'Special'

// type ListOfGenres = [...string[]]

const booktypes = ['Fantasy', 'Adventure', 'Romance', 'Mystery', 'Horror', 'Thriller', 'Young Adult', 'Historical Fiction', 'Science Fiction', 'Non-Fiction', 'Biography', 'Autobiography', 'Poetry', 'Children']

type MemberType = {
  name: string;
  phone: string;
  //below was done wrong as it should have had an index signature so the type could have as many keys as a sting with value of a sting
  // email?: string;
  [key: string]: string;
}

const library: Library = {
  name: 'New York Library',
  address: 'New York',
  numberOfBooks: 100,
  type: 'Public',
  books: [
    {
      title: 'Harry Potter',
      page: 200,
      isbn: '123456789'
    },
    {
      title: 'Lord of the Rings',
      page: 300,
      isbn: '987654321'
    }
  ],
  genres: booktypes,
  members: [
    {
      name: 'John',
      phone: '1234567890',
      email: ''
    },
    {
      name: 'Jane',
      phone: '9876543210',
      email: 'yahoo@yaoo.com',
      bestFriend: 'John',
      dogsName: 'Rover',
    }
  ]
}
