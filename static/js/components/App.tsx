import { useCallback, useRef, useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
import { SupportedLocale, SUPPORTED_LOCALES, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { useActiveProvider } from '../connectors'
import { JSON_RPC_URL } from '../constants'
import styles from '../styles/Home.module.css'
import Web3Connectors from './Web3Connectors'
import {MY_TOKEN_LIST} from './tokenlist'





export default function App() {
  const connectors = useRef<HTMLDivElement>(null)
  const focusConnectors = useCallback(() => connectors.current?.focus(), [])
  const provider = useActiveProvider()
  const [locale, setLocale] = useState<SupportedLocale>('en-US')
  const onSelectLocale = useCallback((e) => setLocale(e.target.value), [])
  const default_ = "1";
  const UNI = '0x4521C9aD6A3D4230803aB752Ed238BE11F8B342F'

  const theme3 = {

    // fontFamily: 'Letter Kids',
  
    primary: '#FFFFFF', // основной текст
    secondary: '#888D9B', // мелкий
    interactive: '#F85C27', //тикеры 
    container: '#393939', // задний фон
    module: '#242425', // передний фон
    accent: '#F85C27', // кнопка купить
    dialog: '#393939',
    borderRadius: 5,
   // outline: '#FFFFFF',
   // dialog: '#FFFFFF',
   }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Buy SANI now</h1>
        <div className={styles.demo}>
           <div className={styles.widget}>
           <SwapWidget className='uniswap_widget'
                theme={theme3}
              jsonRpcEndpoint={JSON_RPC_URL}
              tokenList={MY_TOKEN_LIST}
              provider={provider}
              locale={locale}
              onConnectWallet={focusConnectors}
              defaultInputTokenAddress="NATIVE"
              defaultInputAmount={default_}
              defaultOutputTokenAddress="0x4521C9aD6A3D4230803aB752Ed238BE11F8B342F"
            />
            </div>
            </div>
        <div className={styles.title_coonectors}>
          <Web3Connectors />
          </div>
      </main>
    </div>
  )
}
