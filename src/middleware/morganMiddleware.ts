import morgan, { StreamOptions } from "morgan";

import config from "config";

import Logger from "../../config/logger";

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log.
const stream: StreamOptions = {
  // Use the http severity
  write: (message) => Logger.http(message),
};


const skip = () => {
  const env = config.get<string>("env") || "development";
  return env !== "development";
};

// Build the morgan middleware
const morganMiddleware = morgan(
  
  ":method :url :status :res[content-length] - :response-time ms",
 
  { stream, skip }
);

export default morganMiddleware;