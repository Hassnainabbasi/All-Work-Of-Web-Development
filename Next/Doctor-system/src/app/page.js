import DoctorSection from "@/components/ui/DoctorSection";
import Hero from "@/components/ui/Hero";

export default function Home() {
  return (
   <div>
    <Hero/>
    <DoctorSection Home={true}/>
   </div>
  );
}

