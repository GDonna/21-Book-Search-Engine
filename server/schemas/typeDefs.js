const typeDefs = `
type User {
    _id: ID!
    email: String
    username: String!
    password: String!
    savedBooks: [Book]
}

type Query { 
    me: User
}

type Auth {
    token: ID!
    user: User
}

type Book {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;