export { GET, POST } from "@/auth";


// localhost:3000/api/auth/*    -> get http method , post http method , put , delete


// ohhhhhhhhhhhhhhhhh got it 

// 1) next-auth wrote me the GET request handler and POST request handler which i have to write otherwise , it wrote me on behalf of this ............. Obviously i can make my own request handlers , but since it did everything , making it from scratch doesnt make sense 

// 2) in the route.js , we often write functions like this :-

// export async function GET(){

// }

// export async function POST(request){

// }

// in here , we are exporting GET , POST functions that handles the get , post method logic 

// so we just re-exported the GET , POST method given by auth.js(next auth global config file) which tells next.js that these are the handlers functions and any request comming to the corresponding path will be handled by these functions