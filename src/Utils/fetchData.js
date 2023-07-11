export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    ,
    'X-RapidAPI-Key': '19c9d7d724msh98b1ca9db5f009dp104b8ejsn99efcfd46bbb'
  },
};
export const youtubeOptions ={
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19c9d7d724msh98b1ca9db5f009dp104b8ejsn99efcfd46bbb',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};
export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
 

  return data;
};
  