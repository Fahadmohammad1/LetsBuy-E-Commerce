import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./redux/store";
import { routes } from "./routes/Routes/routes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
