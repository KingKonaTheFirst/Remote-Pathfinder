import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $first: String!
    $last: String!
    $email: String!
    $password: String!
  ) {
    createUser(first: $first, last: $last, email: $email, password: $password) {
      token
      user {
        email
        first
        last
        password
        phone
        savedjobs {
          benefits
          description
          employerId
          employment_type
          location
          pay
          title
          _id
        }
        _id
      }
    }
  }
`;

export const CREATE_EMPLOYER = gql`
  mutation CreateEmployer(
    $employer_name: String!
    $email: String!
    $password: String!
    $address: AddressInput
    $industry: String!
    $size: String!
  ) {
    createEmployer(
      employer_name: $employer_name
      email: $email
      password: $password
      address: $address
      industry: $industry
      size: $size
    ) {
      token
      employer {
        _id
        employer_name
        email
        address
        industry
        size
        jobs {
          _id
          title
          pay
          employment_type
          description
          location
          benefits
          employerId
        }
      }
    }
  }
`;

export const USER_LOGIN = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      user {
        _id
        first
        last
        email
        phone
        skills
        savedjobs {
          _id
          title
          pay
          employment_type
          description
          location
          benefits
          employerId
        }
      }
    }
  }
`;

export const EMPLOYER_LOGIN = gql`
  mutation EmployerLogin($email: String!, $password: String!) {
    employerLogin(email: $email, password: $password) {
      token
      employer {
        _id
        employer_name
        email
        address
        industry
        size
        jobs {
          _id
          title
          pay
          employment_type
          description
          location
          benefits
          employerId
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser(
    $userId: ID!
    $first: String
    $last: String
    $email: String
    $password: String
    $phone: String
    $skills: [String]
  ) {
    updateUser(
      userId: $userId
      first: $first
      last: $last
      email: $email
      password: $password
      phone: $phone
      skills: $skills
    ) {
      _id
      first
      last
      email
      phone
      skills
      savedjobs {
        _id
        title
        pay
        employment_type
        description
        location
        benefits
        employerId
      }
    }
  }
`;

export const UPDATE_EMPLOYER = gql`
  mutation UpdateEmployer(
    $employerId: ID!
    $employer_name: String
    $email: String
    $password: String
    $address: AddressInput
    $industry: String
    $size: String
  ) {
    updateEmployer(
      employerId: $employerId
      employer_name: $employer_name
      email: $email
      password: $password
      address: $address
      industry: $industry
      size: $size
    ) {
      _id
      employer_name
      email
      password
      address
      industry
      size
      jobs {
        _id
        title
        pay
        employment_type
        description
        location
        benefits
        employerId
      }
    }
  }
`;

export const SAVE_JOB = gql`
  mutation SaveJob($userId: ID!, $jobId: ID!) {
    saveJob(userId: $userId, jobId: $jobId) {
      _id
      first
      last
      email
      phone
      skills
      savedjobs {
        _id
        title
        pay
        employment_type
        description
        location
        benefits
        employerId
      }
    }
  }
`;

export const UNSAVE_JOB = gql`
  mutation UnsaveJob($userId: ID!, $jobId: ID!) {
    unsaveJob(userId: $userId, jobId: $jobId) {
      _id
      first
      last
      email
      phone
      skills
      savedjobs {
        _id
        title
        pay
        employment_type
        description
        location
        benefits
        employerId
      }
    }
  }
`;

export const CREATE_JOB = gql`
  mutation CreateJob(
    $title: String!
    $pay: Float!
    $employment_type: String!
    $description: String!
    $location: String!
    $benefits: String!
    $employerId: ID!
  ) {
    createJob(
      title: $title
      pay: $pay
      employment_type: $employment_type
      description: $description
      location: $location
      benefits: $benefits
      employerId: $employerId
    ) {
      _id
      title
      pay
      employment_type
      description
      location
      benefits
      employerId
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation UpdateJob(
    $jobId: ID!
    $title: String
    $pay: Float
    $employment_type: String
    $description: String
    $location: String
    $benefits: String
  ) {
    updateJob(
      jobId: $jobId
      title: $title
      pay: $pay
      employment_type: $employment_type
      description: $description
      location: $location
      benefits: $benefits
    ) {
      _id
      title
      pay
      employment_type
      description
      location
      benefits
      employerId
    }
  }
`;
