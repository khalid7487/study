import { useEffect } from "react";

import { useHistory, useLocation } from 'react-router-dom';

const ReferralLink = () => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { pathname,  search} = location;
    console.log(location, search)
    const baseUrl = pathname.split("?")[0];

    history.replace(baseUrl);
  }, []);

  return null;
};

export default ReferralLink;
