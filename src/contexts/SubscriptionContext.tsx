import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from "react"

type DataType = {
  name: string,
  gameOption: string
}

type SubscriptionProviderType = {
  isSubscribed: boolean,
  setIsSubscribed: Dispatch<SetStateAction<boolean>>,
  isVisible: boolean,
  setIsVisible: Dispatch<SetStateAction<boolean>>,
  data: DataType,
  setData: Dispatch<SetStateAction<DataType>>
}

export const SubscriptionProvider = createContext<SubscriptionProviderType>({
  isSubscribed: false,
  setIsSubscribed: (pre: SetStateAction<boolean>) => { },
  isVisible: false,
  setIsVisible: (pre: SetStateAction<boolean>) => { },
  data: {} as DataType,
  setData: (pre: SetStateAction<DataType>) => { },
})

type SubscriptionContextProps = {
  children: ReactNode
}

export default function SubscriptionContext({ children }: SubscriptionContextProps) {
  const storage = sessionStorage.getItem("isSubscribed")

  const [isVisible, setIsVisible] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState<boolean>(
    JSON.parse(storage ? storage : "false")
  )
  const [data, setData] = useState<DataType>({} as DataType)

  useEffect(() => {
    sessionStorage.setItem("isSubscribed", JSON.stringify(isSubscribed))
  }, [isSubscribed])

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false)
      }, 4000)
    }
  }, [isVisible])

  return (
    <SubscriptionProvider.Provider
      value={{
        isSubscribed,
        setIsSubscribed,
        isVisible,
        setIsVisible,
        data,
        setData
      }}
    >
      {children}
    </SubscriptionProvider.Provider>
  )
}