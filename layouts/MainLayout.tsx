import s from "../styles/Home.module.css";
import Link from "next/link";
import {ReactNode} from "react";
import {useRouter} from "next/router";

interface MainLayoutProps {
   children: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
   const path = useRouter()

   return (
      <div className={s.site}>
         <header className={s.header}>
            <Link href="/">
               <a>home</a>
            </Link>
            <Link href="/delivery">
               <a>delivery</a>
            </Link>
            <Link href="/categories">
               <a>catalog</a>
            </Link>
         </header>
         <main className={s.main}>
            {
               path.basePath === '/' &&
               <aside>
                  aside
               </aside>
            }

            {children}
         </main>
         <footer className={s.footer}>footer</footer>
      </div>
   )
}

export default MainLayout