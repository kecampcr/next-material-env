import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import * as React from "react";
import Copyright from "../src/Copyright";
import ProTip from "../src/ProTip";
import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
// Will only be available on the server-side
console.log(JSON.stringify(publicRuntimeConfig, null, 4))
// Will be available on both server-side and client-side
console.log(JSON.stringify(serverRuntimeConfig,null,4))

const { processEnv } = publicRuntimeConfig

export function getServerSideProps() {
  console.log("\ngetServerSideProps begin");
  console.log(process.env.SECRET);
  console.log("getServerSideProps end\n");
  return {
    props: {
      aveEndpoint: process.env.AVE_ENDPOINT,
      aveVersion: process.env.AVE_VERSION,
      hostname: process.env.HOSTNAME,
      keycloakUrl: process.env.KEYCLOAK_URL,
      keycloakRealm: process.env.KEYCLOAK_REALM,
      keycloakClientId: process.env.KEYCLOAK_CLIENTID,
      secret: process.env.SECRET,
    },
  };
}
export default function Index(props: any) {
  console.log("INSIDE INDEX: ", processEnv )
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <div>
          1.4
          <pre>RUNTIME{JSON.stringify(processEnv, null, 4)}</pre>
          <pre>PROPS{JSON.stringify(props, null, 4)}</pre>
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
