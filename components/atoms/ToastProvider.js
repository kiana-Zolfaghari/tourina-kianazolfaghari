import { Toaster } from "react-hot-toast";
import "../../styles/global.css";

function ToastProvider({ children }) {
  return (
    <html lang="fa">
      <body>
        {children}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}

export default ToastProvider;
