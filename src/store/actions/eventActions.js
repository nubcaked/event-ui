export const fetchEvents = (params = []) => {
  console.log(JSON.stringify(params));
  let url = "http://localhost:8080/events?filter[location]=London";
  params.forEach(s => url += "&" + s);
  if (url.includes('filter[category]')) {
    url += '&sort=category,-startTime'
  } else {
    url += '&sort=-startTime'
  }

  return dispatch => {
    // fetch("http://localhost:8080/events?filter[location]=London&filter[category]=animals,art,books,business&filter[date]=2019080100-2020092700&sort=category,-startTime")
    fetch(url)
      .then(res => res.json())
      .then(res => { 
        console.log(res)
        dispatch({
          type: 'FETCH_EVENTS_SUCCESS',
          data: res.data
        })
      },
      (error) => {
        console.log(error);
      });
  }
}