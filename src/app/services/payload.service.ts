import { Injectable } from '@angular/core';
import { GraphQLClient, gql } from 'graphql-request';
import { CONSTANTS } from '../constants';
import { BehaviorSubject } from 'rxjs';
import { LoaderService } from '../components/loading/loader.service';

@Injectable({
  providedIn: 'root',
})
export class PayloadService {
  private graphQLClient: GraphQLClient = new GraphQLClient(CONSTANTS.ENDPOINT);
  public responseObject: BehaviorSubject<any> = new BehaviorSubject({});
  private limit:Number = 10;
  private offset:Number = 0;
  private searchKey:String = null;

  constructor(private _loader: LoaderService) {}

  async fetchData(query) {
    this._loader.displayLoader.next(true);
    this.graphQLClient.request(query).then(
      (response) => {
        // console.log(response);
        this.responseObject.next(response);
        this._loader.displayLoader.next(false);
      },
      (err) => {
        this._loader.displayLoader.next(false);
      }
    );
  }

  buildQuery({limit=this.limit,offset=this.offset,searchKey=this.searchKey}) {
    let queryString = '';
    if(!searchKey){
      queryString+= "limit:"+limit+", offset:"+offset;
    } else {
      queryString+= 'limit:'+limit+', offset:'+offset+', find: { mission_name: "'+searchKey+'"}';
    }
    // console.log(queryString);
    return this.getQueryObject(queryString);
  }

  private getQueryObject(queryString){
    return gql`query {
            launchesPast (`+queryString+`){
              mission_name
              launch_date_local
              launch_site {
                site_name_long
              }
              links {
                article_link
                video_link
              }
              rocket {
                rocket_name
                first_stage {
                  cores {
                    flight
                    core {
                      reuse_count
                      status
                    }
                  }
                }
                second_stage {
                  payloads {
                    payload_type
                    payload_mass_kg
                    payload_mass_lbs
                  }
                }
              }
              ships {
                name
                home_port
                image
              }
              id
            }
          }`;
  }  
}
