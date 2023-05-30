import { CharacterEntityApi, EndPoint } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from '../../../core/api/graphql-client';

interface CharacterCollectionRequest{
  characters: EndPoint;
}
export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = gql`query{
    characters{
      info{
        count
        pages
        next
        prev
      }
      results{
        id
        name
        status
        species
        type
        gender
        origin{name}
        location{name}
        image
        episode{episode}
        created
      }
    }
  }`
  const response = await graphQLClient.request<CharacterCollectionRequest>(query);
  return response.characters.results;
};

