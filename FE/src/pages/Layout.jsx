import MyNavBar from "../components/MyNavBar";

export default function Layout({ children }) {
  return (
    <div>
      <MyNavBar />
      {children}
    </div>
  );
}
