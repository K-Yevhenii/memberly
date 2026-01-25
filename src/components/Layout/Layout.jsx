import "./Layout.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <main className="layout__main container">{children}</main>
    </div>
  );
}

export default Layout;
