import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "./app/store"

import { lazy, StrictMode, Suspense } from "react"
import LoadingScreen from "./components/customs/LoadingScreen"
import "./index.css"
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<LoadingScreen />}>
                    <App />
                </Suspense>
            </PersistGate>
        </Provider>
    </StrictMode>
)
