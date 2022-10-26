import MainLayout from "../../layouts/MainLayout";
import {useRouter} from "next/router";

export default function Catalog() {
   const name = useRouter()

   return (
      <MainLayout>
         <h2>{name.query.name}</h2>


      </MainLayout>
   )
}