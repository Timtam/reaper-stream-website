import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Loading from "./Loading";
import NotFound from "./NotFound";
import TTQuickstart from "./TTQuickstart";

function Navigation() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TTQuickstart" element={<TTQuickstart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Navigation;
