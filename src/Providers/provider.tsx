import { ProductProvider } from "./ProductContext/ProductContext"
import { UserProvider } from "./UserContext"
import { IUserContextProps } from "./UserContext/@typesUser"

const Providers = ({children}: IUserContextProps) => (
    <UserProvider>
        <ProductProvider>
            {children}
        </ProductProvider>
    </UserProvider>

)

export default Providers;