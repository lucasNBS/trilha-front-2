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
  setIsSubscribed: () => { },
  isVisible: false,
  setIsVisible: () => { },
  data: {} as DataType,
  setData: () => { },
})

type SubscriptionContextProps = {
  children: ReactNode
}

export default function SubscriptionContext({ children }: SubscriptionContextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [data, setData] = useState<DataType>({} as DataType)

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