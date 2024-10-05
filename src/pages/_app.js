import ProfileContextProvier from "@/context/ProfileContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <ProfileContextProvier>
    <Component {...pageProps} />
  </ProfileContextProvier>;
}
