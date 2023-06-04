import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const [referralId , setReferralId] = useState('')
  useEffect(() => {
      const { pathname, search } = location;
      const baseUrl = pathname.split("?")[0];
      const splitSearch= search.split("?token=")
      setReferralId(splitSearch?.[1])
    // history.replace(baseUrl);
    history.replace('/home')
}, []);

  return (
    <div>
      Login Page 
      {
        referralId && <div>Ref ID: {referralId}</div>
      }
      
    </div>
  );
};

export default Login;
