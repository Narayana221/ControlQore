movies = [
    {
      "MovieName": "The Great Adventure",
      "ActorName": "John Smith",
      "ReleaseDate": "2023-01-15"
    },
    {
      "MovieName": "Mystery in the Woods",
      "ActorName": "Emily Johnson",
      "ReleaseDate": "2022-09-28"
    },
    {
      "MovieName": "Love and Destiny",
      "ActorName": "Michael Brown",
      "ReleaseDate": "2023-05-02"
    },
    {
      "MovieName": "City of Shadows",
      "ActorName": "Sophia Williams",
      "ReleaseDate": "2023-03-12"
    },
    {
      "MovieName": "The Last Stand",
      "ActorName": "William Davis",
      "ReleaseDate": "2022-11-07"
    },
    {
      "MovieName": "Echoes of Time",
      "ActorName": "Olivia Wilson",
      "ReleaseDate": "2022-12-19"
    }
  ]


  const movies_withdate = movies.map(x => ({...x,actual_date:new Date(x.ReleaseDate)}));
  console.log(movies_withdate);

  
// 1) List the movie name along with the actor name of those movies released in the year 2022
 
 let movies_2022 = movies_withdate.filter(x => x.actual_date.getFullYear() === 2022).map(({MovieName,ActorName}) => ({MovieName,ActorName}));
 console.log(movies_2022); 

 //2) List the movie names released in the year 2023 where the actor is William Davis.

 let movies_2023 = movies_withdate.filter(x => x.actual_date.getFullYear() === 2023 && x.ActorName === "William Davis" ).map(({MovieName}) => ({MovieName}));
 console.log(movies_2023); 

//3 Retrieve the Actor name and release date of the movie “The Last Stand”

 let last_stand = movies_withdate.filter(x => x.MovieName === "The Last Stand").map(({ActorName,ReleaseDate}) => ({ActorName,ReleaseDate}));
 console.log(last_stand); 

 //4) Check whether there is any movie in the list with actor name “John Doe”

 let is_johndoe = movies_withdate.some(x => x.ActorName === "John Doe");
 console.log(is_johndoe); 
 
 //5) Display the count of movies where the actor name is "Sophia Williams"

 let sophia = movies_withdate.filter(x => x.ActorName === "Sophia Williams");
 console.log(Object.keys(sophia).length); 

 //6 ) Insert an element 


movies_withdate.push({
    "MovieName": "The Final Stage",
    "ActorName": "John Doe",
    "ReleaseDate": "2022-08-11",
    "actual_date" : new Date("2022-08-11")
}
);
// console.log(movies);

//7) Check whether there exists any duplicate movie names present in the array

let hasDuplicates = movies_withdate.map(v => v.MovieName).length > new Set(movies.map(v => v.MovieName)).size ? true : false;
console.log(hasDuplicates);

//8) Create a new array starting from the movie "City of Shadows"

let new_movies = movies_withdate.slice(3);
console.log(new_movies);

//9) List the distinct actor names in array

let actor_names = movies_withdate.map(x => x.ActorName);
console.log(actor_names);

let distinct_actor_names = actor_names.filter((value,index,array) => {return index === array.indexOf(value)});
console.log(distinct_actor_names);

// //10 Insert an element 
// 		{
//             "MovieName": "Rich & Poor",
//             "ActorName": "Johnie Walker",
//             "ReleaseDate": "2023-08-11"
//       }
// as next element to movie “Love and Destiny”

movies_withdate.splice(2,0,{
    "MovieName": "Rich & Poor",
    "ActorName": "Johnie Walker",
    "ReleaseDate": "2023-08-11",
     "actual_date" : new Date("2023-08-11")
}

 )

console.log(movies_withdate);
 
//11) Display the count of distinct actor names in array

 actor_names = movies_withdate.map(x => x.ActorName);
console.log(actor_names);
//

distinct_actor_names = actor_names.filter((value,index,array) => {return index === array.indexOf(value)});
console.log(distinct_actor_names.length);

//12) Remove the movie named  "The Last Stand"

let index = movies_withdate.findIndex(x => x.MovieName === "The Last Stand");
let removed_movies = movies_withdate.splice(index,1);
console.log(movies_withdate);

//13 Check whether all the movies are released after 2021 Dec 31

let is_after_2022 = movies_withdate.every(x => x.ReleaseDate > "2021-12-31");
console.log(is_after_2022);

//14 Update movie named  "City of Shadows" ‘s release date as  "2023-03-13"

movies_withdate[(movies_withdate.findIndex(x => x.MovieName === "City of Shadows"))].ReleaseDate = "2023-03-13";

//15 Create a new array of movie names whose movie name length is greater than 10.

let movie_length_10 = movies_withdate.filter(x => x.MovieName.length > 10).map(x => x.MovieName);
console.log(movie_length_10);
console.log(movie_length_10[2]);
