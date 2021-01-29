import React, { useState } from "react";
import Search from "../algolia/Search";
import { GoogleLogin } from "react-google-login";
import config from "../../config";
import {UserProvider} from '../../context/context';
export default function Index() {
  const [data, setData] = useState(false);
  const [userid, setUserid] = useState('');
  const responseGoogle = (response) => {
    console.log(response.profileObj.email);
    console.log(config.updateGoogleDataApi);
    const obj = {};
    obj.access_token = response.tokenObj.access_token;
    obj.userid = response.profileObj.email;
    fetch(config.updateGoogleDataApi, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    setUserid(response.profileObj.email);
    setData(true);
  };
  return (
    
    <div>
      {data ? (
        <UserProvider value={userid}>
          <Search />
        </UserProvider>
      ) : (
        <GoogleLogin
          className="button"
          clientId={config.googleClientId}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          scope={config.googleDriveScope}
          cookiePolicy={"single_host_origin"}
        />
      )}
      <br></br>
      
    </div>
  );
}
