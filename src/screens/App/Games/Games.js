import { VStack, Text, Center } from "native-base";
import React, { useState, useRef } from "react";

import { Heading } from "../../../components/molecules/Heading";

export default function Games({ navigation }) {
	return (
		<VStack space={4} flex={1}>
			<Center flex={1}>
				<Text fontWeight={"bold"}>Game Screen</Text>
			</Center>
		</VStack>
	);
}
