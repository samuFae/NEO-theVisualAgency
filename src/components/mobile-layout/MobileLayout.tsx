import GraphElement from "@components/graph-element/GraphElement";
import { Header } from "@components/header/Header";
import InfoBox from "@components/info-box/InfoBox";
import LegendMobile from "@components/legend-mobile/LegendMobile";
import Logo from "@components/logo/Logo";
import { useDataFactory } from "@hooks/dataFactory";
import { useModal } from "@hooks/modal.hook";
import { Spacer } from "@styles/shared/shared";
import { FC } from "react";
import { MobileLayoutWrapper } from "./MobileLayout.styles";

interface IMobileLayout {}

const MobileLayout: FC<IMobileLayout> = () => {
  const { nasaData } = useDataFactory();
  const { openModal } = useModal();

  const handleLegend = () => {
    openModal(<LegendMobile />, {
      title: "Legend"
    });
  };

  return (
    <>
      <MobileLayoutWrapper>
        <Header />
        {nasaData?.map(nasaObject => {
          return (
            <>
              <GraphElement key={nasaObject.id} data={nasaObject} isMobile={true} />
              <Spacer size={0.5} />
            </>
          );
        })}
      </MobileLayoutWrapper>
      <InfoBox label='Legend' positionFixed={true} onClick={handleLegend} />
      <Logo />
    </>
  );
};

export default MobileLayout;
