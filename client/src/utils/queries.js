// bring in graphQL
import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    {
        user {
            first
            last
            email
            phone
            skills
            expected_pay
            savedjobs {
                _id
                title
                pay
                employment_type
                description
                location
                benefits
            }
        }
    }
`;

export const QUERY_ALL_JOBS = gql`
    {
        
    }
`;