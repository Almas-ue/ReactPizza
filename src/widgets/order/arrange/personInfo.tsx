import {
  BlockInfo,
  HeaderBlockInfo,
  TitleInfo,
} from "@/components/ui/blockInfo";

const PersonInfo = () => {
  return (
    <BlockInfo miniSize={false}>
      <HeaderBlockInfo>
        <TitleInfo>2. Персональные данные</TitleInfo>
      </HeaderBlockInfo>
    </BlockInfo>
  );
};

export default PersonInfo;
