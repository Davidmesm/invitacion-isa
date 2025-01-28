import db from "@/lib/firestore";
import { collection, getDocs } from "firebase/firestore";
import InvitadosTable from "./(components)/invitados-table";


export default async function Home() {
  const querySnapshot = await getDocs(collection(db, "invitados"));
  const invitados = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    invitados.push({ id: doc.id, ...data });
  });

  return (
    <div className=''>
      <InvitadosTable invitados={invitados}/>
    </div>
  );
}
