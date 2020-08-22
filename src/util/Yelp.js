const apiKey = 'LVpPpc8gXEjPbz13IiYUzZX5YFuCFrNNxZX3nkfXpVr20zXOZ0lddii9BrdSj7bqLOEItqXBn-O4FcQahpd-a7oTjnBjV29V6t_rH2oVOWdSS1GyDO4t3yweYTdBX3Yx';

const Yelp = {

}

search(term, location, sortBy) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`)
}