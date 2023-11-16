import MyNavBar from "../components/MyNavBar";
import MyFooter from "../components/MyFooter";
export default function Layout({ children }) {
  return (
    <div>
      <MyNavBar />
      {children}
      <MyFooter />
    </div>
  );
}
