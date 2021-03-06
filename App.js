import "gun/lib/mobile";
import PolyfillCrypto from "react-native-webview-crypto";
import "react-native-get-random-values";
import React from "react";
import AppContainer from "./src/components/AppContainer";
import Main from "./src/screens/Main";
// import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";

export default function App() {
	return (
		<AppContainer>
			<PolyfillCrypto />
			<Main />
		</AppContainer>
	);
}
// // serviceWorkerRegistration.register();
// export { default } from "./storybook";
