import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "./app/store"

import { lazy, Suspense } from "react"
import LoadingScreen from "./components/pages/LoadingPage"
import "./index.css"
import ThemeProvider from "./context/ThemeProvider"
const App = lazy(() => import("./App"))

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<LoadingScreen />}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </Suspense>
        </PersistGate>
    </Provider>
)
