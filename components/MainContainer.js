import NavBar from "./NavBar";

export default function MainContainer({children}) {
    return (
        <>
            <NavBar></NavBar>
            <div>{children}</div>
        </>
    )
}