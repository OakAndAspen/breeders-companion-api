export const BreederTypes = `#graphql
    type Breeder {
      id: ID
      owner: Person
      name: String
      affix: String
      website: String
      email: String
      phoneNumber: String
      country: String
      facebook: String
      facebookFollowers: Int
      instagram: String
      instagramFollowers: Int
      tiktok: String
      tiktokFollowers: Int
      youtube: String
      youtubeFollowers: Int
      comments: String
      litters: [Litter]
    }
    extend type Query {
      breeder(id: ID): Breeder
      breeders: [Breeder]
    }
    extend type Mutation {
      breederCreate(data: BreederCreateDataInput!): Breeder
      breederUpdate(data: BreederUpdateDataInput!, id: ID!): Breeder
      breederDelete(id: ID!): ID
    }
    input BreederCreateDataInput {
      owner: ID
      name: String
      affix: String
      website: String
      email: String
      phoneNumber: String
      country: String
      facebook: String
      facebookFollowers: Int
      instagram: String
      instagramFollowers: Int
      tiktok: String
      tiktokFollowers: Int
      youtube: String
      youtubeFollowers: Int
      comments: String
    }
    input BreederUpdateDataInput {
      owner: ID
      name: String
      affix: String
      website: String
      email: String
      phoneNumber: String
      country: String
      facebook: String
      facebookFollowers: Int
      instagram: String
      instagramFollowers: Int
      tiktok: String
      tiktokFollowers: Int
      youtube: String
      youtubeFollowers: Int
      comments: String
    }
`;
