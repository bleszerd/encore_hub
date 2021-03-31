import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    Authors: [Author!]!
    Author: Author!
  }

  type Author {
    id: ID!
    name: String!
    username: String!
    photo: String!
    description: String!
    longDescription: String!
    color: String!
  }

  type Post {
    id: ID!
    title: String!
    author: Author!
    coverImage: String!
    publishDate: String!
    slug: String!
  }
`

const resolvers = {
  Query: {
    Author(_parent: any, args: any, context: any) {
      return {
        id: "45fdfd54fadf56asdf6s5",
        name: "Vinícius A. Resende",
        username: "bleszerd",
        photo: "https://avatars.githubusercontent.com/u/77847606?v=4",
        description: "Engenheiro de software e desenvolvedor web full stack.",
        longDescription: 'null',
        color: '#ffc916',
      }
    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/v1/graphql' })