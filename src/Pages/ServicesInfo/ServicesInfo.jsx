
import ApplyingForm from "../../Components/ApplyingForm/ApplyingForm";
import HowApply from "../../Components/Home/HowApply/HowApply";
import ServicesSections from "../../Components/Services/ServicesSections/ServicesSections";
import ServiceDetails from "../../Components/ServicesInfo/ServiceDetails";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ServicesInfo() {
   const param = useParams();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [param.id]);
  return (
    <>
    <ServiceDetails/>
    {/* <ApplyingForm/> */}
    <HowApply/>
    <ServicesSections/>
      </>
  );
}
