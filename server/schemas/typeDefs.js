const typeDefs = `

input AddressInput {
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
    address: String
    industry: String!
    size: String!
    jobs: [Job]
  }

  type Job {
    _id: ID!
    title: String!
    pay: Float!
    employment_type: String!
    description: String!
    location: String!
    benefits: String!
    employerId: ID!
  }

  type User {
    _id: ID!
    first: String!
    last: String!
    email: String!
    phone: String,
    skills: [String]
    savedjobs: [Job]
  }

  type Auth {
    token: ID!
    user: User
    employer: Employer
  }

  type Query {
    user(userId: ID!): User
    job(jobId: ID!): Job
    employer(employerId: ID!): Employer
    employers: [Employer]
    jobs: [Job]
  }

  type Mutation {
    createUser(first: String!, last: String!, email: String!, password: String!, phone: String, skills: [String]): Auth
    createEmployer(employer_name: String!, email: String!, password: String!, address: AddressInput, industry: String!, size: String!): Auth
    userLogin(email: String!, password: String!): Auth
    employerLogin(email: String!, password: String!): Auth
    updateUser(userId: ID!, first: String, last: String, email: String, password: String, phone: String, skills: [String]): User
    saveJob(userId: ID!, jobId: ID!): User
    unsaveJob(userId: ID!, jobId: ID!): User
    createJob(title: String!, pay: Float!, employment_type: String!, description: String!, location: String!, benefits: String!, employerId: ID!): Job
    updateJob(jobId: ID!, title: String, pay: Float, employment_type: String, description: String, location: String, benefits: String
      ): Job
    archiveJob(jobId: ID!): Job
  }
  `;

module.exports = typeDefs;
