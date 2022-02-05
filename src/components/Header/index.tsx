import Link from "next/link"
import { ActiveLink } from "../ActiveLink"
import { SignInButton } from "../SignInButton"
import styles from "./styles.module.scss"

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news"/>
                <nav>
                    <ActiveLink href="/" activeClassName={styles.active}>
                        <a className={styles.active}>Home</a>
                    </ActiveLink>
                    {/* <Link href="/posts" prefetch> */}
                    <ActiveLink href="/posts" activeClassName={styles.active}>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}