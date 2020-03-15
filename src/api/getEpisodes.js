import axios from 'axios';

// abstracting, the retrieval that was originally put in the App js that will retrieve the data that will be used by the application

export const getEpisodes = () => {

    return axios // need to figure out why a return statement is being used for this call
     .get( "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes" )
     .then ( res => res) // I am pretty sure this function will just return the response to where it is being called. it's probably why the return statement is being used
     .catch( error => error)
}