import { TwitterClientInterface } from "./client";

const twitterClientPlugin = {
    name: "twitter",
    description: "Twitter client",
    clients: [TwitterClientInterface],
};
export default twitterClientPlugin;
