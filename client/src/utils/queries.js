// Bring in GraphQL
import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query GetUser($userId: ID!) {
    user(userId: $userId) {
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

export const QUERY_JOB = gql`
  query GetJob($jobId: ID!) {
    job(jobId: $jobId) {
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

export const QUERY_EMPLOYER = gql`
  query GetEmployer($employerId: ID!) {
    employer(employerId: $employerId) {
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

export const QUERY_JOBS = gql`
  query GetAllJobs {
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
`;

export const QUERY_EMPLOYERS = gql`
  query GetAllEmployers {
    employers {
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
