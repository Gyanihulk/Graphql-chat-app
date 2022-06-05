import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  from,
  HttpLink
} from "@apollo/client";
import {onError} from "@apollo/client/link/error"

const errorLink=onError(({graphqlErrors,networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message,location,path})=>{
      console.log(`Graphql error ${message}`);
    });
  }
});
const link=from([
  errorLink, new HttpLink({uri:"http://localhost:4000"})
])

// const authLink=setContext((_,{header})=>{
//   return{
//     header:{
//       ...header,
//       authorization:localStorage.getItem('jwt')||"",
//     }
//   }
// })
const client = new ApolloClient({
  link:link,
  cache: new InMemoryCache()
});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <BrowserRouter>
    <ApolloProvider client={client}>
       <App />
    </ApolloProvider>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
