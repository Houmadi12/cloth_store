import NewThisWeek from "@/components/NewThisWeek";
import Recherche from "../components/Recherche"
import NewCollection from "@/components/NewCollection";

export default function Page() {
  return (
    <div>
      <Recherche />
      <NewCollection />
      <NewThisWeek />
    </div>
  );
}
