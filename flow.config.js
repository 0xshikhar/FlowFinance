import { config } from "@onflow/fcl";
require('dotenv').config()
import './'

config({
  "app.detail.title": "Flow Finance",
  "app.detail.icon": "https://shikhar.xyz/wp-content/uploads/2023/07/flowfi-logo.png",
  "accessNode.api": process.env.ACCESS_NODE_API, // Mainnet: "https://rest-mainnet.onflow.org"
  "discovery.wallet": process.env.DISCOVERY_WALLET// Mainnet: "https://fcl-discovery.onflow.org/authn"
})


