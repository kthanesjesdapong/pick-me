const searchQuery = `
    query search($term: String!, $location: String!, $price: String!,$radius: Int!, $open_now: !Boolean, limit: Int! {
      search(
        term: $term,
        location: $location,
        price: $price,
        radius: $Int,
        open_now: $open_now,
        limit: Int! 
      ) {
      total
      business {
        name
        rating
        review_count
        hours {
          is_open_now
          open {
            start
            end
            day
          }
        }
        location {
          address1
          city
          state
          country
        }
        coordinates {
            latitude
            longitude
          }
      }
    }
  }`;

module.exports = { searchQuery };
