import React from "react";


//you can pass the default value to contexts. In case of using default values, donot need to wrap the parent with provider
const UserContext= React.createContext("Sadaf");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer};

//you can also provide context to a specific component and then it can also use the context value
export default {UserContext};