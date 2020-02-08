import React, {useEffect} from 'react';

const RequireAuth = (auth, history) => {

    const Component = ChildComponent => {
    return <ChildComponent auth={auth} history={history} />;
    }
    return Component;
  };

export default RequireAuth;