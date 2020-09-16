import { Injectable } from '@angular/core';
import { GraphQLClient, gql } from 'graphql-request';
import { BehaviorSubject } from 'rxjs';
import { CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})

/** 
Fetch Total count for pagination.
**/

export class PaginationService {
  private graphQLClient: GraphQLClient = new GraphQLClient(CONSTANTS.ENDPOINT);
  public paginationRes: BehaviorSubject<any> = new BehaviorSubject({});
  private searchKey:String = null;

  constructor() { }

  async fetchPaginationData(query) {
      this.graphQLClient.request(query).then(
        (response) => {
          this.paginationRes.next(response);
        },(err) => { 
          //Error
        }
      );
    }

    buildPaginationQuery({searchKey=this.searchKey}) {
      let queryString = '';
      if(searchKey){
        queryString+= 'find: { mission_name: "'+searchKey+'"}';
      }
      // console.log(queryString);
      return this.getPaginationQueryObject(queryString);
    }  

    private getPaginationQueryObject(queryString){
      if(!queryString){
        return gql`query {          
          launchesPast {
              id
          }
        }`;
      } else {
        return gql`query {
            launchesPast (`+queryString+`){
              id
            }
          }`;
      }
    }  
}
