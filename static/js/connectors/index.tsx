import type { Web3Provider } from '@ethersproject/providers'
import { getPriorityConnector } from '@web3-react/core'
import { Connector } from '@web3-react/types'
import metamask from '../img/metamask.png' 
import walletconnect from '../img/walletconnect.png'

import metaMask, { isMetaMask } from './metaMask'
import walletConnect, { isWalletConnect } from './walletConnect'

export type { Web3Connector } from './utils'


export function getConnectorName(connector: Connector): any {
  if (isMetaMask(connector)) {
    return (<>connect metamask <img style={{width: '22px', marginTop: '0px', position: 'absolute'}} src={metamask}/></>)
  } else if (isWalletConnect(connector)) {
    return (<>wallet connect <img style={{width: '22px', marginTop: '0px', position: 'absolute'}} src={walletconnect}/></>)
  } else {
    throw new Error('Unknown Connector')
  }
}

export const connectors = [metaMask, walletConnect]

export function useActiveProvider(): Web3Provider | undefined {
  return getPriorityConnector(...connectors).usePriorityProvider() as Web3Provider
}
