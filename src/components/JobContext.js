import React from "react";

const JobContext = React.createContext();

const JobProvider = JobContext.Provider;
const JobConsumer = JobContext.Consumer;

export {JobConsumer, JobProvider};