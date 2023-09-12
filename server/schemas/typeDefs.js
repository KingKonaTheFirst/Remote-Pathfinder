const typeDefs = `

type Address {
    street: String
    city: String
    state: String
    postalCode: String
  }
  
  type Employer {
    _id: ID!
    employer_name: String!
    email: String!
    password: String!
    address: Address
    industry: String!
    size: String!
  }

  type Job {
    _id: ID!
    title: String!
    pay: Float!
    employment_type: String!
    description: String!
    location: String!
    benefits: String!
  }

  // NEED TO ADD PASSWORD
  type User {
    _id: ID!
    first: String!
    last: String!
    email: String!
    phone: String,
    skills: [String]
  }

  type Auth {
    token: ID!
    user: User
    employer: Employer
  }

  type Query {
    user(userId: ID!): User
    employer(employerId: ID!): Employer
    jobs: [Job]
  }

  type mutation {
    createUser(first: String!, last: String!, email: String!, password: String!, phone: String, skills: [String]): Auth
    createEmployer(employer_name: String!, address: AddressInput!, industry: String!, size: String!): Employer
    userLogin(email: String!, password: String!): Auth
    employerLogin(email: String!, password: String!): Auth
    updateUser(first: String, last: String, email: String, password: String, phone: String, skills: [String]): User
    saveJob(userId: ID!, jobId: ID!): User
    unsaveJob(userId: ID!, jobId: ID!): User
    createJob(title: String!, pay: Number!, employment_type: String!, description: String!, location: String!, benefits: String!): Job
    updateJob(jobId: ID!, title: String, pay: Float, employment_type: String, description: String, location: String, benefits: String
      ): Job
    archiveJob(jobId: ID!): Job
  }
  `;

module.exports = typeDefs;
