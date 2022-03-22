import { Box, Divider, Flex, Skeleton, Spacer, Stack } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import { useMemoApi } from "../../hooks/useMemoListApi";
import { FetchMemoList } from "../../types/FetchMemoList";
import { memoListState } from "../../globalState/memo/memoListState";
import { useSetRecoilState } from "recoil";
import { ModalInput } from "../molecule/ModalInput";
import { CategoryTab } from "../templates/CategoryTab";
import { useDragDropData } from "../../hooks/useDragDropData";
import { MemoListHandle } from "./MemoListHandle";

export const MemoList: VFC = memo(() => {
	return (
		<>
			<Box
				bg="white"
				w={["sm", "md", "lg"]}
				height={"850px"}
				m="4"
				borderRadius={"lg"}
				p={"2"}
				shadow={"lg"}
				overflowY="scroll"
			>
				<Stack spacing={"2"}>
					<Flex justify={"center"}>
						<Box marginLeft={5}></Box>
						<Spacer />
						<Box fontFamily={"cursive"} fontSize={"xx-large"}>
							MemoList
						</Box>
						<Spacer />
						<Box justifyContent={"end"}>
							<ModalInput />
						</Box>
					</Flex>
					<CategoryTab>
						<Box>
							<Divider />
							<MemoListHandle />
						</Box>
					</CategoryTab>
				</Stack>
			</Box>
		</>
	);
});
