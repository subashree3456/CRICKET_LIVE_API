//  youtube const API_KEY = "qZnM0O90ToIjBiq9GvT9382";
import { useTheme } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';

 // const API_KEY = "05f886e2-9752-42e1-8b05-32877f54059a";  // good api

 // my zumen const API_KEY = "56b2a4d00cmsha5fb61e74808873p1a98a4jsnc1ea9e30ea26";

export const getMatches = async () => {
  // const axios = require('axios');

  return {
    "results": [
      {
        "away": {
          "code": "KXI",
          "id": 101748,
          "name": "Kings XI Punjab"
        },
        "date": "2020-09-20T14:00:00+00:00",
        "home": {
          "code": "",
          "id": 120252,
          "name": "Delhi Capitals"
        },
        "id": 2432999,
        "match_subtitle": "2nd Match",
        "match_title": "Delhi Capitals v Kings XI Punjab at Dubai International Cricket Stadium (night), T20.",
        "result": "Match tied (Delhi Capitals won the one-over eliminator)",
        "series_id": 608,
        "status": "Complete",
        "venue": "Dubai International Cricket Stadium (night)"
      },
      {
        "away": {
          "code": "",
          "id": 120789,
          "name": "Sussex"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120804,
          "name": "Essex"
        },
        "id": 2415585,
        "match_subtitle": "South Group",
        "match_title": "Essex v Sussex at County Ground, Chelmsford, T20.",
        "result": "Sussex won by 4 wickets",
        "series_id": 606,
        "status": "Complete",
        "venue": "County Ground, Chelmsford"
      },
      {
        "away": {
          "code": "",
          "id": 120792,
          "name": "Middlesex"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120795,
          "name": "Hampshire"
        },
        "id": 2415573,
        "match_subtitle": "South Group",
        "match_title": "Hampshire v Middlesex at The Rose Bowl, Southampton, T20.",
        "result": "Hampshire won by 20 runs",
        "series_id": 606,
        "status": "Complete",
        "venue": "The Rose Bowl, Southampton"
      },
      {
        "away": {
          "code": "",
          "id": 120762,
          "name": "Somerset"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120801,
          "name": "Gloucestershire"
        },
        "id": 2415587,
        "match_subtitle": "Central Group",
        "match_title": "Gloucestershire v Somerset at County Ground, Bristol, T20.",
        "result": "Gloucs won by 2 wickets",
        "series_id": 606,
        "status": "Complete",
        "venue": "County Ground, Bristol"
      },
      {
        "away": {
          "code": "",
          "id": 120798,
          "name": "Northamptonshire"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120780,
          "name": "Birmingham Bears"
        },
        "id": 2415575,
        "match_subtitle": "Central Group",
        "match_title": "Birmingham Bears v Northamptonshire at Edgbaston, Birmingham, T20.",
        "result": "Northants won by 3 wickets",
        "series_id": 606,
        "status": "Complete",
        "venue": "Edgbaston, Birmingham"
      },
      {
        "away": {
          "code": "",
          "id": 120783,
          "name": "Glamorgan"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120765,
          "name": "Worcestershire"
        },
        "id": 2415577,
        "match_subtitle": "Central Group",
        "match_title": "Worcestershire v Glamorgan at County Ground, New Road, Worcester, T20.",
        "result": "Glamorgan won by 6 wickets",
        "series_id": 606,
        "status": "Complete",
        "venue": "County Ground, New Road, Worcester"
      },
      {
        "away": {
          "code": "",
          "id": 120777,
          "name": "Yorkshire"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120771,
          "name": "Derbyshire"
        },
        "id": 2415579,
        "match_subtitle": "North Group",
        "match_title": "Derbyshire v Yorkshire at Headingley, Leeds, T20.",
        "result": "Yorkshire won by 6 wickets",
        "series_id": 606,
        "status": "Complete",
        "venue": "Headingley, Leeds"
      },
      {
        "away": {
          "code": "",
          "id": 120774,
          "name": "Leicestershire"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120759,
          "name": "Lancashire"
        },
        "id": 2415581,
        "match_subtitle": "North Group",
        "match_title": "Lancashire v Leicestershire at Old Trafford, Manchester, T20.",
        "result": "Leics won by 22 runs",
        "series_id": 606,
        "status": "Complete",
        "venue": "Old Trafford, Manchester"
      },
      {
        "away": {
          "code": "",
          "id": 120768,
          "name": "Durham"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120756,
          "name": "Nottinghamshire"
        },
        "id": 2415583,
        "match_subtitle": "North Group",
        "match_title": "Nottinghamshire v Durham at Trent Bridge, Nottingham, T20.",
        "result": "Notts won by 18 runs",
        "series_id": 606,
        "status": "Complete",
        "venue": "Trent Bridge, Nottingham"
      },
      {
        "away": {
          "code": "",
          "id": 120786,
          "name": "Kent"
        },
        "date": "2020-09-20T12:00:00+00:00",
        "home": {
          "code": "",
          "id": 120807,
          "name": "Surrey"
        },
        "id": 2415571,
        "match_subtitle": "South Group",
        "match_title": "Surrey v Kent at Kennington Oval, London, T20.",
        "result": "Surrey won by 6 wickets",
        "series_id": 606,
        "status": "Complete",
        "venue": "Kennington Oval, London"
      }
    ]
  }

  const options = {
    method: 'GET',
    url: 'https://cricket-live-data.p.rapidapi.com/results-by-date/2020-09-20',
    headers: {
      'X-RapidAPI-Key': 'fbfc73ef6emshe52d8d5d26d247cp16a3dajsn1679aa15b697',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }

  };


  //get the score of the cuurent match

// export const getMatchDetail = async (id) => {
//   const API_KEY = "56b2a4d00cmsha5fb61e74808873p1a98a4jsnc1ea9e30ea26";
//   const options = {
//     method: 'GET',
//     url: `https://cricket-live-data.p.rapidapi.com/results-by-date/2020-09-20?apikey=${API_KEY}&id=${id}`,
//     headers: {
//       'X-RapidAPI-Key': '56b2a4d00cmsha5fb61e74808873p1a98a4jsnc1ea9e30ea26',
//       'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
//     }
//   };
  
//   try {
//     const response = await axios(options);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   } 

// };




export const getMatchDetail = async (id) => {

 
  console.log("from api", id);
 // console.log(data);

//   return {
    
//   "results": {
//     "fixture": {
//       "id": 2432999,
//       "match_title": "Delhi Capitals v Kings XI Punjab at Dubai International Cricket Stadium (night), T20.",
//       "start_date": "2020-09-20T14:00:00+00:00",      
//     },
//     "live_details": {
//       "match_summary": {
//         "status": "Match tied (Delhi Capitals won the one-over eliminator)",
//         },     
//     }
//   }
  

// }

  // const API_KEY = "56b2a4d00cmsha5fb61e74808873p1a98a4jsnc1ea9e30ea26";
  //const url = `https://cricket-live-data.p.rapidapi.com/results-by-date/2020-09-20?id=${id}&apikey=${API_KEY}`;

  // const url = `https://cricket-live-data.p.rapidapi.com/results-by-date/2020-09-20?id=${id}`;

  const options = {
    method: 'GET',
    url: `https://cricket-live-data.p.rapidapi.com/match/${id}`,
    headers: {
      'X-RapidAPI-Key': 'fbfc73ef6emshe52d8d5d26d247cp16a3dajsn1679aa15b697',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
  };
  console.log(options.url);
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
  
//   console.log("url" , url);
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// };