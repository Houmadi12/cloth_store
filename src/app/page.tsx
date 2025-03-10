import NewThisWeek from "@/components/NewThisWeek";
import Recherche from "../components/Recherche"
import NewCollection from "@/components/NewCollection";
import XVICollection from "@/components/XVICollection"
import FashionApproach from "@/components/FashionApproach";
import FashionGallery from "@/components/FashionGallery";

export default function Page() {
  return (
    <div>
      <Recherche />
      <NewCollection />
      <NewThisWeek />
      <XVICollection />
      <FashionApproach />
      <FashionGallery />
    </div>
  );
}
