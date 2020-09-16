export interface Launches {
  launchesPast: {
    mission_name: String;
    launch_date_local: String;
    launch_site: {
      site_name_long: String;
    };
    links : {
      article_link: String;
      video_link: String;
    }
    rocket: {
      rocket_name: String;
      first_stage: {
        cores: Array<Core>;
      }
      second_stage: {
        payloads: Array<Payload>;
      }
    }
    ships: Array<Ship>;  
    id : String;
    }
  }
  
  interface Core {
    flight : Number;
    core: {
      reuse_count: Number;
      status: String;
    }
  }

  interface Payload {
    payload_type: String;
    payload_mass_kg: Number;
    payload_mass_lbs: Number;
  }

  interface Ship {
    name: String;
    home_port: String;
    image: String;
  }