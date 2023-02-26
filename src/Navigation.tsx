import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import config from "./config.json";
import Home from "./Home";
import Live from "./Live";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Offline from "./Offline";
import TTQuickstart from "./TTQuickstart";

function Navigation() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/live" element={<Live ytUrl={config.ytUrl} />} />
        <Route
          path="/offline"
          element={<Offline nextStream={config.nextStream} />}
        />
        <Route path="/TTQuickstart" element={<TTQuickstart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Navigation;
