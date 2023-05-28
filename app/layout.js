import "@styles/global.css";

import Nav from "@components/Nav";

const metadata = {
    title: "LooseScrews",
    desc: "For all your screwing needs!"
}

const layout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app">
                <Nav />
                { children }  
            </main>
        </body>
    </html>
  )
}

export default layout